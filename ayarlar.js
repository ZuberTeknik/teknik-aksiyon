// ZÜBER Teknik Aksiyon Paneli — Microsoft 365 bağlantı ayarları (BT tarafından doldurulur)
// Bu dosya ÇİFT TIKLANARAK ÇALIŞTIRILMAZ. Düzenlemek için: sağ tık > Birlikte aç > Not Defteri.
// Bu dosyada parola veya gizli anahtar YOKTUR; tenantId ve clientId herkese açık tanımlayıcılardır.
if (typeof window === 'undefined') {
  // Windows'ta çift tıklanınca Windows Script Host çalıştırır; hata yerine açıklama göster
  WScript.Echo('Bu dosya panelin ayar dosyas\u0131d\u0131r, \u00e7al\u0131\u015ft\u0131r\u0131lmaz.\n\nD\u00fczenlemek i\u00e7in: dosyaya sa\u011f t\u0131klay\u0131n > Birlikte a\u00e7 > Not Defteri.\nPanel, BT ekibi dosyalar\u0131 web sunucusuna y\u00fckledikten sonra taray\u0131c\u0131dan a\u00e7\u0131l\u0131r.');
} else {
  window.TAP_CONFIG = {
    mode: 'm365',
    tenantId: 'b9038edd-e64d-4dd8-9aba-da87e2cb523e',
    clientId: 'e65d3275-8e59-4e94-aa43-701624441bfd',
    siteUrl: 'https://alterna7.sharepoint.com/sites/ZuberShareFolder', // verilerin tutulacağı SharePoint sitesi
    redirectUri: 'https://zuberteknik.github.io/teknik-aksiyon/'
  };
}
