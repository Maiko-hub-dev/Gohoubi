<?php
declare(strict_types=1);

// ========================================
// ① POST送信以外は受け付けない
// ========================================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html', true, 303);
    exit;
}

// ========================================
// ② 入力内容を取得
// ========================================
function getInput(string $key): string
{
    $value = $_POST[$key] ?? '';

    return is_string($value) ? trim($value) : '';
}

$name = getInput('name');
$email = getInput('email');
$tel = getInput('tel');
$category = getInput('category');
$message = getInput('message');
$privacy = getInput('privacy');

// お問い合わせ項目（複数選択）
$allowedContents = [
    'キャンペーンについて',
    'コースについて',
    'コーナーについて',
];
$contents = $_POST['content'] ?? [];

if (!is_array($contents)) {
    $contents = [];
}
$contents = array_values(array_filter(
    $contents,
    fn($item) => is_string($item)
        && in_array($item, $allowedContents, true)
));


// ========================================
// ③ 必須項目のチェック
// ========================================
if (
    $name === '' ||
    $email === '' ||
    $tel === '' ||

    $message === '' ||
    count($contents) === 0 ||
    $privacy !== 'on'
) {
    header('Location: contact_error.html', true, 303);
    exit;
}

// ========================================
// ④ メールアドレスの形式チェック
// ========================================
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: contact_error.html', true, 303);
    exit;
}

// ========================================
// ⑤ 文字数・改行などのチェック
// ========================================
if (
    mb_strlen($name) > 100 ||
    mb_strlen($email) > 254 ||
    mb_strlen($tel) > 30 ||
    mb_strlen($message) > 5000 ||
    preg_match('/[\r\n]/', $name) ||
    preg_match('/[\r\n]/', $email) ||
    preg_match('/[\r\n]/', $tel)
) {
    header('Location: contact_error.html', true, 303);
    exit;
}
// キャンペーンの値を確認
$categories = [
    '' => '指定なし',
    'pointcard' => 'ポイント企画',
    'anniversary' => '周年記念',
    'birthday' => '誕生日祝い',
];

if (!array_key_exists($category, $categories)) {
    header('Location: contact_error.html', true, 303);
    exit;
}

// ========================================
// ⑥ 管理者宛メールの作成
// ========================================
$to = 'nekokiveizuki@gmail.com'; // 実際の受信先に変更

$subject = '【ごほうびビュッフェ】お問い合わせがありました';

$contentText = implode('、', $contents);
$categoryText = $categories[$category];

$body = "お問い合わせがありました。\n\n"
      . "【お名前】\n{$name}\n\n"
      . "【メールアドレス】\n{$email}\n\n"
      . "【電話番号】\n{$tel}\n\n"
      . "【お問い合わせ項目】\n{$contentText}\n\n"
      . "【キャンペーン】\n{$categoryText}\n\n"
      . "【お問い合わせ内容】\n{$message}\n";

// サイトのドメインに合わせて変更
$headers = [
    'From' => 'TreatMeets <no-reply@example.com>',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

// ========================================
// ⑦ メールを送信
// ========================================
$sent = mail(
    $to,
    mb_encode_mimeheader($subject, 'UTF-8'),
    $body,
    implode("\r\n", $headers)
);

// ========================================
// ⑧ 送信結果によってページを切り替え
// ========================================
if ($sent) {
    header('Location: contact_thanks.html', true, 303);
    exit;
}

// 送信失敗時はサンクスページに進ませない
http_response_code(500);
error_log('TreatMeets contact mail delivery failed.');

echo 'メールの送信に失敗しました。時間をおいて再度お試しください。';
