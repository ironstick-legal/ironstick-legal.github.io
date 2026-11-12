# GDPR veri akışı beyanı

> IRONSTICK GDPR veri akışı beyanı: verilerin IRONSTICK'ten harici bir yapay zekâ sağlayıcısına doğru çıktığı her yol, neyin iletildiği ve takma adlandırmanın nerede devreye girdiği.

Orijinal sayfa: https://www.ironstick.legal/gdpr_tr.html

---

Harici büyük dil modelleriyle (Large Language Models) ilişkiler

Verilerin IRONSTICK'ten harici bir LLM'e doğru çıktığı her yolun, tam olarak neyin, hangi biçimde
iletildiğinin ve takma adlandırma katmanının nerede devreye girdiğinin koddan türetilmiş nesnel açıklaması.
Windows masaüstü sürümü. Bu belge
yalnızca IRONSTICK'in davranışını açıklar — **yapay zekâ sağlayıcısının aldığı verilerle ne yaptığı
yalnızca sağlayıcının kendi koşullarına tabidir** (kullanıcının
yapılandırdığı sağlayıcıların kullanım koşulları ve gizlilik politikaları: Alibaba Cloud (Qwen),
Moonshot AI (Kimi), OpenAI, Anthropic ve etkinleştirilmişse Groq, OpenRouter ve
Mistral; Google yalnızca dışa aktarmalar için Google Drive kullanılıyorsa); kullanıcı bunları ayrıca incelemelidir.

Sürüm 1.0.7 — Kasım 2026 itibarıyla

**Özet.**

- **Depolama.** Tüm veriler tek bir yerel veri dizininde bulunur. Veritabanı,
belge deposu, yapılandırma dosyası ve yapay zekâ ara belleği, beklemedeyken
AES-256 ile şifrelenir. Düz metin olarak yalnızca açılmış belgelerin geçici çalışma kopyaları,
tarama girişi, dışa aktarmalar ve giden dosyalar, kısa ömürlü
akran incelemesi (peer review) arabelleği ve etkinleştirilmişse tanılama günlüğü kalır (bölüm 8).
- **Harici yapay zekâ.** Uygulama içindeki yapay zekâ çağrıları yalnızca kullanıcının kendi API anahtarıyla yapılır.
Merkezi yönlendirici üzerinden yapılan çağrılar varsayılan olarak takma adlandırılır ve
yerel bir denetim günlüğüne kaydedilir; bilinçli düz metin istisnaları 2.3'te listelenmiştir.
- **Onay.** Yapay zekâ sohbeti, belge kaydı ve kişi araştırması, oturum veya program çalışması
başına bir kez sorar; kelime işlemcide bir yapay zekâ işlevini başlatmak
onay anlamına gelir. Birkaç arka plan işlevi bulut yapay zekâsını kendi iletişim kutusu olmadan çağırır:
e-posta ön değerlendirmesi, veri tutarlılığı izleyicisi, günlük brifing, diyalog özeti
ve Red/Blue Team denetimi (bölüm 3).
- **Masaüstü yapay zekâ Bridge'i.** Gerçek dava verilerini kullanıcının kendi masaüstü yapay zekâsının sağlayıcısına ileten isteğe bağlı bir ek modül;
her program çalışmasında bir onay iletişim kutusundan sonra (bölüm 4.9).
- **Diğer hizmetler.** Taraf adresleri her gün
OpenStreetMap Nominatim ile coğrafi olarak kodlanır (yalnızca adres, ad yok); başlangıçtan sonra ve
ardından her altı saatte bir [www.ironstick.legal](https://www.ironstick.legal/index_tr.html) adresinden bir haber dosyası indirilir; yazılım üreticisine hiçbir dava veya
kişi verisi gönderilmez (bölüm 1 ve 7).
- **IRONSTICK SERVER.** İsteğe bağlı, büronun yerel ağdaki kendi
NAS cihazında, internet bağlantısı olmadan. Belgeler sunucuya yalnızca
AES-256 ile şifrelenmiş dosyalar olarak ulaşır ve orada da yalnızca bu şekilde bulunur; sunucu bunların düz metnini asla görmez. Dava başına çalışma süresi
ve her iş istasyonunun yedekleme olayları büronun yöneticisi tarafından görülebilir
(bölüm 9).

## 1. Kapsam ve uç noktalar

![Solda yapay zekâ API'si, masaüstü yapay zekâ uygulaması ve MCP sunucusu, ortada IRONSTICK istemcisi, sağda AES-256 veri kasası, IRONSTICK sunucusu ve tarama uygulaması](https://www.ironstick.legal/img/65_ai_client_vault.png)

Uygulama içindeki harici yapay zekâ çağrıları, **otomatik kademenin o anda kullandığı
sağlayıcıya** gider. Kullanıcı en fazla dört sağlayıcı yapılandırabilir; anahtarı kayıtlı
her sağlayıcı, en düşük maliyetli olan önce gelmek üzere şu sabit sırayla
kullanılır: **Qwen (Alibaba Cloud) → Kimi (Moonshot AI) →
ChatGPT (OpenAI) → Claude (Anthropic)**. IRONSTICK her program başlangıcında
bunlardan hangilerinin yanıt verdiğini kontrol eder. Bir sağlayıcı devre dışı kalırsa aynı istek
bir sonrakine gider. Devre dışı kalan sağlayıcı, hataya bağlı bir bekleme süresinden sonra yeniden
denenir; günün geri kalanında
yalnızca bakiyesi tükenmişse veya nedeni bilinmiyorsa atlanır. İletilen içerik
her sağlayıcıda aynıdır (bölüm 3'ten itibaren: yönlendirici tarafından takma adlandırılmış,
onay, denetim günlüğü). Uç noktalar şunlardır:

- **Claude:** POST https://api.anthropic.com/v1/messages,
kullanıcının kendi API anahtarı.
- **ChatGPT:** POST https://api.openai.com/v1/chat/completions,
kullanıcının kendi API anahtarı.
- **Qwen:** POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
(Alibaba Cloud Model Studio, uluslararası bölge), kullanıcının kendi API anahtarı.
- **Kimi:** POST https://api.moonshot.ai/v1/chat/completions
(Moonshot AI), kullanıcının kendi API anahtarı.

**Ücretsiz arka plan sağlayıcıları (isteğe bağlı).** Kullanıcı ayrıca
**Groq**, **OpenRouter** ve **Mistral**'ın ücretsiz tekliflerini
kaydedebilir. IRONSTICK bunları yalnızca arka planda çalışan görevler için kullanır:
e-posta ön değerlendirmesi, veri tutarlılığı izleyicisi, günlük brifing, diyalog özeti,
transkripsiyonlarda konuşmacı ataması, mevzuat metinlerinin alınması ve durum tablosu. Bu
sağlayıcıların her birinin yapılandırmada kendi açma/kapama anahtarı vardır; bir sağlayıcı
yalnızca anahtarı kayıtlıysa ve açma/kapama anahtarı açıksa kullanılır. Sohbet,
dilekçeler ve Red/Blue Team denetimi için **asla** kullanılmazlar. Hiçbiri
kullanılamıyorsa yukarıda açıklanan kademe devreye girer.
Takma adlandırma, onay ve denetim günlüğü ilgili
göreve göre belirlenir (bölüm 4). Uç noktalar şunlardır:

- **Groq:** POST https://api.groq.com/openai/v1/chat/completions,
kullanıcının kendi API anahtarı.
- **OpenRouter:** POST https://openrouter.ai/api/v1/chat/completions,
kullanıcının kendi API anahtarı.
- **Mistral:** POST https://api.mistral.ai/v1/chat/completions,
kullanıcının kendi API anahtarı.

**Ücretsiz teklifler — yapılandırmadaki not.** Yapılandırmada bu sağlayıcıların her birinin altındaki bir not, IRONSTICK'in onu — API anahtarı kayıtlı ve açma/kapama anahtarı açık olduğu sürece — özetler ve e-posta ön değerlendirmesi gibi arka plan görevleri için kullandığını ve bu sırada bu sağlayıcıya veri ilettiğini belirtir. Bu sağlayıcılardan birini etkinleştirmeden önce, koşullarının
veri işleyenler için gerekli olan veri işleme sözleşmesini
öngörüp öngörmediğini ve meslek hukukunuza uygun olup olmadığını kontrol edin. Devre dışı bırakılmış bir sağlayıcı kullanılmaz.

Her sağlayıcı için yapılandırılabilir üç model kademesi kullanılır (küçük / orta /
büyük). Ayrı ve isteğe bağlı bir kanal ise
**masaüstü yapay zekâ Bridge'idir** (bölüm 4.9): Orada veriler kullanıcının kendi
yerel masaüstü yapay zekâsına (Claude Desktop / Claude Code, ChatGPT Desktop, Qwen
Desktop **veya** Kimi Desktop), yani bu yapay zekânın sağlayıcısına (Anthropic, OpenAI,
Alibaba Cloud/Qwen veya Moonshot AI/Kimi), kullanıcının bu sağlayıcıdaki kendi aboneliği/hesabı çerçevesinde akar.
Bridge'ler paralel çalışabilir: Her masaüstü yapay zekânın kendi küçük Bridge programı vardır,
hepsi çalışan uygulamadaki aynı yerel uç noktaya bağlanır ve
aynı dava üzerinde aynı anda çalışabilirler. Yazılım üreticisine hiçbir dava veya
kişi verisi gönderilmez. Üreticiyle tek temas, [www.ironstick.legal](https://www.ironstick.legal/index_tr.html) adresinden bir haber dosyasının
basit bir şekilde indirilmesidir (başlangıçtan sonra ve ardından her altı saatte bir, bölüm 7); bu indirme
teknik bağlantının kendisi dışında hiçbir veri içermez.
**IRONSTICK SERVER** (bölüm 9) bunu değiştirmez: Sunucuyu
büro kendisi, kendi donanımında, kendi
ağı içinde işletir — sunucu asla üreticiyle ve asla bir yapay zekâ sağlayıcısıyla iletişime geçmez.

**Ana anahtar, kullanıcının kendi erişimidir.** Uygulama içinde harici
yapay zekâ işleme ancak kullanıcı bir yapay zekâ sağlayıcısında kendi hesabını
açmış ve kendi erişim anahtarını yapılandırmaya girmişse gerçekleşir.
**Yapılandırılmış bir sağlayıcı olmadan uygulama içinde hiçbir harici yapay zekâ çağrısı yapılamaz** — bu durumda
bölüm 4'te açıklanan her işlev yerel kalır veya basitçe kullanılamaz. Bu
hesap, kullanıcı ile sağlayıcı arasında doğrudan bir sözleşmedir; IRONSTICK
sözleşmenin tarafı değildir. Aynı durum, kullanıcının seçilen masaüstü yapay zekâ sağlayıcısında
kendi aboneliğini/hesabını gerektiren masaüstü yapay zekâ Bridge'i için de geçerlidir
(Anthropic, OpenAI, Alibaba Cloud/Qwen veya Moonshot AI/Kimi). **Gizli** olarak işaretlenen belgeler
masaüstü yapay zekâ Bridge'inin ve sohbetin araçlarından,
yapay zekâ talimat paketinden ve oluşturulan her çıktıdan (ekler, dosya dökümleri, dışa aktarmalar) hariç tutulur;
kayıt sırasında işlenmeleri, kullanıcının kayıt anındaki bilinçli
kararına tabidir (bölüm 4.1).

Tamamen yerel (bilgisayardan hiçbir şey çıkmaz): metin çıkarma ve OCR,
deterministik yerel sohbet katmanı, genel arama, ilgililik radarı, yazışma zinciri analizi,
dosya dökümü/PDF oluşturma, karartma bulucunun yerel çalışması, konuşma tanıma
(kayıtların transkripsiyonu) ve yapay zekâ talimat paketinin oluşturulması.

## 2. Takma adlandırma katmanı

Uygulama içinde merkezi yapay zekâ yönlendiricisi üzerinden yapılan her çağrı varsayılan olarak takma adlandırılır:
Giden metindeki tanımlayıcılar yer tutucularla değiştirilir ve yanıt yerel olarak geri dönüştürülür. Takma adlandırıcı
eksiksiz oluşturulamazsa hiçbir şey gönderilmez. İstisnalar 2.3'te listelenmiştir. Eşleştirme
yalnızca çalışma belleğinde, her işlem için yeni bir eşleştirme olarak bulunur; asla kaydedilmez.

![Üstte: IRONSTICK istemcisi, dişlileri olan anonimleştirilmiş figür, yapay zekâ API'si; altta: IRONSTICK istemcisi, kullanıcı, masaüstü yapay zekâ uygulaması](https://www.ironstick.legal/img/66_pseudonymization.png)

### 2.1 Neler değiştirilir

| Kaynak | Alanlar | Yer tutucu ailesi (dahili tanımlayıcılar) |
| --- | --- | --- |
| Müvekkil kayıtları | Ad, tanımlayıcı alanından ulusal kimlik numarası (örn. Romanya CNP), telefon, e-posta, adres ve yer | $PARTEI_A$ (taraf), $CNP_A$ (kimlik numarası), $TEL_A$ (telefon), $MAIL_A$ (e-posta), $ADRESSE_A$ (adres) |
| Kişiler / varlıklar | tam ad (kişi veya şirket), tanımlayıcı alanından ulusal kimlik veya şirket numarası (örn. Romanya CNP veya CUI) | $PARTEI_B$ (taraf) / $FIRMA_A$ (şirket), $CNP_B$ (kimlik numarası) |
| Davalar | dava numarası, karşı taraf, davacı | $FALL_A$ (dava), $PARTEI_C$ (taraf)… |
| Örüntü katmanı (serbest metindeki bilinmeyen değerler) | mahkeme dosya numaraları, kişi numaraları, IBAN'lar, e-posta adresleri ve telefon numaraları. Diğer ulusal kimlik numaraları yalnızca müvekkil veya kişi kaydında kayıtlıysa değiştirilir. | aynı yer tutucu aileleri |

### 2.2 Bilinçli olarak değiştirilmeyenler

- **Tarihler, saatler ve para tutarları** — hukuki değerlendirme için değiştirilmeden gereklidirler.
- **Kurum adları** (mahkemeler, resmî makamlar) — sözlükte
yer almazlar ve kamu kurumlarıdır.
- **Kendi kaydı olmayan üçüncü kişiler** — müvekkil, kişi veya dava kaydı olarak kaydedilmemiş tanıklar, doktorlar, avukatlar, hâkimler veya şirketler; bir yer tutucuyla değiştirilmesi gereken kişi basitçe kişi olarak kaydedilir.
- **Müvekkil olmayanların adresleri** — müvekkilin kayıtlı adresi bir yer tutucuyla değiştirilir.
- Belgelerin tüm **esasa ilişkin içeriği** (iddialar, teşhisler,
anlatım) — yalnızca tanımlayıcılar değiştirilir, olaylar değil.

### 2.3 Bilinçli gerçek ad istisnaları

- **Kişi web araştırması (aşama 1)** ve kişiler / kurumlar için **formların otomatik doldurulması**:
$PARTEI_A$ için bir web araması anlamsızdır; bu nedenle
gerçek ad bilinçli olarak gönderilir.
- **Karartmanın yapay zekâ bulucusu**: Daha önce yerel olarak
karartılmış metni alır ve bulduğu *bilinmeyen üçüncü kişilerin* gerçek adlarıyla
yanıt vermelidir — takma adlandırma bu tek amaç için kapatılmıştır.
- **Sesli okuma işlevinin (TTS) ön işlemesi**: bkz. 4.6 — cümleler düz metin olarak
dışarı çıkar.
- **Masaüstü yapay zekâ Bridge'i**: bilinçli olarak ham veriler (bölüm 4.9).

## 3. Onay anları ve denetim günlüğü

Merkezi yönlendirici üzerinden geçen çağrılar bir onaya bağlıdır ve kayıt altına alınır: Her
model turu yerel denetim tablosuna, **bilgisayardan gerçekten çıktığı, yer tutucularla
değiştirilmiş biçimiyle** tam istek ve yanıtı içeren bir satır
yazar; reddedilen veya engellenen denemeler içeriksiz olarak kaydedilir. Bir
işlev onay istediğinde iletişim kutusu model kademesini ve yaklaşık istek boyutunu belirtir ve bir izin
güncel ekran oturumu için geçerlidir (belge kaydında: güncel program çalışması için).

**Kendi onay iletişim kutusu olmayan yönlendirici akışları:**
e-posta ön değerlendirmesi (arka plan modunda olduğu gibi e-posta ekranındaki manuel alımda da,
bölüm 4.2), veri tutarlılığı izleyicisinin analiz çalışması (4.5),
günlük brifing (4.4a), API sohbetinin diyalog özeti ve Red/Blue
Team denetimi (4.7) ile karartmanın yapay zekâ bulucusu (açma/kapama anahtarının açılması
onay anlamına gelir). Bunlar yine de takma adlandırılır (karartma bulucunun amaçlanan gerçek ad yanıtları
hariç) ve yine de denetim günlüğüne kaydedilir.

**Yönlendiriciyi atlayan akışlar:**
kelime işlemcinin yapay zekâ işlevleri, sesli okuma işlevinin ön işlemesi ve Dosya→Markdown yapay zekâ düzeltmesi
API'yi doğrudan çağırır. Bunlar takma adlandırılır (istisna: sesli okuma işlevi),
ancak **kendi onay iletişim kutusunu göstermez ve
denetim günlüğüne satır yazmaz**. Bu işlevlerin kullanıcı tarafından kullanılması (yapay zekâ düğmesine basmak,
bir oluşturmayı başlatmak, yapay zekâ anahtarı açıkken sesli okuma işlevini başlatmak)
onay anıdır.

## 4. Veri akışları, kullanım senaryosu bazında

### 4.1 Belge kaydı

Metin çıkarma ve OCR yerel olarak yapılır. Bir API anahtarı yapılandırılmışsa IRONSTICK
program çalışması başına bir kez sorar; ardından en fazla dört çağrı türü çalışır (hepsi takma adlandırılmış, hepsi
denetim günlüğüne kaydedilmiş):

- **Ana belgenin tanınması** (küçük kademe): OCR ham metninden alıntılar — yalnızca düşük kaliteli taramalarda.
- **OCR düzeltmesi** (küçük kademe): belge metninden sınırlı bir alıntı.
- **Sınıflandırma** (orta kademe): belge metninden sınırlı bir alıntı, **artı sistem listeleri**: eksiksiz dava listesi (dava numarası,
müvekkil adı, karşı taraf — yer tutucularla değiştirilmiş), bilinen adlardan oluşan bir küme (yer tutucularla değiştirilmiş) ve kurum türleri ile belge türlerinin kod listeleri
(yer tutucusuz adlandırmalar). Yedek düzey: küçük kademe,
listeler olmadan.
- **Kaydetme sırasında bağlamlandırma** (küçük kademe): belgenin üst verileri ve
sınırlı uzunlukta tam metin, artı **aynı müvekkilin her aktif delili** için bir dizin satırı (ID, tarih, başlık) — çapraz atıfları
güvenceye almak için kullanılır. Gizli olarak işaretlenen belgeler için de çalışır (kullanıcının
bilinçli kararı).

### 4.2 E-posta izleyicisi (ön değerlendirme)

Dava ataması **yerel olarak ve yapay zekâ olmadan** yapılır. Yeni e-postalar
arka planda başlangıçta ve ardından her beş dakikada bir alınır. Davası
yerel tanıma tarafından zaten belirlenen bir e-posta (dava numarası, mektup numarası, müvekkil numarası veya
kendi bir dilekçeye atıf) yapay zekâ çağrısı tetiklemez. Diğer her
e-posta için **küçük kademede bir çağrı** aciliyeti tam olarak şunlarla değerlendirir: göndericinin adı ve
adresi, konu ve düz metin olarak kayıtlı önizleme alıntısı (sabit sınırlı) — **asla tam mesaj metni değil**, hiçbir
ek değil ve **hiçbir dava listesi değil**. Yanıt: öncelik ve gerekçe. Ücretsiz
arka plan sağlayıcıları etkinse (bölüm 1), bu çağrı onlar üzerinden yapılabilir.
**Onay iletişim kutusu gösterilmez**; ne arka plan modunda ne de
e-posta ekranındaki manuel alımda: Ön değerlendirme, bir e-posta hesabı
ve bir yapay zekâ sağlayıcısı yapılandırıldığı anda otomatik olarak çalışır. Takma adlandırılmış ve denetim günlüğüne kaydedilmiş.

**İzleme pikseli yok.** İzleyicide bir e-postanın açılması asla
göndericinin sunucusuyla iletişim kurmaz: Bir internet adresi üzerinden referans verilen görüntüler (görünmez
izleme pikselleri dahil) yüklenmez ve bir not ile birlikte yer tutucu olarak
görünür; böylece gönderici bir e-postanın ne zaman, kaç kez veya hangi adresten
okunduğunu öğrenemez. Yalnızca e-postanın kendisine gömülü görüntüler gösterilir.

### 4.3 Kişi analizi (web araştırması)

Oturum başına tek seferlik bir onaydan sonra üç aşama:

- **Aşama 1 — Arama:** Arama motorları doğrudan kullanıcının
bilgisayarından sorgulanır; ayrıca sağlayıcının
sunucu taraflı web arama aracı **kişinin gerçek
adıyla düz metin olarak** çağrılır (bir arama için kaçınılmazdır; düz metin olarak kaydedilir).
- **Aşama 2 — Sayfa özetleri** (orta kademe): her sayfa için kişinin adı
(yer tutucuyla değiştirilmiş), URL ve sayfa içeriğinden sınırlı bir alıntı.
- **Aşama 3 — Profil sentezi** (büyük kademe): ad ve yer (yer tutucularla değiştirilmiş)
artı kaynak başına sınırlı uzunlukta toplanan sayfa metinleri.

Sonuç yerel olarak “onaylanmamış” güvenilirlik düzeyiyle kaydedilir. Kişi/kurum formlarındaki ilgili
**Otomatik doldurma** düğmeleri girilen
adı da düz metin olarak gönderir (belgelenmiş istisna).

### 4.3a Kamuya açık kaynaklardan taraf kontrolü

Bir tarafın kamuya açık kaynaklardan kontrolü, bağlı bir yapay zekâ onu ad, yer, bölge, ülke ve
tarafın türüyle (gerçek kişi veya tüzel kişi) çağırdığında uygulamanın
kendisinin yürüttüğü belirlenmiş bir prosedürdür:

- **Dosyalar:** yerel veritabanında adın tam metin
araması — **tamamen yerel**, bilgisayardan hiçbir şey çıkmaz.
- **İnternet:** sabit bir arama sorguları listesi kamuya açık
arama motorlarına, **Google, DuckDuckGo ve Qwant**'a gönderilir. Her sorgu, tarafın ülkesinin dilinde bir
arama teriminden, artı **tarafın gerçek
adından düz metin olarak** ve bazı sorgularda yer veya bölgeden oluşur
(bir arama için kaçınılmazdır). Hiçbir dava, müvekkil veya belge içeriği
iletilmez. Arama motorları sorguları herhangi bir tarayıcı kullanıcısının sorguları gibi görür.

Sonuç, çağıran yapay zekâya işlenmiş, doğrulanmamış bir profil olarak döndürülür.
Ana verilere hiçbir şey yazılmaz: Her bulgu veri tutarlılığı izleyicisinin
denetim kapısından geçer (bölüm 4.5) ve ancak
kullanıcı kabul ederse benimsenir. Yalnızca kamuya açık kaynaklar değerlendirilir.

### 4.4 Günlük tutanak

Ekranın kendisi yereldir. Serbest metin içe aktarılırken önce **yerel** bir
ayrıştırıcı çalışır; yalnızca günlük tutanağa ait bir format işareti bulunamazsa bir yapay zekâ yedek düzeyi
ham metni normalleştirir: Yapıştırılan metin eksiksiz gönderilir, küçük kademe, onay şartına bağlı, takma adlandırılmış, denetim günlüğüne kaydedilmiş. Kayıtlı
günlük tutanak kayıtları bilgisayardan yalnızca sohbetin veya masaüstü yapay zekâ Bridge'inin araç sonuçları olarak
(sınırlı alıntılar) veya yapay zekâ talimat paketi içinde çıkar (bölüm 5).

### 4.4a Günlük brifing

Günün ilk program başlatılışında (Windows) IRONSTICK
arka planda sesli bir günlük brifing hazırlar; bu, başlatma sırasında ve
brifing penceresi kullanıcıya dinlemek isteyip istemediğini sormadan önce gerçekleşir. Brifing metni —
süre sayıları, bugünün ve yarının duruşmaları dava numarası,
müvekkil adı, yer ve mahkemeyle birlikte ve bugünkü randevuların başlıkları —
bulut yapay zekâsına bir kez (küçük kademe) gönderilir; yapay zekâ onu
sistem dilinde sesli düzyazı olarak yeniden ifade eder. Yönlendirici üzerinden takma adlandırılmış, denetim günlüğüne kaydedilmiş, **onay iletişim kutusu yok**.
Ücretsiz arka plan sağlayıcıları etkinse (bölüm 1), bu çağrı
onlar üzerinden yapılabilir. Hiçbir sağlayıcı kullanılamıyorsa bunun yerine yerel olarak oluşturulmuş bir metin kullanılır.

### 4.5 Veri tutarlılığı izleyicisi

Aşama 1 (e-posta ↔ ana veriler) tamamen deterministiktir. Aşama 2,
**her yeni gelen belge için küçük kademede bir çağrı** gönderir (takma adlandırılmış,
denetim günlüğüne kaydedilmiş, **iletişim kutusu yok**); bu çağrı şunları içerir: **bu** belgenin
tam metninden tekilleştirilmiş **iletişim bölümü alıntıları** (adres, telefon ve vergi bilgileri etrafındaki kısa alıntılar),
bu belgenin ve davasının taraf adları ve
her taraf için kayıtlı ana verilerden olası eşleşmelerin **adları** (sözlükte
bulunduğu ölçüde yer tutucularla değiştirilmiş; kurum adları düz metin olarak).
**Kayıtlı ana verilerden iletişim bilgileri ve kimlik numaraları iletilmez.**
Ücretsiz arka plan sağlayıcıları etkinse (bölüm 1), bu çağrı onlar üzerinden
yapılabilir. Yanıt her zaman yalnızca,
kullanıcının izleyicide kabul etmesi gereken bir öneriye dönüşür.

### 4.6 Kelime işlemci (metinde yapay zekâ desteği)

- **Seçimi düzenle:** seçilen cümle/paragraf/bölüm (biçimlendirme
işaretleriyle) **artı bağlam olarak belgeden bir alıntı**
ve kullanıcının talimatı — orta kademe, takma adlandırılmış.
- **Ana hat/içindekiler:** fiilen belgenin tamamı, dizinlenmiş satır listesi olarak
(uzun satırlar kısaltılmış), sınırlı uzunlukta — orta kademe, takma adlandırılmış.
- **Sesli okuma işlevi için ön işleme:** bir belge sesli okunurken, kısaltmaları ve sayıları açık yazmak için **her
cümle tek tek düz metin olarak küçük kademeye gönderilir** —
**takma adlandırma olmadan** (kimlik numaraları
doğru okunabilmeleri için değişmeden geri dönmelidir). Dosya damgaları ve atıf işaretleri
önceden yerel olarak kaldırılır. Sesli okuma işlevinin başlatılması onay
anıdır.

Kelime işlemcinin çağrılarından hiçbiri ayrı bir onay iletişim kutusu
göstermez veya denetim günlüğüne kayıt yazmaz (yönlendiricinin atlanması, bölüm 3).

### 4.7 Red/Blue Team denetimi ve diyalog özeti (API)

Taslak hazırlamaya iki API akışı daha aittir. **Red/Blue Team:** Kullanıcı bunu
etkin sağlayıcı için açtıysa (API anahtarının yanındaki açma/kapama anahtarı; kayıtlı bir
anahtar gereklidir), teslim iletişim kutusu üzerinden aktarılan her resmî belge —
uygulama içi sohbetten ve masaüstü yapay zekâ Bridge'inden
aynı şekilde — aynı sağlayıcı tarafından ayrı bir denetim turunda bir kez daha
karşı tarafın hukuki temsilcisinin bakış açısıyla okunur
(orta kademe). İletilenler: taslak metin, davanın tarihi ve yargı
alanı; yönlendirici üzerinden takma adlandırılmış ve her yönlendirici çağrısı gibi denetim günlüğüne kaydedilmiş;
**onay iletişim kutusu yok** — açma/kapama anahtarı onay anlamına gelir; denetçinin raporu kullanıcıya eklenir. Red/Blue Team denetimi
**asla** ücretsiz arka plan sağlayıcıları üzerinden çalışmaz (bölüm 1). **Diyalog özeti:** Uzun
API sohbet oturumlarında diyaloğun eski bölümü (yalnızca kullanıcının soruları ve
modelin nihai yanıtları, asla araç sonuçları) etkin sağlayıcı tarafından
(küçük kademe, arka planda, **kendi onay iletişim kutusu yok**) ham geçmişin yerini alan kısa bir özete
yoğunlaştırılır; özet şifreli olarak ara belleğe konur ve her seferinde
üzerine yazılır. Takma adlandırılmış ve denetim günlüğüne kaydedilmiş. Ücretsiz arka plan sağlayıcıları etkinse (bölüm 1),
özet onlar üzerinden yapılabilir.

### 4.8 Yapay zekâ sohbeti (harici, API)

Sohbet oturumu başına bir kez onay; orta kademe, gerektiğinde otomatik olarak
büyük kademeye yükseltilir (bu durumda bağlamın tamamı yeniden gönderilir); takma adlandırılmış; her tur
denetim günlüğüne kaydedilir. Her tur şunları iletir: sistem istemi (statik kurallar), **güncel arayüz bağlamı**
(güncel ekran, açık dava/müvekkil, müvekkil adı dahil — yer tutucuyla değiştirilmiş),
açık müvekkilin en fazla **10 yapay zekâ hafıza kaydı**, en son diyalog artı eski turların bir özeti
(4.7) ve sohbetin ara bellek dosyalarının listesi. Modelin çağırdığı her araç
sonucunu API sohbetine geri verir — belge tam metinleri
(daha büyük sonuçlar şifreli ara belleğe konur), e-posta mesaj metinleri ve
günlük tutanaktan alıntılar dahil. Sohbet, masaüstü yapay zekâ Bridge'iyle (4.9) aynı araç katmanını
ve aynı teslim denetimlerini kullanır: dilekçelerin
denetimi, Red/Blue Team (4.7) ve dışa aktarma iletişim kutusu üzerinden teslim —
sistemden çıkan şey sunulmaya hazır bir taslaktır. Yerel sohbet katmanı
rutin istekleri hiçbir iletim olmadan yanıtlar.

İki yardımcı işlev açıkça belirtilmeyi hak eder. **Hava durumu sorgusu**,
adı verilen bir yer için güncel hava durumu verilerini LLM olmayan
Open-Meteo hizmetinden alır (bölüm 7) — bu hizmete yalnızca yer adı veya koordinatları iletilir,
asla dava veya kişi verileri iletilmez. **Konum sorgusu**
yalnızca **en son yerel olarak kaydedilmiş**
güvenlik anlık görüntüsünden yanıt verir (bölüm 8): Yapay zekânın isteği **yeni bir harici sorgu** tetiklemez —
yalnızca diskte zaten bulunanı okur. Her araçta olduğu gibi, bu işlevlerin
döndürdüğü şey yapay zekâ sohbetine, yani yapay zekâ sağlayıcısına geri akar.

### 4.9 Masaüstü yapay zekâ Bridge'i (isteğe bağlı ek modüller)

**Her masaüstü yapay zekâ erişimi, ayrıca satın alınan isteğe bağlı bir modüldür.**
Yalnızca büronun ilgili Bridge modülünü satın aldığı ve
kurduğu yerlerde bulunur; hiçbir modül yoksa Bridge bölümü
yapılandırmada kilitli kalır, yerel uç nokta asla başlamaz ve
bu bölümde açıklanan veri akışlarından hiçbiri gerçekleşemez. Bridge'ler şunlar için mevcuttur:
**Claude Desktop/Claude Code**, **ChatGPT Desktop**,
**Qwen Desktop** ve **Kimi Desktop**; her birinin kendi küçük Bridge programı vardır
ve hepsi çalışan uygulamadaki aynı yerel uç noktaya
bağlanır. Aşağıda açıklanan veri akışları hepsi için aynıdır; yalnızca alıcı sağlayıcı farklıdır.

**Bu kanal gerçek dava verilerini aktarır.** Amacı budur: Kullanıcının kendi masaüstü yapay zekâ oturumu
sunulmaya hazır taslaklar hazırlar ve bu nedenle gerçek adlara ve numaralara ihtiyaç duyar.

- Masaüstü yapay zekâ (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop veya Kimi Desktop)
Bridge programı üzerinden çalışan uygulamaya bağlanır; bu bağlantı
bilgisayarda kalır. Yalnızca web araması, sayfa okuma ve sicil araçları internetle iletişime geçer.
- **Erişim kontrolü olan web siteleri.** Bir web sitesi içeriğini açmadan önce bir onay
isterse IRONSTICK sayfayı kendi penceresinde açar;
kullanıcı onayı orada kendisi verir. Sayfanın içeriğini ardından masaüstü yapay zekâ okur —
içerik, diğer her araç sonucu gibi onun sağlayıcısına akar.
- Bir program çalışmasında herhangi bir masaüstü yapay zekânın ilk veri erişimi, engelleyici bir
onay iletişim kutusu açar. İzin, erişimi programın geri kalan çalışması boyunca tüm masaüstü yapay zekâlar için
açar; ret ise hepsini geçici olarak kilitler.
- 200'den fazla araç kronolojileri, tam metinleri, e-postaları,
günlük tutanakları, süreleri, ana verileri, davaların tamamını (bölümler hâlinde) ve çıktı formatlarını
sunar; gizli olarak işaretlenen belgeler hariç tutulur. Ana verilerde,
kronolojide, takvimde, yapay zekâ hafızasında, tam metinlerde ve mevzuat kütüphanesinde yapılan değişiklikler ancak
kullanıcı bunları bir IRONSTICK formunda, iletişim kutusunda
veya veri tutarlılığı izleyicisinde onayladıktan sonra geçerli olur: Ana verilere ve ilişkilere yönelik öneriler
izleyiciye düşer; yapay zekânın davaya bağlı yapay zekâ talimat notlarında önerdiği değişiklikler
kırmızı/yeşil fark görünümünde gösterilir ve ancak kullanıcı
açıkça onay verdikten sonra benimsenir; kronoloji kayıtları asla yapay zekâ tarafından yazılmaz — yapay zekâ yalnızca
kullanıcının tamamlayıp kaydettiği kayıt formunu önceden doldurur; ve yapay zekâ tarafından iyileştirilmiş bir belge tam metni
(OCR yeniden taraması) kayıtlı tam metnin yerini ancak
kullanıcı tam metni bir onay iletişim kutusunda görüp kaydettikten sonra alır.
Böyle bir iletişim kutusu olmadan yapay zekâ yalnızca kendi çalışma alanlarına yazar: şifreli
ara belleğe, kullanıcının isteği üzerine günlük tutanağa ve deterministik denetimlerden sonra kendi dava değerlendirmesine.
Etiketler ve büro sohbet mesajları sohbette kullanıcının onayını gerektirir. Bir meslektaşın abone olduğu bir davada
yapay zekâ, IRONSTICK SERVER üzerinden
davanın sahibine ve tüm abonelere ulaşan bir not iliştirebilir
(bölüm 9). Kelime işlemciye aktarma ve dosya teslimi kullanıcının açık adımlarıdır;
yönlendirme yalnızca ayrı bir izinle.
- **OCR yeniden taramasıyla iyileştirme (yerel) ve PDF teslimi (kullanıcı tarafından başlatılır).**
Kayıtlı bir tam metin kesilmişse veya eski bir OCR çalışması nedeniyle kullanılamaz durumdaysa yapay zekâ
yeniden tarama talep edebilir: Kullanıcı sayfaları seçer, yeniden tarama **yerel olarak** çalışır
(yeni harici alıcı yok) ve her iki metin sürümü yerel
ara bellekte sunulur; yapay zekânın buradan okudukları, diğer her
araç sonucu gibi onun sağlayıcısına akar. En son çare olarak — yalnızca böyle bir yeniden taramadan sonra ve
yalnızca Bridge tarafından uygulanan katı sınırlar içinde —
yapay zekâ kullanıcıdan kendisine **orijinal PDF dosyasını** vermesini isteyebilir: IRONSTICK
yalnızca kaydı açar; kullanıcı PDF'i ataş simgesi üzerinden kendisi kaydeder
ve masaüstü yapay zekâ sohbetine sürükler. Böylece belge
**dosya olarak** (damgalar, imzalar ve görüntüler dahil) bu yapay zekânın sağlayıcısına
aktarılır — bu yalnızca kullanıcının kendi bilinçli eylemiyle gerçekleşir, asla
otomatik olarak değil ve gizli olarak işaretlenen belgeler en baştan tüm
yeniden tarama kanalının dışında tutulur.
- **Yerel yapay zekâ ara belleği (veri minimizasyonu).** Kapsamlı araç sonuçları yerel, şifreli bir ara bellek dosyasına konabilir ve orada işlenebilir; **yapay zekâ sağlayıcısına
hiç aktarılmadan**. Yapay zekâ için eksiksiz dava dışa aktarmaları
ve tek çağrıda oturum başlangıcı özeti de doğrudan bu
yerel depolamaya yazılır; yalnızca yapay zekânın ardından okuduğu bölümler onun sağlayıcısına akar.
Ara bellek
veri dizini içinde bulunur ve oturumlar boyunca korunur (yapay zekânın çalışma bağlamıdır);
artık kullanılmayan dosyalar otomatik olarak silinir ve yeni bir harici alıcı ortaya çıkmaz.
- **Ara bellek şifrelidir.**
Ara bellekteki her dosya beklemedeyken AES-256 ile şifrelenir; dosyalar
depodan yalnızca IRONSTICK'in dışa aktarma iletişim kutusu üzerinden çıkar, asla bir indirme klasörüne değil.
Böylece veritabanı, belge deposu, yapılandırma dosyası ve ara bellek
beklemedeyken tamamı AES-256 ile şifrelenmiştir. Açılmış belgelerin geçici çalışma kopyaları
(her başlatmada ve kapanışta temizlenir), kısa ömürlü akran incelemesi (peer review) arabelleği,
tarama girişi, dışa aktarmalar ve giden dosyalar düz metin olarak kalır
(bölüm 8).
- Araç sonuçları kullanıcının masaüstü yapay zekâ istemcisine ve oradan
**onun sağlayıcısına** iletilir: Claude için Anthropic (kullanıcının Claude aboneliği
ve Anthropic'in koşulları çerçevesinde), ChatGPT için OpenAI (kullanıcının
ChatGPT aboneliği ve OpenAI'nin koşulları çerçevesinde), Qwen
Desktop için Alibaba Cloud/Qwen (kullanıcının Qwen hesabı ve Qwen'in koşulları çerçevesinde) veya Kimi
Desktop için Moonshot AI (kullanıcının Kimi hesabı ve Moonshot AI'nin koşulları çerçevesinde). IRONSTICK, Bridge trafiği için
denetim günlüğü satırı yazmaz; üst çubuk her
etkin yapay zekâ için titreşen bir logo gösterir (Claude işareti, ChatGPT işareti, Qwen işareti, Kimi işareti) — eş zamanlı erişim
mümkündür ve her biri ayrı ayrı belirtilir. Her Bridge programı yanında
zaman, araç adı, başarı/başarısızlık ve
yanıt boyutunu içeren, **asla içerik içermeyen** bir **yerel günlük** tutar. İkinci, daha ayrıntılı bir
**tanılama günlüğü** veri dizininde bulunur ve **varsayılan olarak kapalıdır**;
hata ayıklama için açıldığında çağrı parametrelerini (adlar içerebilir) düz metin olarak içerebilir ve otomatik olarak kısaltılır. Günlüklerin hiçbiri hiçbir yere aktarılmaz.
- Ortak yapay zekâ hafızası yoğunlaştırılmış bulguları (müvekkile veya davaya bağlı) yerel olarak kaydeder. Yapay zekâ bir
kaydın kaydedilmesini, değiştirilmesini veya silinmesini önerebilir; her değişiklik ancak kullanıcı onay verdikten sonra geçerli olur. Bir davayla bağlantılı kayıtlar
asla otomatik olarak silinmez; davası olmayan kayıtlar bir yıl kullanılmadıktan sonra silinir. Hafızanın içeriği her yapay zekâ kanalı için
görünürdür ve bu kanallar onu okuduğu anda aktarılır.
- Masaüstü yapay zekâlar arasındaki akran incelemesi (peer review), sağlayıcılar arasında doğrudan değil,
IRONSTICK üzerinden yürür: Bir yapay zekâ bir çalışma sonucunu (örn. bir taslağı)
**yerel, kısa ömürlü bir değişim arabelleğine** (kullanıcının bilgisayarındaki düz metin dosyaları;
görev kapatıldığında silinir ve uygulamanın her yeniden başlatılışında tamamen temizlenir) ve bir
görev notu bırakır; diğer yapay zekâ, kullanıcı ona talimat verdiğinde bunları okur. Bu
**yeni bir harici alıcı** oluşturmaz — inceleyen yapay zekânın okudukları, yukarıda açıklanan
diğer her araç sonucu gibi tam olarak **kendi** sağlayıcısına, onun
koşullarına göre aktarılır. Sağlayıcılar asla doğrudan veri alışverişi yapmaz; inceleyen yapay zekânın okudukları
yalnızca kendi sağlayıcısına gider.

### 4.10 Ses transkripsiyonu (konuşmacı ataması)

Konuşma tanıma tamamen yerel olarak çalışır; kaydın kendisi
bilgisayardan asla çıkmaz. Kullanıcı birden fazla konuşmacı belirttiyse, ardından
yapay zekâ tanınan satırları konuşmacılara atar: bölüm bölüm (orta kademe) tanınan metni, bağlam olarak zaten atanmış satırları ve
konuşmacı sayısını alır. Çağrılar yönlendirici üzerinden yapılır — takma adlandırılmış,
onay şartına bağlı, denetim günlüğüne kaydedilmiş. Yanıt metni
değiştiremez: Her satır tanınan metne göre kontrol edilir; bir blok başarısız olursa
transkript konuşmacı ataması olmadan benimsenir. Yalnızca bir konuşmacı varsa hiçbir
yapay zekâ çağrısı yapılmaz. Ücretsiz arka plan sağlayıcıları etkinse (bölüm 1),
bu çağrılar onlar üzerinden yapılabilir.

## 5. Yapay zekâ talimat paketi (dışa aktarma ZIP'i)

![IRONSTICK istemcisi, MD dosyaları ve ZIP arşiviyle kullanıcı, yapay zekâ web uygulaması](https://www.ironstick.legal/img/67_instruction_zip.png)

Paketin oluşturulması yerel olarak yapılır ve hiçbir yapay zekâ çağrısı içermez. Paket,
kullanıcı tarafından seçtiği harici bir LLM'e yüklenmesi amaçlanan
**düz metin Markdown** (takma adlandırma yok) üretir. İçerik:

| Dosya | İçerik |
| --- | --- |
| Davalar | seçilen müvekkilin tüm davaları, taraflar, durum ve delil ID dizini ile (tam metinler yok) |
| Varlıklar | **tüm büronun tüm kişileri/varlıkları** (yalnızca bu müvekkilin değil), ulusal kişi ve şirket numaraları (örn. Romanya CNP/CUI), doğum tarihi, eksiksiz iletişim bilgileri, meslek, araç dahil — artı kayıtlı analiz blokları (değerlendirme, zayıf noktalar, ikamet yerleri, mali durum, sosyal çevre, kaynaklar) |
| Kurumlar, süreler | tüm kurumlar; dosya numarası ve müvekkil adıyla aktif süreler |
| Posta | **büro genelinde** en yeni 100 e-posta: gönderen, alıcı, konu, eklerin dosya adları, kısa alıntı (tam mesaj metinleri yok) |
| Günlük tutanak | son 10 gün, büro genelinde, bu döneme ait dava kronolojisi dahil |
| Dava başına | her dava için bir dava dosyası: **belge tam metinleriyle** eksiksiz kronoloji, kimlik numaraları dahil müvekkil ve tarafların tanımlayıcıları; artı sınırlama olmaksızın tüm dava arka plan notları |
| Talimat dosyaları | çalışma kurallarını içeren beş belge — kişisel veri yok |

**Bu ZIP üçüncü bir tarafın yapay zekâ hizmetine yüklendiğinde ne olur:**
Kullanıcı, büronun tamamının önemli kısımlarını — ulusal kimlik numaralarıyla müvekkil kimlikleri, hassas değerlendirmeler
dahil üçüncü kişilerin profilleri, büro genelindeki yazışma üst verileri ve dosyalar —
bizzat ve düz metin olarak bu sağlayıcıya
aktarır. Bu andan itibaren veriler bu sağlayıcının koşullarına göre
(eğitim için kullanım, saklama, hukuk düzeni) işlenir. IRONSTICK
dışa aktarmadan önce (program çalışması başına bir kez) bir veri koruma bildirimi gösterir ve dışa aktarmayı Google Drive'a da sunar; bu durumda
dosyalar ayrıca Google'da saklanır. Kullanıcı, GDPR anlamında aktarımı yapan
veri sorumlusu olarak hareket eder ve yüklemeden önce bir hukuki dayanak sağlamalıdır (örn. md. 6,
meslek hukukuna ilişkin sır saklama kuralları).

Gizli olarak işaretlenen belgeler sürelerden, günlük tutanaklardan ve
dava dosyalarından hariç tutulur.

## 6. Genel bakış matrisi

| Veri akışı | Dışarı çıkan (biçim) | Takma adlandırılmış | Kendi onay iletişim kutusu | Denetim günlüğü |
| --- | --- | --- | --- | --- |
| Belge kaydı (4 çağrı) | OCR ve belge metni (sınırlı), dava ve ad listeleri | evet | evet — program çalışması başına bir kez | evet |
| E-posta ön değerlendirmesi (e-posta ekranında manuel alım) | gönderen, konu, kısa metin alıntısı (dava listesi yok); yalnızca yerel olarak atanmamış e-postalar için | evet | hayır | evet |
| E-posta ön değerlendirmesi (arka plan, her beş dakikada bir) | aynı şekilde | evet | hayır | evet |
| Günlük brifing (API) | brifing metni: süre sayıları, dava numarası, müvekkil adı, yer ve mahkemeyle duruşmalar, randevu başlıkları | evet | hayır (günün ilk başlatılışı, başlangıçta hazırlanır) | evet |
| Kişi araştırması, aşama 1 | gerçek ad (web araması) | hayır — tasarım gereği | evet — oturum başına bir kez | evet (düz metin olarak) |
| Kişi araştırması, aşama 2 ve 3 | sayfa metinleri (kaynak başına sınırlı) | evet | aynı onay | evet |
| Kişi/kurum otomatik doldurma | girilen ad (web araması) | hayır — tasarım gereği | evet — oturum başına bir kez | evet (düz metin olarak) |
| Günlük tutanağın yapay zekâ ile içe aktarılması | yapıştırılan ham metin | evet | evet | evet |
| Veri tutarlılığı izleyicisi | her yeni belge için: iletişim bölümleri ve olası eşleşmelerin adları (ana verilerden iletişim bilgisi veya kimlik numarası yok) | evet (kurum adları düz metin olarak) | hayır (kısıtlanmış arka plan işlemi) | evet |
| Kelime işlemci: düzenleme / yapılandırma | bağlam alıntısıyla seçim / belge satırları (sınırlı) | evet | hayır (düğme = onay) | hayır |
| Sesli okuma için ön işleme | her cümle, düz metin | hayır | hayır (başlatma = onay) | hayır |
| Red/Blue Team denetimi (API) | taslak metin, tarih ve yargı alanı | evet | hayır (açma/kapama anahtarı = onay) | evet |
| Diyalog özeti (API) | eski diyalog turları (yalnızca kullanıcının soruları ve nihai yanıtlar) | evet | hayır (API sohbetinin arka plan çalışması) | evet |
| Dosya→Markdown yapay zekâ düzeltmesi | dönüştürülmüş metin | evet | hayır | hayır |
| Karartmanın yapay zekâ bulucusu | zaten karartılmış metin; yanıtlar üçüncü kişilerin gerçek adlarını içerir | kapalı — tasarım gereği | açma/kapama anahtarı = onay | evet |
| Yapay zekâ sohbeti (harici) | istem, ekran bağlamı, hafıza, özetle birlikte en son diyalog, araç sonuçları (öğe başına sınırlı) | evet | evet — oturum başına bir kez | evet |
| Masaüstü yapay zekâ Bridge'i (Claude Desktop/Code, ChatGPT Desktop, Qwen Desktop, Kimi Desktop) | işlenmemiş araç sonuçları (eksiksiz dava verileri) | hayır — tasarım gereği | evet — tüm masaüstü yapay zekâlar için program çalışması başına bir kez | hayır (uygulama tarafında) |
| Ses transkripsiyonu: konuşmacı ataması | bölümler hâlinde tanınan metin — kaydın kendisi asla | evet | evet | evet |
| Ücretsiz arka plan sağlayıcıları (Groq, OpenRouter, Mistral) — yalnızca etkinse | ilgili arka plan göreviyle aynı içerikler; asla sohbet, dilekçe veya Red/Blue Team değil | ilgili görev gibi | hayır (sağlayıcı başına açma/kapama anahtarı = onay) | evet |
| Yapay zekâ talimat ZIP'i | düz metin büro dışa aktarımı (kullanıcı tarafından başlatılan yükleme) | hayır | program çalışması başına bir kez uyarı | uygulanmaz |

## 7. LLM içermeyen harici hizmetler (eksiksizlik adına)

![IRONSTICK istemcisi, internet, konum simgesi ve hava durumu simgesi](https://www.ironstick.legal/img/68_external_services.png)

Herhangi bir LLM'den bağımsız olarak aşağıdaki işlevler, gerekli asgari verilerle
harici hizmetlerle iletişime geçer: numara doğrulama (EU VIES, EORI, GLEIF,
ticaret sicili — kontrol edilecek numara), kişi aramasının doğrudan web sorguları (ad), IMAP (posta sunucunuz) ve
Google Drive'a isteğe bağlı dışa aktarmalar (dışa aktarılan dosyalar). Bu işlemlerin hiçbiri
yapay zekâ sağlayıcısını içermez.

Aşağıdaki hizmetlerle arka planda veya yine asgari verilerle
iletişime geçilir:

- **OpenStreetMap Nominatim (adres coğrafi kodlama)** — günde bir kez bir
arka plan görevi, taraf kayıtlarındaki bir adresi veya yeri olan kişileri ve şirketleri
işler ve onları haritaya yerleştirmek için sokak, bölge, yer ve ülkeyi
(asla adı değil) Nominatim'e gönderir; zaten
yerleştirilmiş bir adres yalnızca değiştiğinde yeniden gönderilir ve bulunamayan bir adres
bir bekleme süresinden sonra yeniden denenir. Hava durumu sorgusunun yer adı da
aynı şekilde coğrafi olarak kodlanır. Onay iletişim kutusu yok; koordinatlar yerel olarak kaydedilir.
- **ipwho.is (coğrafi IP sorgusu)** — IRONSTICK her program başlangıcında bir kez,
yerel güvenlik anlık görüntüsünün (bölüm 8) parçası olarak bu hizmetten bilgisayarın
**genel** IP adresini ve kaba bir konumu (şehir, ülke, İSS) sorgular.
İstek hiçbir yük verisi içermez; hizmet, isteğin geldiği genel IP adresini
alır. Yanıt yalnızca yerel olarak kaydedilir ve
başka hiçbir yere iletilmez.
- **Open-Meteo (hava durumu)** — istek üzerine yapay zekâ hava durumu sorgusu
(bölüm 4.8) adı verilen bir yer için güncel hava durumu verilerini sorgular; günlük brifing de,
isteğe bağlı hava durumu modu etkinse, yapılandırmada kayıtlı yer için
aynısını yapar. Yalnızca yerin koordinatları iletilir — asla
dava, müvekkil veya kişi verileri değil.
- **[www.ironstick.legal](https://www.ironstick.legal/index_tr.html) (haber dosyası)** — erişim kodu
girildikten sonra ve ardından her altı saatte bir uygulama, yazılım üreticisinin web sitesinden
bildirimler ve uyarılar içeren bir haber dosyasını ve bu dosyada referans verilen her görüntüyü indirir. İstek hiçbir veri içermez; her web sunucusu gibi
üreticinin sunucusu da isteğin IP adresini ve zamanını görür.

Bu hizmetlerin hiçbiri yapay zekâ sağlayıcısını içermez.

## 8. Yerel depolama, bütünlük ve kullanıcı tarafından kontrol

![TOTP erişim kilitli IRONSTICK istemcisi; AES-256 ile şifrelenmiş belgeler, ara bellek ve veritabanı](https://www.ironstick.legal/img/69_local_encryption.png)

Yukarıdaki yapay zekâ kanallarından bağımsız olarak, IRONSTICK'in tuttuğu **tüm**
veriler için şunlar geçerlidir:

- **Yalnızca yerel depolama.** Veri varlığının tamamı — veritabanı, belge dosyaları,
medya, transkriptler, yapılandırma — kullanıcının belirlediği bir yol altındaki
tek bir veri dizininde bulunur. IRONSTICK bir bulut hesabı gerektirmez
ve hiçbir işlev kullanıcı verilerini üreticiye göndermez (üreticiyle tek temas
haber dosyasının indirilmesidir, bölüm 7). Bir büro
isteğe bağlı IRONSTICK SERVER'ı (bölüm 9) işletiyorsa bu sunucu da büronun
kendi ağındaki kendi cihazıdır — üreticinin erişimi bundan dolayı değişmez.
- **Veritabanı beklemedeyken şifreli (AES-256).** Veritabanı — müvekkiller,
davalar, kronoloji, e-postalar, süreler, transkript metinleri ve
yapay zekâların hafızasından oluşan veri varlığı — AES-256 ile şifrelenmiş olarak, her sayfa ayrı ayrı ve
sayfa başına bir bütünlük mührüyle kaydedilir. Anahtar uygulama tarafından
çalışma zamanında türetilir ve asla diske veya yapılandırmaya yazılmaz; böylece depolama cihazından
veya bir yedekleme arşivinden kopyalanan bir veritabanı dosyası
IRONSTICK olmadan okunamaz. Bu, GDPR'nin 32. maddesi anlamında, kullanıcının
hiçbir yapılandırması olmadan devreye giren ve kapatılamayan teknik bir önlemdir.
- **Belgeler beklemedeyken şifreli (AES-256).** Belge deposu —
orijinal PDF'ler, taramalar, görüntüler, ses ve transkript dosyaları — aynı şekilde
dosya dosya, değişiklikleri tespit eden bir bütünlük mührüyle şifrelenir.
Okuma, istenen dosyayı geçici bir çalışma kopyasına deşifre eden
ve bu kopyaları uygulama kapatıldığında veya başlatıldığında kaldıran
tek bir kapı üzerinden yapılır. Yedeklemeler ve dava paketleri belgeleri
şifreli biçimleriyle içerir.
- **Düz metin olarak kalanlar.** Çalışan oturumun çalışma kopyaları ve dışa aktarmaların yanı sıra: tarama girişinde kaydedilmeyi bekleyen taramalar;
masaüstü yapay zekâlar arasındaki kısa ömürlü akran incelemesi arabelleği (bölüm 4.9; görev kapatıldığında
silinir ve her başlatmada temizlenir); ve yalnızca etkinleştirilmişse,
Bridge'in ayrıntılı tanılama günlüğü (bölüm 4.9).
- **Başlangıçta erişim kontrolü (TOTP).** Lisans anahtarı
kabul edilir edilmez uygulama, kullanıcı bir
kimlik doğrulayıcı uygulamadan (RFC 6238) güncel altı haneli zamana dayalı tek kullanımlık kodu girene kadar
bir kod sorgusundan başka hiçbir şey göstermez. Kodların dayandığı sır
asla diske yazılmaz; yalnızca onaylanmış kurulumun
gizli olmayan bir parmak izi kaydedilir; böylece QR kodu
bir anahtar değişikliğinden sonra yeniden gösterilir. Tekrarlanan hatalı girişler artan bir
bekleme süresini tetikler. Uygulama kilitli olduğu sürece masaüstü yapay zekâ Bridge'leri
hiçbir dava verisi almaz. Yapılandırma dosyası (API anahtarları, e-posta erişim bilgileri,
sunucu erişimi) belgelerle aynı mekanizmayla
AES-256 ile şifrelenmiş olarak bulunur ve yalnızca çalışma belleğinde deşifre edilir.
- **Kullanıcı tarafından kontrol edilen depolama konumu.** Veri yolu
kurulum sırasında seçilir ve her zaman değiştirilebilir — şifreli bir USB bellek
veya şifreli harici bir sabit disk gibi çıkarılabilir bir ortama da. Uygulama yalnızca
yapılandırılan depolama konumunu izler; ortamın şifrelenmesi (örn. işletim sisteminin
sürücü şifrelemesiyle) kullanıcının elindedir ve
taşınabilir ortamlar için önerilir. Ağ sürücüleri ve bir bulutla senkronize edilen klasörler
(OneDrive, Google Drive, Dropbox, iCloud, Box, pCloud, MEGA) veri depolama konumu olarak
reddedilir. Yapılandırmada depolama konumu değiştirilirken
IRONSTICK hedefi bu kurallara göre kontrol eder; kopyalama sağlama toplamı karşılaştırmasıyla yapılır, geçiş
ancak başarılı doğrulamadan sonra gerçekleşir ve eski klasör yeniden adlandırılarak korunur.
- **Hiçbir bulut olmadan cihaz senkronizasyonu.** İsteğe bağlı
Windows ↔ Android tablet senkronizasyonu doğrudan bir
USB kablo bağlantısı üzerinden yürür — hiçbir üçüncü taraf hizmeti dahil değildir, aktarımlar
sağlama toplamıyla doğrulanır ve veritabanı değiştirilmeden önce zorunlu bir yedekleme
oluşturulur. Gizli olarak işaretlenen belgeler tablete hiç
aktarılmaz.
- **Başlangıçta güvenlik anlık görüntüsü (yerel oturum açma günlüğü).** IRONSTICK her
program başlangıcında arka planda üzerinde çalıştığı bilgisayarın bir anlık görüntüsünü
kaydeder: ana bilgisayar adı, işletim sistemi, RAM/CPU, yerel IP adresi, varsayılan tarayıcı,
tespit ettiği çalışan uzaktan erişim araçları ve bunlardan türetilen bir güvenlik değerlendirmesi
— ayrıca başlangıç başına bir kez, coğrafi IP hizmeti ipwho.is (bölüm 7) üzerinden belirlenen
genel IP adresi ve kaba konum (şehir, ülke, İSS).
Anlık görüntü **yalnızca yerel olarak** veritabanının oturum açma günlüğüne
kaydedilir ve hiçbir yere iletilmez. Saklama
otomatik olarak en fazla **6 ay** ve en fazla **1.000
kayıt** ile sınırlıdır (günlük temizlik) ve kullanıcı günlüğü her zaman
yapılandırıcıda görüntüleyebilir («Oturum açma günlüğü» kartı).
- **Kaydedilen her dosya için bütünlük parmak izleri.** Kayıt
anında kaydedilen her dosya, kriptografik bir içerik parmak izi
(belgeler ve medya için SHA-256; transkript ses dosyaları için daha eski bir MD5 parmak izi) alır;
bu parmak izi veritabanında kaydın yanında tutulur. Kaydedilmiş bir dosyada sonradan yapılan her değişiklik bu nedenle
dosyanın kaydedilmiş parmak iziyle karşılaştırılmasıyla **tespit edilebilir**
ve e-keşif dışa aktarmaları (EDRM) bu parmak izlerini içerir;
böylece alıcılar dosyaları bağımsız olarak doğrulayabilir. Bu sayede her türlü manipülasyon açıkça görülür ve kanıtlanabilir hâle gelir.
- **Kullanıcının takdirine göre yedeklemeler.** Yerleşik bir yedekleme işlevi
verilerin eksiksiz bir kopyasını (tam yedekleme veya yalnızca veri yedeklemesi) tek bir ZIP arşivi olarak
kullanıcının seçtiği herhangi bir hedefe yazar ve istek üzerine böyle bir arşivden
geri yükler. Yedeklemelerin ne sıklıkla oluşturulacağı, nerede saklanacağı, ne kadar süre
saklanacağı ve arşivlerin ayrıca şifrelenip şifrelenmeyeceği tamamen
kullanıcının kararıdır. Her arşivde veritabanı, belgeler,
yapılandırma ve yapay zekâ ara belleği her durumda AES-256 ile şifrelidir; yalnızca
tarama girişinde hâlâ bekleyen taramalar değiştirilmeden yer alır —
IRONSTICK bir zamanlama dayatmaz ve yedeklemeleri hiçbir yere iletmez.
- **Oluşturulan belgeler kullanıcıya aittir.** Kullanıcı her zaman
belgeler oluşturabilir — dilekçeler, mektuplar, dosya dökümleri, listeler, dışa aktarmalar — ve
indirebilir: Belgeler yerel “Belgeler” klasörüne veya,
kullanıcı hedef olarak açıkça Google Drive'ı seçerse, kullanıcının kendi Google Drive hesabına yazılır.
Oluşturulan bir belgeyle
bundan sonra ne olacağına — yazdırma, bir mahkemeye sunma, e-postayla gönderme,
herhangi bir hizmete yükleme, üçüncü kişilere iletme — yalnızca kullanıcı karar verir.

**Sorumluluğun belirlenmesi.** IRONSTICK
her şeyi yerel olarak sakladığından ve verileri yalnızca bölüm
1–7 ve 9'da belgelenen yollarla ilettiğinden — kendi iletişim kutusu olmadan
çalışan arka plan işlevleri dahil (bölüm 3 ve 7) —, büronun işletmecisi tek
veri sorumlusudur: Depolama ortamını ve şifrelemesini seçer, yedeklemeleri yönetir ve
saklar, hangi yapay zekâ işlevlerinin etkin olduğuna karar verir, her
onayı verir veya reddeder ve yazılımın oluşturduğu her belgeye, her dışa aktarmaya veya her yedeklemeye
ne olacağına yalnızca kendisi karar verir. Yapay zekâ tarafından üretilen içerikler — taslaklar, özetler, değerlendirmeler,
sınıflandırmalar — her zaman kullanıcının karar verdiği bir **öneridir**. Bu belge, bu
kararların her birinin gerçek
veri akışları tam olarak bilinerek verilebilmesine hizmet eder.

## 9. IRONSTICK SERVER (isteğe bağlı, büronun kendi ağında)

![LAN üzerinden bağlı IRONSTICK sunucusu ve IRONSTICK istemcisi; sunucunun internet bağlantısı yok](https://www.ironstick.legal/img/70_server_lan.png)

Birden fazla IRONSTICK iş istasyonuna sahip bürolar isteğe bağlı
**IRONSTICK SERVER**'ı işletebilir — büronun kendi yerel ağındaki
büroya ait Synology NAS üzerinde çalışan bir koordinasyon hizmeti. Bu
beyanın amaçları bakımından şu olgular belirleyicidir:

- **Hiçbir harici taraf dahil değildir.** Sunucu büronun kendi
cihazıdır. Yalnızca özel (yerel) ağ adreslerinden gelen bağlantıları kabul eder
ve **kendisi asla internete bağlantı
kurmaz** — telemetri yok, güncelleme kontrolü yok, üreticiyle temas yok.
Yazılım üreticisinin hiçbir erişimi yoktur.
- **Aktarım ve depolama.** Belgeler sunucuya yalnızca iş istasyonundakiyle aynı kasa formatında AES-256 ile şifrelenmiş dosyalar olarak
ulaşır ve orada da yalnızca bu şekilde bulunur; sunucu bunların düz metnini asla görmez.
Sunucu, büronun ağındaki kendi NAS cihazında, internet bağlantısı olmadan çalışır.
- **Yapay zekâ katılımı yok.** Sunucu üzerinden hiçbir yapay zekâ veri trafiği geçmez,
sunucu hiçbir yapay zekâ anahtarı saklamaz ve hiçbir dil modeli
sağlayıcısıyla asla iletişim kurmaz. Bölüm 1–6'da açıklanan tüm yapay zekâ kanalları
kesinlikle tek tek iş istasyonlarıyla sınırlı kalır; takma adlandırma katmanı,
onay engelleri ve denetim günlüğü sunucunun varlığından
etkilenmez.
- **Sunucunun sakladıkları** — hepsi NAS üzerinde, büronun
kontrolü altında: (a) **paylaşılan dava paketleri** — yalnızca bir
kullanıcının meslektaşlarıyla açıkça paylaştığı davalar; gizli olarak işaretlenen
belgeler yapısı gereği hariç tutulur ve asla
sunucuya ulaşmaz; (b) **merkezi mevzuat kütüphanesi** — kamuya açık
kanun metinleri Markdown olarak, her biri katkıda bulunan kullanıcının adı,
kaynak bağlantısı ve kontrol tarihiyle birlikte; (c) **zaman kayıt verileri** — kullanıcı,
gün ve dava başına: dava numarası, müvekkil adı ve dakikalar, her iş istasyonu tarafından
arka planda bildirilir; (d) kullanıcı ve gün başına **mesai toplamları**,
oturum sinyallerinden (heartbeat) türetilir; (e) **dava olaylarına ilişkin üst veriler** —
paylaşımlar, geri almalar, aboneliklerin başlangıcı ve sonu ile dışa aktarmalar, her biri
tarih, saat ve LAN IP adresiyle; (f) yönetimsel olayları ve oturum açma olaylarını içeren,
LAN IP adresleri dahil bir
**güvenlik günlüğü**; (g) **dava devir paketleri** — bir kullanıcı bir davanın
sahipliğini bir meslektaşına devrederse davanın tamamı
bir arşiv olarak sunucudaki geçici bir devir alanı üzerinden geçer; paket,
alıcı içe aktarmayı onayladıktan sonra sunucudan silinir ve
gizli olarak işaretlenen belgeler yalnızca sahibin açık ek
onayından sonra aktarılır (aksi takdirde aktarım
iptal edilir); (h) **merkezi tarama girişi** (isteğe bağlı Central Scan
App): her kullanıcının **dava numaralarının ve görünen adının** bir dizini
(iş istasyonları tarafından eşleştirme materyali olarak bildirilir — asla
dava içerikleri değil) ve taranmış, bir
kullanıcıya yönelik gelen postayı, bu kullanıcının iş istasyonu onu
alıp onaylayana kadar tutan, dosya bazında bir **belge kuyruğu**; ardından sunucu kopyası
silinir; metin tanıma ve alıcı ataması
tarama iş istasyonunda yerel olarak, hiçbir yapay zekâ olmadan yapılır; (i) **yedekleme olay verileri** — her
iş istasyonu yedekleme ve geri yükleme olaylarını bildirir
(tür, dosya adı, boyut, zaman, LAN IP); böylece yönetici her kullanıcı için
son yedeğin ne zaman oluşturulduğunu görebilir ve geride kalan kullanıcılara
hatırlatma yapabilir; (j) **büro genelindeki taraf dizini**
— iş istasyonlarında tutulan **kişilere ve şirketlere,
kurumlara, aralarındaki ilişkilere ve kişi analizlerine** ait ana veri kayıtları,
kullanıcılar arasında değiş tokuş edilen
değişiklik önerilerinin kuyruğuyla birlikte; (k)
**mahkeme kararlarının değerlendirmeleri** — iş istasyonu ve karar başına: mahkeme,
daire ve heyet, hâkimlerin ve zabıt kâtiplerinin adları,
karar numarası, tarih, dosya numarası,
değerlendiren iş istasyonunun dahili dava ve müvekkil numaraları, ölçülen metin oranları ve yapay zekânın yazdığı,
kararın ve her iki tarafın beyanlarının İngilizce analizi; (l)
**büro sohbeti** — kayıtlı kullanıcılar arasındaki mesajlar (bir yıl sonra silinir) —
ve paylaşılan bir davaya iliştirilen, sahibi ve tüm aboneler tarafından görülebilen notlar.
- **Büro genelindeki taraf dizini.** Bir iş istasyonu
sunucuya bağlanır bağlanmaz taraf ana verileri (kim kimdir: adlar,
tanımlayıcılar, iletişim bilgileri, ilişkiler, kişi analizi) **otomatik olarak
yüklenir** ve aynı büronun diğer her iş istasyonuna yansıtılır;
böylece her avukat büronun kimlerle zaten ilişkisi olduğunu görür ve
büro, çıkar çatışmalarına ilişkin büro genelinde bir görünüm elde eder. Her kaydın
tam olarak bir sahibi vardır — onu ilk getiren kullanıcı; diğer tüm
kullanıcılar salt okunur bir kopya tutar ve yalnızca, sahibin veri izleyicisinde kabul ettiği veya
reddettiği bir **değişiklik önerisi**
gönderebilir. Sahibine 48 saat boyunca ulaşılamazsa
sahiplik öneriyi yapan kullanıcıya geçer. **Dava içerikleri bu
dizinin parçası değildir** — belgeler, kronoloji, yazışmalar ve
dava atamaları, burada açıklanan açık paylaşım ve devir
işlemlerine tabi olmaya devam eder. Değişim büro içinde kalır
(tek veri sorumlusu), yerel ağdan asla çıkmaz ve
**hiçbir yapay zekâ sağlayıcısını** içermez: Mükerrer kayıt tespiti ve alan karşılaştırması,
gönderen iş istasyonunda salt program mantığı olarak çalışır; sunucu yalnızca saklar ve
iletir. Bürolar, taraf verilerinin ve kişi analizlerinin bu dahili paylaşımını
işleme faaliyetleri
kayıtlarında belirtmelidir.
- **Mahkeme kararlarının değerlendirmeleri.** Bir değerlendirme yalnızca
kullanıcının açık komutuyla kaydedilir; ardından taraf dizini gibi
**otomatik olarak yüklenir** ve büronun her iş istasyonuna
yansıtılır. Her iş istasyonu karar başına yalnızca kendisinin değiştirebileceği
kendi değerlendirmesini tutar. Analiz, bir kararın ve ona ilişkin beyanların
içeriğini açıklar — bu ölçüde **dava içeriği** barındırır — ve hâkimleri ve
zabıt kâtiplerini adlarıyla belirtir. Hiçbir yapay zekâ sağlayıcısı dahil değildir; değişim
büronun yerel ağında kalır. Bürolar bu paylaşımı da
işleme faaliyetleri kayıtlarında belirtmelidir.
- **Yalnızca bilinçli eylemler — dava içerikleri için.** Dava içerikleri sunucuya
yalnızca kullanıcı tarafından onaylanan açık bir paylaşım veya
devir işlemiyle ulaşır; mevzuat kütüphanesi metinleri ancak
kullanıcı kaydı veri izleyicisinde kabul ettikten sonra; taranmış gelen posta ise
ancak büro çalışanı belgeyi kontrol edip seçilen bir alıcıya gönder'e
tıkladıktan sonra. Taraf dizini ve
kaydedilmiş mahkeme kararı değerlendirmeleri bilinçli istisnalardır:
Kayıt başına onay olmadan arka planda senkronize olurlar. Zaman, mesai, olay ve yedekleme verileri,
çok kullanıcılı çalışmanın kendisinden doğan işletimsel üst verilerdir ve
web yönetiminde büronun yöneticisi tarafından görülebilir.
- **Sorumluluk.** Sunucuyu işleten büro
tek veri sorumlusu olarak kalır. Yönetici kayıtların onaylanmasına
karar verir, abonelikleri sonlandırabilir, mevzuat kütüphanesi kayıtlarını
silebilir ve paketi kaldırabilir — bu durumda sunucu veri dizini
NAS üzerinde yöneticinin kontrolünde kalır.
- **Çalışan verileri.** IRONSTICK SERVER ile her
iş istasyonu, gün ve dava başına ölçülen çalışma süresini (dava numarası,
müvekkil adı) ve her yedekleme ve geri yükleme olayını (dosya, boyut, zaman, IP adresi)
sunucuya bildirir; büronun yöneticisi bunları orada görüntüleyebilir. Büro
çalışanlarını buna uygun şekilde bilgilendirmelidir.
- **Zaman kayıt verilerinde müvekkillerin tam adları.**
Zaman kayıt özeti çalışma süresini dava ve müvekkil başına gösterir; bu da
müvekkil adlarının NAS üzerinde saklandığı anlamına gelir. Bu, büronun kendi altyapısı
ve mevcut gizlilik rejimi
içinde kalır — ancak bürolar NAS'ı teknik ve organizasyonel önlemler kayıtlarına
eklemelidir (NAS işletim sisteminde erişim kontrolü,
birim şifrelemesi, yedekleme politikası); tıpkı büronun diğer her
dosya sunucusunda olduğu gibi.

## Ek — Müvekkillere yönelik gizlilik bildiriminiz için örnek madde (öneri)

Aşağıdaki metin, IRONSTICK kullanan bir büronun
kendi müvekkil gizlilik bildirimine alabileceği bir ifade önerisidir.
Yukarıda açıklanan veri akışlarına tam olarak karşılık gelecek şekilde yazılmıştır. Her yapıdaki bildirimlere eklenebilmesi için kanun maddelerine
bilinçli olarak atıf yapmaz.

**Metni eklemeden önce — avukat için kontrol listesi:**

1. Yapılandırdığınız **her** yapay zekâ sağlayıcısının veri işleme sözleşmesini
hazır bulundurun, maddede yalnızca gerçekten kullandığınız sağlayıcıları
belirtin ve eğitim ile saklamaya ilişkin cümleyi gerçekten imzaladığınız
koşullara göre kontrol edin.
Ücretsiz arka plan sağlayıcıları (Groq, OpenRouter, Mistral, bölüm 1)
madde yalnızca orada parantez içine alınmış isteğe bağlı cümleyle kapsanır —
bunları yalnızca koşulları meslek hukukunuzun gerekliliklerini karşılıyorsa
etkinleştirin ve kullanmıyorsanız cümleyi silin.
2. Yapay zekâ çalışma alanına ilişkin parantez içindeki cümleyi yalnızca
masaüstü yapay zekâ Bridge'ini (Claude Desktop/Code, ChatGPT Desktop, Qwen
Desktop veya Kimi Desktop) gerçekten kullanıyorsanız koruyun; aksi takdirde silin.
3. Bu madde, bu belgede açıklanan uygulama içi veri akışlarını
kapsar. Yapay zekâ talimat paketini (bölüm 5)
**kapsamaz** — bu dışa aktarımın bir yapay zekâ hizmetine yüklenmesi
ayrı bir karardır ve kural olarak müvekkilin açık
onayını gerektirir.
4. Yapılandırıcıda tek tek yapay zekâ işlevlerini devre dışı bıraktıysanız amaçlar listesini
buna göre kısaltın — tam olarak kullandığınızı tanımlayın,
fazlasını değil.
5. Bu bir ifade önerisidir, hukuki danışmanlık değildir. Kullanmadan önce
baronuzun meslek kurallarına ve yerel
veri koruma uygulamasına göre kontrol ettirin.

### Türkçe

**Yapay zekâ destekli vekâlet işlemleri.** Büromuz, yapay zekâ destekli işlevler içeren
IRONSTICK büro yazılımını kullanmaktadır. Bu
işlevler için dosyanızdan seçilen veriler, bunları bizim adımıza bir
veri işleme sözleşmesi temelinde işleyen harici bir
yapay zekâ hizmet sağlayıcısına (kullanılabilirliğe göre: Alibaba Cloud, Moonshot AI, OpenAI veya Anthropic, bunların API'leri üzerinden)
iletilebilir. Bu işlevleri şunlar için kullanırız:
gelen belgelerin sınıflandırılması ve kaydedilmesi, gelen
e-postaların önceliklendirilmesi, veri varlıklarımızın tutarsızlıklara karşı kontrol edilmesi,
hukuki belgelerin taslağının hazırlanması ve kontrolü ile hukuki analiz
ve araştırma. [İsteğe bağlı — kullanılmıyorsa silin: Gelen e-postaların önceliklendirilmesi,
veri varlıklarımızın kontrolü ve özetler gibi arka planda çalışan görevler için
ayrıca Groq, OpenRouter veya Mistral'ın ücretsiz hizmetleri
kullanılabilir; bunların koşullarını etkinleştirmeden önce
inceledik.]

**Koruma önlemleri.** Yazılım her iletimden önce
sistemimizde kayıtlı doğrudan tanımlayıcıları — adlar,
kişisel kimlik numaraları, telefon numaraları, e-posta adresleri, posta adresleri,
dosya numaraları ve banka bilgileri — kendi bilgisayarımızda nötr
yer tutucularla değiştirir. Yer tutucular ile gerçek veriler arasındaki eşleştirme tablosu
büromuzdan asla çıkmaz; hizmet sağlayıcının yanıtları yerel olarak
geri çevrilir. Yalnızca ilgili işlevin gerektirdiği, sabit kapsam sınırlarıyla
iletilir. Bazı işlevler teknik nedenlerle
gerçek verilere ihtiyaç duyar — örneğin bir kişi adına ilişkin kamuya açık internet araştırması
veya sesli okuma işlevi; bunları yalnızca bilinçli
tekil bir eylemle kullanırız. [İsteğe bağlı — kullanılmıyorsa silin:
Dilekçelerin hazırlanması için ayrıca, dosya verilerinin yer tutucu değişimi olmadan
işlendiği bir yapay zekâ çalışma alanı kullanırız; bu kanal
yalnızca doğrudan gözetimimiz altında kullanılır.] Yapay zekâ işlevlerinden bağımsız olarak yazılım,
veri varlıklarımızda kayıtlı posta adreslerini — adlar olmadan — bir harita üzerinde gösterilebilmeleri için
kamuya açık harita hizmeti OpenStreetMap'e gönderir.

**Hizmet sağlayıcı.** Hizmet sağlayıcının bizim için geçerli
koşullarına göre API üzerinden iletilen içerikler
yapay zekâ modellerinin eğitimi için kullanılmaz ve yalnızca sınırlı bir süre
saklanır. İşleme Avrupa Ekonomik Alanı dışında
gerçekleşebilir; bu durumda iletim,
veri işleme sözleşmemizde kararlaştırılan güvencelerle korunur. Hizmet
sağlayıcının verilerle ne yapabileceğini bu sözleşme düzenler —
yapay zekânın takdiri değil.

**Sizin seçiminiz.** Mesleki sır saklama yükümlülüğümüz
saklıdır: Burada açıklananın ötesinde hiçbir veri büromuzdan
çıkmaz. İşleme, bize verilen vekâlete ve
verimli ve özenli bir vekâlet yürütümüne ilişkin
meşru menfaatimize dayanır. Yapay zekâ destekli işlevlerin kullanımına
her zaman itiraz edebilirsiniz; bu durumda mümkün olduğu ölçüde dosyanızı
bu işlevler olmadan yürütürüz. Yasal veri koruma haklarınız — bilgi alma, düzeltme,
silme, denetim makamına şikâyet — tamamen
saklıdır.

Bu beyan, uygulamanın kaynak kodundan türetilmiştir
(takma adlandırıcı, harici yönlendirici, denetim günlüğü ve her bir işlevin
iletim yolu) ve 1.0.7 sürümünün (Kasım 2026 itibarıyla) teslim edilen davranışını yansıtır.
Yapay zekâ sağlayıcısının kendisi tarafından yapılan işleme — saklama,
eğitim için kullanım, alt işleyenler, hukuk düzeni — yalnızca sağlayıcının
koşullarına, her birinin güncel sürümüyle tabidir. Her sağlayıcının
kullanım koşullarına ve gizlilik politikalarına ilişkin bağlantılar ayrıca
yapay zekâ yapılandırmasının ilgili bölümünde yer alır.

| Sağlayıcı | Kullanım koşulları ve veri koruma |
| --- | --- |
| Alibaba Cloud (Qwen) | [alibabacloud.com/help/en/legal](https://www.alibabacloud.com/help/en/legal) |
| Moonshot AI (Kimi) | [platform.kimi.ai/docs/agreement](https://platform.kimi.ai/docs/agreement) |
| OpenAI (ChatGPT) | [openai.com/policies](https://openai.com/policies) |
| Anthropic (Claude) | Commercial Terms of Service: [anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms); Usage Policy: [anthropic.com/legal/aup](https://www.anthropic.com/legal/aup); Privacy Policy: [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy) |
| Groq | [groq.com/terms-of-use](https://groq.com/terms-of-use) |
| OpenRouter | [openrouter.ai/terms](https://openrouter.ai/terms) |
| Mistral | [legal.mistral.ai/terms/commercial-terms-of-service](https://legal.mistral.ai/terms/commercial-terms-of-service) |
