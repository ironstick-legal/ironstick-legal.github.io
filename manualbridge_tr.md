# Kılavuz - Bridge

> Bridge kılavuzu — yapay zekâ ile çalışmak: arka planda neler olur ve güne başlangıçtan OSINT ve mevzuat araştırmasına kadar sekiz iş akışı.

Orijinal sayfa: https://www.ironstick.legal/manualbridge_tr.html

---

Bridge kılavuzu — yapay zekâ ile çalışmak: arka planda neler olur ve güne başlangıçtan mevzuat araştırmasına kadar sekiz iş akışı.

Temel bilgiler

## 1. Yapay zekâ sohbeti ve Bridge — fark nedir?

IRONSTICK, dosyalarınız üzerinde yapay zekâ ile çalışmanız için size iki yol sunar.
**Yapay zekâ sohbeti** programın içine yerleşiktir: Bir IRONSTICK penceresine yazarsınız ve isteği harici bir yapay zekâ hizmetine IRONSTICK'in kendisi gönderir – büronuzun [yapay zekâ yapılandırmasına](https://www.ironstick.legal/manualquickstart_tr.html#q3) kaydettiği API anahtarlarıyla.
**Bridge** ise tersine çalışır: Zaten kullandığınız masaüstü yapay zekâ uygulamasına yazarsınız ve bu uygulama IRONSTICK araçlarını bir bağlayıcı üzerinden canlı olarak çağırır.
Her iki durumda da yapay zekâ verilerinize yalnızca IRONSTICK üzerinden, aynı araçlarla ve aynı kapıların arkasından ulaşır.

### Yerleşik yapay zekâ sohbeti

- **Önce yerel bir katman.** Her mesaj önce bilgisayarınızda çalışan kural tabanlı bir katmandan geçer – yapay zekâ modeli olmadan ve internet olmadan. Basit istekler – bir ekranı, bir müvekkili veya bir davayı açmak, basit sorgular – doğrudan orada yürütülür. Düşünme veya metin oluşturma gerektiren her şey harici bir yapay zekâ hizmetine iletilir.
- **Sizin anahtarlarınız, sizin hizmetleriniz.** Sohbet, yapay zekâ yapılandırmasında API anahtarı kayıtlı olan harici yapay zekâ hizmetlerini kullanır. Bunlar otomatik olarak sabit bir sırayla kullanılır. Biri erişilemez durumdaysa veya bakiyesi tükenmişse, aynı isteği bir sonraki üstlenir.
- **Önce sizin onayınız.** Sohbet, harici bir yapay zekâ hizmetine herhangi bir şey göndermeden önce size sorar. Reddederseniz hiçbir şey gönderilmez ve sohbet ancak modu değiştirdiğinizde veya sohbeti yeniden açtığınızda tekrar sorar.
- **Takma adlandırılmış.** Bir istek bilgisayarınızdan çıkmadan önce kişi ve şirket adları, dava ve dosya numaraları, kişisel kimlik numaraları, IBAN'lar, telefon numaraları, e-posta adresleri ve taraf adresleri [nötr yer tutucularla değiştirilir](https://www.ironstick.legal/gdpr_tr.html). Yanıt bilgisayarınızda geri çevrilir. Tarihler ve tutarlar değişmeden kalır. Yer tutucular kendi kayıtlarınızdan oluşturulur; ayrıca serbest metindeki numaralar, e-posta adresleri ve telefon numaraları da tanınır.
- **Kayıt altında.** Harici bir yapay zekâ hizmetine yapılan her çağrı, bilgisayarınızdan çıktığı yer tutuculu biçimiyle yerel olarak kaydedilir.
- **Kompakt çalışma belleği.** Yapay zekâ her turda sohbetin en son bölümünü (yaklaşık son 6.000 karakter) ve önceki bölümün kısa bir özetini alır. Bir istek en fazla sekiz araç turu boyunca işlenir.
- **Nerede çalışır.** Windows'ta ve Android tablette.

### Bridge

- **Üç parça.** Masaüstü yapay zekâ uygulamanız, Model Context Protocol (MCP) üzerinden aynı bilgisayardaki küçük bir Bridge programına bağlanır. Bridge her çağrıyı, yalnızca bu bilgisayardan erişilebilen korumalı bir bağlantı üzerinden çalışan IRONSTICK uygulamasına iletir. Uygulama aracı yürütür ve sonucu aynı yoldan geri gönderir.
- **Bridge programı hiçbir veriyi bilmez.** Hiçbir veritabanı açmaz ve kendi araçlarını içermez; çağrıları yalnızca iletir. Yapay zekâya yönelik çalışma talimatları da masaüstü yapay zekâ bağlandığında çalışan uygulamadan gelir.
- **Yalnızca IRONSTICK çalıştığı sürece.** Uygulama kapalıysa her araç çağrısı, IRONSTICK'in çalışmadığı ve başlatmanız gerektiği bilgisiyle yanıtlanır. Araç listesi masaüstü yapay zekâda görünür kalır; böylece iki programı hangi sırayla başlattığınızın hiçbir önemi yoktur.
- **Gerçek veriler.** Araç sonuçları masaüstü yapay zekâya takma adlandırılmadan ulaşır – sunulmaya hazır bir taslağı ancak gerçek adlar, numaralar ve tarihler mümkün kılar. Yapay zekânın okudukları, masaüstü yapay zekâ uygulamasının sağlayıcısında kendi hesabınız altında ve sağlayıcının koşullarına göre işlenir.
- **Sizin tarafınızdan etkinleştirilir.** Bridge yalnızca yapay zekâ yapılandırmasında *Yerel masaüstü yapay zekânın bağlayıcı erişimine izin ver* açık olduğunda ve Bridge bu masaüstü yapay zekâ uygulaması için [lisanslı](https://www.ironstick.legal/download_tr.html) olduğunda çalışır. Program kontrolü – ekranları, davaları ve belgeleri açmak, dışa aktarmak – ikinci bir anahtar gerektirir.
- **Aynı anda birden fazla.** Lisanslı masaüstü yapay zekâ uygulamaları – Claude Desktop, ChatGPT Desktop, Qwen Desktop ve Kimi Desktop – aynı anda bağlı olabilir ve aynı dava üzerinde çalışabilir. Her biri çalıştığı sürece menü çubuğunda kendi simgesiyle gösterilir.
- **Nerede çalışır.** Windows'ta.

### Karşılaştırma

|  | Yapay zekâ sohbeti (yerleşik) | Bridge (masaüstü yapay zekâ uygulaması) |
| --- | --- | --- |
| Nereye yazarsınız | IRONSTICK sohbet penceresine | Masaüstü yapay zekâ uygulamanıza |
| Yapay zekâ hizmetiyle kim konuşur | IRONSTICK, kendi API anahtarlarınızla | Masaüstü yapay zekâ uygulamanız, kendi hesabınızla |
| Yapay zekâ maliyeti | Yapay zekâ hizmeti tarafından kullanıma göre API anahtarınıza faturalandırılır | Masaüstü yapay zekâ uygulaması için zaten sahip olduğunuz abonelikle karşılanır |
| IRONSTICK lisansı | Dahil, ek lisans gerekmez | Kullanıcı / iş istasyonu başına [Bridge lisansı](https://www.ironstick.legal/download_tr.html) – masaüstü yapay zekâ uygulaması başına bir Bridge veya tüm Bridge'leri içeren paket |
| Yapay zekâya gönderilen veriler | Takma adlandırılmış; tarihler ve tutarlar değişmeden | Gerçek veriler, sağlayıcıda hesabınız altında işlenir |
| Onayınız | Bir sohbet oturumunun ilk harici isteğinden önce | Her program çalışmasında herhangi bir masaüstü yapay zekânın ilk veri erişiminden önce |
| Çalışma talimatları | Her istekle birlikte gönderilir | Yapay zekâ bunları okumalı ve bir aracı açmadan önce bir kuralı kelimesi kelimesine onaylamalıdır |
| Araçlar ve kapılar | Aynı araçlar ve aynı kapılar, ayrıca sohbetin kendi geçmişinde arama | Aynı araçlar ve aynı kapılar; program kontrolü yalnızca kendi anahtarıyla |
| Bir çalışma oturumunun süresi | En son sohbet artı kısa bir özet; istek başına en fazla sekiz araç turu | Masaüstü yapay zekâ uygulamasının sohbeti |
| Platformlar | Windows ve Android tablet | Windows |

### Bridge neden kapsamlı dava çalışmaları için uygundur

- **IRONSTICK üzerinden çağrı başına maliyet yok.** Dosyaların tamamını okumak, yüzlerce belgeyi incelemek ve birkaç turda taslak hazırlamak – bunların hepsi masaüstü yapay zekâ uygulaması için zaten ödediğiniz abonelik üzerinden yürür. Aynı iş yerleşik sohbet üzerinden yapıldığında kullanıma göre API anahtarınıza faturalandırılır; bu da büyük dosyalarda hızla birikir.
- **Daha uzun çalışma oturumları.** Masaüstü yapay zekâ kendi kesintisiz sohbetini yürütür — büyük dosyalar üzerinde uzun çalışma oturumları için ideal.
- **Çağrı başına daha büyük yanıtlar.** Claude Desktop ve ChatGPT Desktop 40.000 karaktere kadar araç yanıtlarını doğrudan alır; Qwen Desktop, Kimi Desktop ve yerleşik sohbet 10.000 karaktere kadar alır. Daha büyük olan her şey eksiksiz olarak şifreli ara belleğe gider ve oradan bölüm bölüm okunur.
- **Tam araç seti, tam metin.** Masaüstü yapay zekâ eksiksiz araç setiyle çalışır ve tam metinleri kendi sohbetinde, sohbetle aynı kapıların arkasında okur.
- **Sohbet yerini korur.** Yerleşik sohbet ek lisans gerektirmez, her zaman elinizin altındadır – tablette de – ve daha sıkı denetlenen kanaldır: takma adlandırılmış, onay sorgulu ve kayıt altında.

## 2. Tek araç seti — istemci uygulamasında

Bir yapay zekânın yürütebileceği her işlem, bilgisayarınızdaki IRONSTICK istemci uygulamasında bulunur – yapay zekâda da, Bridge programında da değil.
Yapay zekâ sohbeti ve bağlı her masaüstü yapay zekâ tam olarak aynı araçları çağırır. Her çağrı, çalışan uygulama tarafından canlı veritabanınız üzerinde yürütülür ve yapay zekâya yalnızca sonuç geri döner.

- **Tek araç kaydı.** Araç seti, yapay zekâ sohbeti ve Bridge için tek ve aynı modül tarafından oluşturulur: aynı araçlar, aynı sırayla, aynı kapıların arkasında. Araçlar konularına göre araç setlerinde gruplanmıştır – dava, deliller, süreler, mevzuat, mektuplar ve e-postalar ve daha fazlası –; yapay zekâ bunları ihtiyaca göre açar.
- **Tek bir geçiş yolu.** İster sohbetten ister bir masaüstü yapay zekâdan gelsin, her araç çağrısı aynı kontrol katmanından geçer: menü çubuğundaki etkinlik simgesi, çağıranın tanımlanması, kapılar ve büyük sonuçların ara belleğe aktarılması. Her masaüstü yapay zekâ ve her API hizmeti, neleri okuduğuna dair kendi kaydını tutar; böylece birinin okuması hiçbir zaman bir diğeri için sayılmaz.
- **Veriler IRONSTICK'te kalır.** Dosyanız bilgisayarınızdaki IRONSTICK veritabanında kalır. Bir yapay zekâ yalnızca bir aracın ilgili çağrı için döndürdüğünü alır; IRONSTICK ona ne veritabanını ne de veri klasörünü teslim eder.
- **Her çağrıda canlı.** Araçlar veritabanını her çağrıda açar. Kaydettiğiniz şeyi bir sonraki araç çağrısı görür.
- **Arka planda çalışır.** Araçlar uygulamanın içinde arka planda çalışır; böylece program büyük dava dosyalarının uzun okumalarında bile yanıt vermeye devam eder.
- **Uygulama çalışıyor olmalıdır.** Çalışan uygulama olmadan araç da yoktur: Bridge programı çağrıları yalnızca iletir ve IRONSTICK'in çalışmadığını yanıtlar.
- **Uygulamanın kilidi açık olmalıdır.** Başlangıç ekranındaki altı haneli güvenlik kodu girilmediği sürece, bir masaüstü yapay zekânın her araç çağrısı uygulamanın kilitli olduğu bilgisiyle yanıtlanır ve hiçbir veri döndürülmez. Kodu IRONSTICK'e girin ve ardından isteği yineleyin.
- **Erişimi siz verirsiniz.** Bridge bir masaüstü yapay zekâya yalnızca bağlayıcı anahtarı açıksa ve bu masaüstü yapay zekâ lisanslıysa hizmet verir. Her program başlatıldıktan sonra herhangi bir masaüstü yapay zekânın ilk veri erişimi tek bir onay iletişim kutusu açar. Onaylarsanız erişim, program çalıştığı sürece tüm lisanslı masaüstü yapay zekâlara açıktır. Reddederseniz her masaüstü yapay zekânın her çağrısı 10 dakika boyunca reddedilir ve bundan sonraki ilk erişimde size yeniden sorulur. Bu karar kaydedilmez.

## 3. Kapılar — arka planda neler olur

Yapay zekâ ile kayıtlarınız arasında, istemci uygulamasının araç katmanına yerleşik kapılar bulunur. Bu, sade bir program mantığıdır – hiçbir yapay zekâ başka bir yapay zekâyı denetlemez.
Bir kapı bir çağrıyı reddederse hiçbir şey yazılmaz veya teslim edilmez; yapay zekâ, neyin eksik olduğunu ve kapıyı hangi çağrının açtığını belirten bir mesaj alır.
Kapıların çoğu yapay zekâ sohbeti ve her masaüstü yapay zekâ için aynı şekilde çalışır; son sütun her birinin nerede geçerli olduğunu gösterir.

| Kapı | Ne zaman devreye girer | Ne yapar | Geçerli olduğu yer |
| --- | --- | --- | --- |
| **Harici yapay zekâdan önce onay** | Bir sohbet oturumunda harici bir yapay zekâ hizmetine ilk kez istek gönderilmesi gerektiğinde | Bir iletişim kutusu, harici yapay zekânın kullanılıp kullanılamayacağını sorar. Reddederseniz hiçbir şey gönderilmez ve sohbet bu oturumda tekrar sormaz. | Yapay zekâ sohbeti |
| **Takma adlandırma** | Yapay zekâ sohbetinin harici bir yapay zekâ hizmetine yaptığı her istek | Adlar, şirketler, dava ve dosya numaraları, kimlik numaraları, IBAN'lar, telefon numaraları, e-posta adresleri ve taraf adresleri bilgisayardan yer tutucu olarak çıkar ve bilgisayarınızda geri çevrilir. Tarihler ve tutarlar değişmeden kalır. Yer tutucu listesi eksiksiz oluşturulamazsa istek gönderilmez. | Yapay zekâ sohbeti |
| **Veri erişimine onay** | Program başlatıldıktan sonra herhangi bir masaüstü yapay zekânın ilk araç çağrısı | Tüm masaüstü yapay zekâlar için ortak tek bir onay iletişim kutusu görünür. Onaylandı: program çalıştığı sürece açık. Reddedildi: her çağrı 10 dakika boyunca reddedilir, ardından size yeniden sorulur. | Bridge |
| **Başlangıç kilidi** | Altı haneli güvenlik kodu girilmediği sürece her araç çağrısı | Çağrı, uygulamanın kilitli olduğu bilgisiyle yanıtlanır; hiçbir veri döndürülmez. | Bridge |
| **Talimat kilidi** | Bir masaüstü yapay zekânın her araç çağrısı | Talimatların okunması, onaylanması ve sistem dilinin sorgulanması dışındaki tüm araçlar, yapay zekâ talimatları okuyup uydurma olgulara karşı kuralı kelimesi kelimesine geri verene kadar kapalı kalır. Onay, verilmesinden 60 dakika sonra, 2 saat boyunca hiç çağrı yapılmadığında, gece yarısı, her yeni bağlantıda ve – IRONSTICK'in sohbet kaydını görebildiği yerlerde – masaüstü yapay zekâ sohbetini sıkıştırdığında geçerliliğini yitirir; bu durumda yapay zekâ yeniden okumalı ve rastgele seçilen bir kuralı kelimesi kelimesine geri vermelidir. Yapay zekâ sohbetinde ise talimatlar her istekle birlikte gönderilir. | Bridge |
| **Tarih kapısı** | Tarihli içerik yazan araçlar – kronoloji, takvim, günlük notlar, günlük tutanak, hafıza, mevzuat bildirimleri ve diğerleri | Yapay zekâ son 30 dakika içinde gerçek güncel tarihi ve saati sorgulamamışsa çağrı reddedilir. | Her ikisi |
| **Önce davayı okuyun** | Dava verilerini okuyan araçlar (kronoloji, zaman çizelgesi, aramalar, tam metinler ve daha fazlası) ve bir davaya yazan araçlar (notlar, kronoloji kayıtları, dilekçe denetimi, dışa aktarma, başka bir yapay zekâya devir) | Bir davanın içeriğini okuyan araçlar, yapay zekâ o davanın özetini (digest) okuyana kadar reddedilir. Bir not veya kronoloji kaydı ayrıca dava profilini, yargı alanını ve en yeni kronoloji kayıtlarını gerektirir. Bir dilekçe denetimi, dışa aktarma veya devir ayrıca davanın en yeni belgelerinin eksiksiz okunmuş olmasını gerektirir. Ret mesajı henüz okunmamış olanları listeler. | Her ikisi |
| **Yalnızca okunandan yaz** | Hafıza kayıtları, bir Snake'teki değişiklikler, taslaklar üzerinde çalışma, dilekçe denetimi ve bir davaya ilişkin teslim | Bir davaya ilişkin hafıza kaydı ancak özet okunmuşsa ve içinde atıf yapılan her belge bu oturumda eksiksiz okunmuşsa kabul edilir. Bir ara bellek dosyasındaki her arama sonucu, arama isabetlerinin okuma sayılmadığı uyarısını, isabetlerin arkasındaki henüz okunmamış belgelerle birlikte taşır. Yapay zekâ bir davada karşı tarafın veya bir resmî makamın belgesini açtıysa, bu belge eksiksiz okunana kadar o davaya artık hiçbir şey yazılmaz. | Her ikisi |
| **Önce Nucleu** | Dilekçe yazma, denetleme ve teslim | Davanın her güncel Nucleu'su – dava Nucleu'su ve davanın ait olduğu her vakıanın Nucleu'su – güncel sürümüyle okunana kadar reddedilir. Dilekçe denetiminin son turu belgeyi Nucleu ile karşılaştırır. | Her ikisi |
| **Snake kapısı** | Dilekçe denetiminde, Nucleu turundan hemen önce, davanın veya vakıalarına ait başka bir davanın bir Snake'i varsa | Yapay zekâ size Snake turunun çalıştırılıp çalıştırılmayacağını sormalıdır ve ancak yanıtınızdan sonra devam eder – ya da görevi verirken bunu talep ettiyseniz hemen. Evet derseniz her Snake kaydı gerekçesiyle birlikte benimsendi, reddedildi veya ilgisiz olarak sonuçlandırılmalıdır. | Her ikisi |
| **Önce mevzuat kütüphanesi** | Bir kanunla ilgili web araması veya web sayfası sorgusu (madde veya paragraf numaraları, kanun adları, kanun numaraları, mevzuat portalları) | Yapay zekâ mevzuat kütüphanenizde bu normu arayana kadar reddedilir. Kütüphanede varsa web bu norm için kapalı kalır ve yapay zekâ kütüphaneden alıntı yapar. Web, bu norm için yalnızca kütüphanede isabet yoksa açılır – 15 dakika süreyle. | Her ikisi |
| **Mevzuat kaynaklarını bildirin — açılmış sayfalar, önizlemeler değil** | Bir mevzuat kaynağı sunan, kanunla ilgili bir web araması veya açılmış bir mevzuat portalı sayfası ve yeni bir mevzuat kaynağının her bildirimi | Kaynak bildirilene kadar (en fazla 15 dakika) sonraki her araç yanıtı, kaynağı bildirme hatırlatmasıyla başlar. Bir bildirim yalnızca yapay zekânın son 24 saat içinde IRONSTICK sayfa aracıyla kendisinin açtığı bir sayfa için kabul edilir. Bildirilen kaynaklar bir onay iletişim kutusunda bekler: işaretlenen kaynaklar alınır, kontrol edilir ve kütüphaneye kaydedilir, işaretlenmeyenler reddedilir. | Her ikisi |
| **Hafıza yalnızca sizin onayınızla** | Yapay zekâ bir hafıza kaydını kaydeder, değiştirir veya siler | Bir iletişim kutusu size kaydı gösterir. Kayıt yalnızca siz izin verirseniz kaydedilir, değiştirilir veya silinir; reddedilen kayıtlar atılır. İletişim kutusu açık olduğu sürece bu oturumun diğer her çağrısı reddedilir. Yapay zekâlar arasındaki devir görevleri ve kendi notlarınız dışında yapay zekâ yalnızca sizin onayladığınız hafıza kayıtlarını okur. | Her ikisi |
| **Yazmak yerine öneriler** | Yapay zekâ ana verileri değiştirmek, bir kişi veya kurum eklemek, bir ilişki eklemek, bir kişi analizini doldurmak, mükerrer kayıtları birleştirmek veya bir kaydı silmek ister | Araç kayıtlarınıza hiçbir şey yazmaz. Veri tutarlılığı izleyicisine bir öneri bırakır; orada öneriyi benimser veya reddedersiniz. | Her ikisi |
| **Gizli belgeler dışarıda bırakılır** | Belgeleri, medyayı, süreleri veya bir davanın tamamını okuyan her yapay zekâ aracı ve harici yapay zekâ kullanan arka plan hizmetleri (veri tutarlılığı izleyicisi, durum raporu) | Gizli olarak işaretlenen kayıtlar her yapay zekâ aracından ve her hizmetten filtrelenir ve yapay zekâya iletilmez. | Her ikisi |
| **Başarı şansı yalnızca mahkeme dosyasından** | Uygulamada veya bir masaüstü yapay zekâ tarafından başlatılan yapay zekâ dava değerlendirmesi | Başarı şansının değerlendirmesi yalnızca dava profiline ve davanın, dava açan belgede muhatap alınan mahkemeye veya makama gönderilen ya da oradan gelen belgelerine dayanır – her iki taraftan, ekler hariç. Dava açan belge yoksa veya mahkeme ya da makam tanınamamışsa başarı şansı değerlendirilemez olarak işaretlenir ve gösterge boş kalır. | Her ikisi |
| **Teslimden önce denetim** | Dilekçe gibi resmî bir belgenin teslimi | Tam olarak bu dosya durumu için deterministik dilekçe denetiminin yeni ve olumlu bir sonucu olmadan teslim reddedilir; her düzenleme sonucu geçersiz kılar. Sistemden çıkan şey, sizin incelemeniz ve imzanız için sunulmaya hazır bir taslaktır. | Her ikisi |

İş akışları

## İş akışı 1 — Güne başlangıç

Güne başlangıç, işe koyulmadan önce üç soruyu yanıtlar: neyin vadesi geldi, ne geldi ve nerede kalmıştınız.
Tek bir adım oturum başlangıcı özetini oluşturur – tarih, hatırlatmalar, önümüzdeki üç günün süreleri ve randevuları ile açık görevlerle. Ardından yapay zekâ eksiksiz süre listesini, bugünün randevularını ve bugün veya dün kaydedilenleri getirir.
Bunu her sabah ve bir masaüstü yapay zekâ ile her yeni sohbete başladığınızda kullanın.

![Başlangıç, ajanda ve ısı haritası](https://www.ironstick.legal/img/screens/1%20menu.png)

Başlangıç, ajanda ve ısı haritası: günün süreleri, randevuları ve yeni kayıtları bir bakışta.

### Adım 0 — Bağlamı oluşturun

- **IRONSTICK'i başlatın ve kilidini açın.** Araçlar yalnızca uygulama çalıştığı sürece ve altı haneli güvenlik kodu girildikten sonra çalışır.
- **Uygulamada size özel brifing.** Windows'ta günün ilk başlatılışında IRONSTICK'in size gün hakkında brifing verip vermeyeceği sorulur. Evet derseniz brifing; sürelere, takvime, gelen kutusuna, belgelere ve davaya götüren tıklanabilir satırlarla gösterilir ve ayrıca sesli olarak okunur.
- **Masaüstü yapay zekâ: yeni bir sohbet.** Masaüstü yapay zekâ uygulamanızda yeni bir sohbet başlatın. Program başlatıldıktan sonra herhangi bir masaüstü yapay zekânın ilk erişiminde IRONSTICK'in gösterdiği veri erişimi iletişim kutusunu onaylayın.
- **Yapay zekâ sohbeti.** IRONSTICK'te yapay zekâ sohbetini açın; çalışma talimatları her istekle birlikte gönderilir.
- **Dava gerekmez.** Güne başlangıç tüm müvekkilleri ve davaları kapsar. Bir davayı yalnızca sorunuz o davayla ilgiliyse açın.

### Ne söylersiniz — adım adım

Oturumu başlat.

1. Yapay zekâ talimatlarını okur ve onaylar, bugünün tarihini belirler ve oturum başlangıcı özetini yükler: hatırlatmalar, önümüzdeki üç günün süreleri ve randevuları, açık görevler.

Bugün ve önümüzdeki üç gün içinde vadesi gelen ne var?

2. Süreleri, duruşmaları ve randevuları her biri kendi davasıyla birlikte tarih sırasına göre alırsınız.

Dünden bu yana ne geldi?

3. Yeni e-postalar ve yeni kaydedilen belgeler, her biri atandığı davayla birlikte.

[Dava numarası] davasındaki yeni e-postayı oku ve benden ne istediğini söyle.

4. Önce tam metin okunur; içeriği, açık noktaları ve bir sonraki adım için bir öneriyi alırsınız.

Bugün [kişi] ile [konu] hakkında yaptığım telefon görüşmesini günlük tutanağa ekle.

5. Kayıt, tarih ve saatiyle bugünün günlük tutanağına eklenir.

### Arka planda neler olur

- **İlk araçtan önce kapılar.** Güvenlik kodu girilmediği sürece bir masaüstü yapay zekânın her araç çağrısı, uygulamanın kilitli olduğu bilgisiyle yanıtlanır. Program başlatıldıktan sonra herhangi bir masaüstü yapay zekânın ilk veri erişimi onay iletişim kutusunu açar; onaylanırsa erişim, program çalıştığı sürece tüm masaüstü yapay zekâlara açık kalır. Başka bir araç açılmadan önce masaüstü yapay zekâ çalışma talimatlarını okumalı ve bir kuralı kelimesi kelimesine geri vermelidir.
- **Tek adımda oturum başlangıcı.** Bridge üzerinden oturum başlangıcı araç setinin açılması, oturum başlangıcı özetini oluşturur. Tarih ve saat, sistem dili ve açık olan ekran hemen döner; eksiksiz özet şifreli ara belleğe konur ve yapay zekâ onu oradan okur.
- **Özet neleri içerir.** Vadesi gelen hafıza hatırlatmaları (bugün ve gecikmiş olanlar) – yapay zekâ önce bunları ele alır; ortak yapay zekâ hafızasının hangi müvekkiller için bilgi içerdiği; tek tarih çapası; aynı zamanda sohbet dili olan sistem dili; güncel ekran; son on günlük tutanağın listesi; üç gün içinde vadesi gelen süreler ve randevular, her başlıkta en fazla on satır; başka bir yapay zekânın bıraktığı açık görevler. Her bölüm sınırlıdır ve sınırlı bir bölüm, yapay zekâya tam sürümü nereden alacağını söyler.
- **Bekleyen mahkeme kararları.** Günün ilk oturum başlangıcında, henüz değerlendirilmemiş mahkeme kararları varsa özet, yapay zekâya bunların şimdi değerlendirilip değerlendirilmeyeceğini size hemen sormasını söyler. Evet: Yapay zekâ bunları tek tek ele alır. Hayır: Sizin görevinizle devam eder.
- **Eksiksiz süre listesi.** Süre listesi, IRONSTICK süreler ekranında bulunan her şeyi tarihe göre sıralı olarak sunar: belgelere bağlı süreler, mahkeme portallarından ve takvimden gelen yaklaşan duruşmalar ve yapay zekânın kendi hafıza notlarına koyduğu, bu şekilde işaretlenmiş süreler. Liste kritik (gecikmiş ve bugün), yakında (gecikmişler dahil 10 güne kadar), bugün, bu hafta, gelecek hafta veya bir tarihle sınırlandırılabilir. Bridge üzerinden süreler araç setinin açılması aynı eksiksiz listeyi ve ek olarak bugünün randevularını sunar.
- **Randevular.** Randevu listesi bir günün veya dönemin randevularını şu sırayla gösterir: mahkeme portallarından gelen duruşmalar, takvimden gelen duruşmalar, ardından diğer takvim kayıtları.
- **Neler geldi.** İki liste, tüm müvekkiller ve davalar genelinde bugün veya dün kaydedilen her kaydı gösterir; esas alınan, olayın tarihi değil kaydın yapıldığı gündür. Bridge üzerinden yazışma ve e-posta araç setinin açılması, bugün kaydedilen belgeleri ve bugün gelen e-postaları, her birinden en fazla on tane olmak üzere listeler.
- **Yapay zekâ için günlük brifing.** Yapay zekâ günlük brifingin içeriğini belge numaraları ve işaretlerle birlikte alabilir: önümüzdeki 30 günün süreleri, kritik olanlar ve bugün tamamlananlar, bugünün duruşmaları ve randevuları, okunmamış posta, bugün kaydedilen belgeler, yarının duruşmaları, doğum günleri, yeniden hareketlenen davalar, haftalık istatistik ve en son yapay zekâ günlüğü. Ayrı bir kontrol, her masaüstü yapay zekâ için ayrı ayrı bugün brifing alıp almadığını kaydeder; almadıysa en son günlük tutanakları sunar ve brifing aldığını not eder.
- **Yeni bir belgeyi okumak.** Tam metin okuyucu, bir kaydın çıkarılmış tam metnini sunar. Çalışma talimatları yapay zekâya, bir başlığın veya liste satırının bir kaydın neyi belgelediğine dair kanıt olmadığını söyler: Bir kaydın ne söylediğini belirtmeden önce tam metni güncel oturumda okur ve kaynağın kanıtladığını, bir tarafın veya bir çıkarımın ima ettiğinden ayrı tutar.
- **Bir davaya ilişkin sorular.** Bir davanın kronolojisi, süreleri ve takvimi dava verileridir: Yapay zekâ o davanın özetini ve ardından dava hafızasını okuyana kadar reddedilirler. Tüm davaları kapsayan genel listeler bu olmadan açıktır. Kronoloji tarihe göre filtrelenebilir; bir tarih, kayıt tarihine veya belgenin tarihine denk gelir.
- **IRONSTICK'te gösterme teklifi.** Bir süre veya randevu listesinden sonra yapay zekâ, kaydı IRONSTICK penceresinde açmayı teklif edebilir. Yalnızca siz kabul ettikten sonra ve yalnızca yapay zekâ yapılandırmasında program kontrolü açıksa yönlendirme yapar.

## İş akışı 2 — Genel sohbet kuralları

Bu kurallar, yerleşik sohbette ve Bridge üzerinden, yapay zekâ ile yapılan her sohbet için geçerlidir: bir oturumun nasıl başladığı, yapay zekânın hangi dili konuştuğu, olguların nereden gelebileceği ve kaynaklarını nasıl kontrol edeceğiniz.
Her kurala, onu uygulamanızı sağlayan cümle eşlik eder: okunmuş ve onaylanmış talimatlar, kaynaklarını belirten yanıtlar, yanıt vermeden önce sonuna kadar okunmuş tam metinler.
Bunu ilk gerçek çalışma oturumunuzdan önce okuyun; aynı kurallar diğer tüm iş akışlarını taşır.

![Rehberli yol: önce oku, sonra yanıtla](https://www.ironstick.legal/img/73_ironstick_guided_path.png)

Temellendirilmiş bir sohbet: Yapay zekâ yanıt vermeden önce okuması gerekeni okur — ve kaynakları siz kendiniz kontrol edersiniz.

### Adım 0 — Bağlamı oluşturun

- **Önce IRONSTICK'i başlatın ve kilidini açın.** Çalışan uygulama olmadan Bridge, IRONSTICK'in çalışmadığını yanıtlar; altı haneli güvenlik kodu girilmediği sürece her araç çağrısı, uygulamanın kilitli olduğu bilgisiyle yanıtlanır.
- **Oturumu başlatın.** Masaüstü yapay zekânızda yeni bir sohbet başlatın ve oturumu başlatmasını isteyin. Oturum başlangıcı araç setinin açılması oturum başlangıcı özetini oluşturur: tarih, sistem dili, açık olan ekran, vadesi gelen hatırlatmalar, değerlendirilecek bekleyen mahkeme kararları, önümüzdeki üç günün süreleri ve randevuları, son on günlük tutanak ve açık devir görevleri.
- **Üst çubuktaki yapay zekâ simgesine dikkat edin.** Açılır menüsü, bir masaüstü yapay zekâ için talimatların onaylanıp onaylanmadığını (yeşil onay işareti veya kırmızı çarpı), kaç kez okunduklarını ve kaç kural ihlali yaşandığını gösterir; yapay zekânın dokunduğu her dava için profili, yargı alanını ve özeti okundu veya okunmadı olarak ve okunan belgelerin bir çubuğunu gösterir.
- **Yerleşik sohbette** çalışma talimatları her isteğin parçasıdır; onaylanacak bir şey yoktur. İlk istek harici bir yapay zekâ hizmetine gitmeden önce IRONSTICK onayınızı ister.
- **Elinizdeki en kesin ipucunu verin.** Bir delil numarası bir adı, bir ad bir anahtar kelimeyi geçer ve bir dava numarası yapay zekâya hangi dosyayı okuması gerektiğini söyler.

Oturumu başlat. Ardından [dosya numarası] davasının özetini ve dava hafızasını oku ve bana neyin açık olduğunu söyle.

### Kurallar — ve bunları uygulamak için ne söylersiniz

Oturumu başlat.

1. Kural 1 — yapay zekâ, dava verilerine dokunmadan önce talimatlarını okur ve onaylar ve sistem dilinizde yanıt verir.

Talimatlarındaki [numara] numaralı kuralı aynen aktar.

2. Kural 2 — her kural kelimesi kelimesine görüntülenebilir; böylece yapay zekâyı ona bağlayabilirsiniz.

Bunu hangi belge söylüyor? Bana delil numarasını ver.

3. Kural 3 — her ifade kaynağını taşır; numaraya tıklamak belgeyi açar.

Yanıt vermeden önce [#delil numarası] belgesini eksiksiz oku.

4. Kural 4 — başlıklar ve kısa açıklamalar olgu değildir; yanıt tam metne dayanır.

Kanıtlanmış olanı yalnızca tahmin edilenden ayır.

5. Kural 5 — yapay zekâ değerlendirmeleri ve tahminleri bu şekilde işaretler ve yalnızca kaynakların belgelediklerini aktarır.

Yalnızca arama isabetlerini değil, belgenin tamamını oku.

6. Kural 6 — uzun belgeler sonuna kadar okunur; yapay zekâ her satır okunduğunda bunu bildirir.

### Arka planda neler olur

- **Talimat kilidi (Bridge).** Masaüstü yapay zekâ çalışma talimatlarını okuyup uydurma olgulara karşı kuralı kelimesi kelimesine geri vermediği sürece, talimatların okunması, onaylanması ve sistem dilinin sorgulanması dışında her araç reddedilir. Okuyan yapay zekâ onayı kendisi vermelidir; başka bir sohbette verilen bir onay, kilidi onun için açmaz.
- **Yeniden okuma.** Onay, verilmesinden 60 dakika sonra, iki saat boyunca hiç çağrı yapılmadığında, gece yarısı ve her yeni bağlantıda geçerliliğini yitirir; IRONSTICK'in masaüstü yapay zekânın sohbet kaydını görebildiği yerlerde, masaüstü yapay zekâ bu sohbeti sıkıştırdığında da. Bu durumda yapay zekâ yeniden okur ve rastgele seçilen bir kuralı kelimesi kelimesine geri verir – bir hata değil, kısa bir duraklama.
- **Kural güvenceleri.** Program mantığı kestirmelere dikkat eder; örneğin talimatlar okunmadan yapılan araç çağrılarına veya teslim yolunun dışından geçirilen bir dosyaya. Böyle bir durum tespit edilirse tüm araçlar kilitlenir ve nedeni belirtilir; sayaca göre yapay zekâ uydurma olgulara karşı kuralı ezbere tekrarlar veya talimatları yeniden okuyup ret mesajında adı geçen kuralı geri verir. Sayaç, yapay zekâ simgesinin açılır menüsünde görülebilir.
- **Tek sohbet dili.** Yapay zekâ, siz hangi dilde yazarsanız yazın, oturum boyunca IRONSTICK sistem dilinde yanıt verir. Dilekçeler, mahkeme e-postaları ve kronoloji kayıtları davanın yargı alanının dilinde yazılır; günlük tutanak ise sohbet dilinde.
- **Olgular araçlardan, bu oturumdan.** Talimatlar dava olgularına yalnızca güncel oturumda alınan IRONSTICK araçlarından izin verir – yapay zekânın belleğinden, önceki mesajlardan, eğitim verilerinden, indirilmiş dosyalardan veya başka bir bağlayıcıdan değil. Alınamayan şey bir boşluk olarak adlandırılır ve asla çıkarımla doldurulmaz.
- **Önce araştırma.** Yapay zekâya, araçların yanıtlayabileceği bir şeyi asla sormaması talimatı verilmiştir: Bir dava numarası verildiğinde hangi dosyayı kastettiğinizi sormak yerine okur.
- **Başlıklar ve özetler olgu değildir.** Yapay zekâ bir kaydın neyi belgelediğini ileri sürmeden önce kaydın tam metnini güncel oturumda okumalıdır; bir başlığın, bir tarafın veya bir çıkarımın ima ettiği şey tahmin olarak işaretlenmelidir. Çıkarılmış metni olmayan bir kayıttan içeriğe ilişkin bir ifade çıkmaz.
- **Arama isabetleri okuma değildir.** Bir ara bellek dosyasındaki her arama sonucu, isabetlerin okuma sayılmadığı uyarısını, isabetlerin arkasındaki henüz okunmamış belgelerle birlikte taşır. Dava dökümlerinde bir okuma kapsamı uyarısı, sonuna kadar okunmamış her dosyayı yüzdesi ve okunmamış satır aralıklarıyla birlikte belirtir; bu uyarı, boşluklar okunana kadar sonraki yanıtlarda yeniden görünür.
- **Yanıtlarda okuma durumu.** Okuma sayıları değiştiğinde araç yanıtları, yapay zekâ simgesinin açılır menüsünde gördüğünüz aynı sayıları taşır; bu sayılar göstermediği sürece bir davayı, delillerini veya hafızasını asla eksiksiz okunmuş olarak nitelendirmeme talimatıyla birlikte.
- **Önce özeti ve hafızayı okuyun.** Dava verileri ancak dava özeti okunduktan sonra kullanılabilir; bir dava görevi için önce eksiksiz dava hafızası okunur.
- **Yalnızca kendi okuması sayılır.** Dava değerlendirmesi için IRONSTICK her okumayı masaüstü yapay zekânın kendi sohbet kaydına göre kontrol eder; yardımcı ajanların okudukları sayılmaz.
- **Kontrol edebileceğiniz kaynaklar.** Yapay zekâ her belgeyi delil numarasıyla belirtir. Yerleşik sohbette bir numara, ancak bu kayıt kayıtlarınızda mevcutsa ve ne silinmiş ne de gizliyse bağlantıya dönüşür; bir tıklama onu dava kronolojisinde açar. Böyle bir kaydı olmayan bir numara düz metin olarak kalır. Bir masaüstü yapay zekâda numarayı IRONSTICK'te arayın veya yapay zekâdan bu kaydı eksiksiz okumasını isteyin.
- **Mevzuat kütüphaneden.** Kanunlar önce mevzuat kütüphanenizde kontrol edilir; web bir norm için yalnızca kütüphanede isabet yoksa açılır ve yalnızca IRONSTICK sayfa aracıyla açılan sayfalar okunmuş sayılır.
- **Tarihli yazma işlemleri bugünün tarihini gerektirir.** Tarihli içerik yazan araçlar, yapay zekâ son 30 dakika içinde gerçek tarihi ve saati sorgulamamışsa reddedilir. Bridge'de yapay zekânın yanıtları bu tarihle başlar.
- **Uzun bir sohbetten sonra.** Masaüstü yapay zekâ sohbetini sıkıştırdığında okunanlar kendi davası için sayılmaya devam eder; bir davanın Nucleu'su yeniden okunmalıdır. Bir davaya yeniden başlamak için yapay zekâ özeti, Nucleu'yu, dava hafızasını ve Snake'leri bir çalışma dosyasına yükleyebilir.
- **Büyük belgeler.** Büyük araç yanıtları eksiksiz olarak şifreli ara belleğe gider ve bölüm bölüm okunur; okuma kapsamı satır satır izlenir.

## İş akışı 3 — Dava değerlendirmesi

Dava değerlendirmesi, yapay zekânın kıdemli analist olarak bir davaya bakışıdır; IRONSTICK'te kaydedilir ve davanın Yapay zekâ değerlendirmesi sekmesinde gösterilir.
Başarı şansı yalnızca mahkeme dosyasından değerlendirilir: dava açan belgede muhatap alınan mahkemeye veya makama gönderilenlerden ya da oradan gelenlerden.
Açıklayıcı bölümler IRONSTICK dosyasının tamamına ve müvekkilin komşu davalarına dayanır.
Bir dava ilerlediğinde, son değerlendirme eskidiğinde veya bir masaüstü yapay zekânın uygulamayla aynı kriterlere göre yeni bir değerlendirme hazırlaması gerektiğinde kullanın.

![Başarı şansıyla yapay zekâ dava değerlendirmesi](https://www.ironstick.legal/img/screens/5%20case%20assesment%20detail.png)

Dava değerlendirmesi dosyayı okur ve başarı şansını delil durumu, asıl talep ve diğer taleplerle birlikte gösterir.

### Adım 0 — Bağlamı oluşturun

- **Davayı açın veya belirtin.** Davayı IRONSTICK'te açın: Yapay zekâ hangi ekranı ve hangi davayı açtığınızı görebilir. Dava numarasını da belirtebilirsiniz; yapay zekâ davayı numarasından bulur.
- **Dava açan belge dosyada olmalıdır.** Tahmin, yargılamayı başlatan belgeye, örneğin dava dilekçesine, çıkarılmış metniyle kaydedilmiş olarak ihtiyaç duyar. Bu belge aynı müvekkilin başka bir davasında da olabilir; örneğin bu davanın ayrıldığı davada.
- **Mahkeme kayıtlı olmalıdır.** IRONSTICK mahkemeyi veya makamı yalnızca kurumlarınız arasında kayıtlıysa ve adı dava açan belgenin adresinde geçiyorsa tanır. Kayıtlı değilse başarı göstergesi boş kalır.
- **Uygulamada veya bir masaüstü yapay zekâ ile.** Uygulamanın Yapay zekâ değerlendirmesi sekmesinde yalnızca durumu Aktif olan davalar değerlendirilebilir. Bir masaüstü yapay zekâ, durumu ne olursa olsun ve yeni bir şey gelmemiş olsa bile her davayı değerlendirebilir.

### Ne söylersiniz — adım adım

[Dava numarası] davasını aç ve bana son değerlendirmenin durumunu söyle.

1. Yapay zekâ davayı yükler ve kayıtlı değerlendirmeyi tarihiyle birlikte özetler.

[Dava numarası] davası için yeni bir değerlendirme hazırla.

2. Mahkeme dosyası derlenir, belgeler okunur ve değerlendirme sabit aşamalarla yazılır; sonuç Yapay zekâ değerlendirmesi sekmesinde görünür.

Başarı şansı neden daha yüksek değil?

3. Mahkeme dosyasındaki aleyhinize olan noktaları, her biri delil numarasıyla birlikte alırsınız.

Dosyamdaki hangi belgeler yardımcı olur ama henüz mahkemede yok?

4. Yapay zekâ dosyanızın tamamını mahkeme dosyasıyla karşılaştırır ve orada neyin hâlâ eksik olduğunu belirtir.

[#Delil numarası] belgesini dikkate al ve yeniden değerlendir.

5. Yorumunuz iletilir ve değerlendirme bununla yenilenir.

### Arka planda neler olur

- **Önce son değerlendirme.** Değerlendirme okuyucu, davanın en son değerlendirmesini sunar. İlk satırı tarihi, yaşı ve bunun tam bir değerlendirme mi yoksa bir güncelleme mi olduğunu belirtir; yapay zekâya son değerlendirmenin ne zaman hazırlandığını belirtmesi talimatı verilmiştir. Dava verilerini okuyan her araç gibi, yapay zekâ dava özetini ve ardından dava hafızasını okuyana kadar reddedilir.
- **Tek araç, altı aşama.** Bir masaüstü yapay zekâ yeni bir değerlendirmeyi yalnızca özel değerlendirme aracıyla hazırlar. Her çağrı yalnızca güncel aşamayı sunar; bir sonraki aşama ancak IRONSTICK güncel aşamayı kontrol ettikten sonra verilir. Hiçbir aşama atlanamaz. Uygulama aynı anda aynı davayı değerlendiriyorsa araç, uygulama işini bitirene kadar reddeder.
- **Aşama 1 — Dava açan belge.** Yapay zekâ davanın PDF'lerini en eskisinden başlayarak okur ve dava açan belgeyi kesin, belirsiz veya “bulunamadı” olarak bildirir. Kontrol edilenler: Bildirilen her belge bu müvekkile aittir ve bu oturumda eksiksiz okunmuştur; “bulunamadı” ancak davanın her PDF'i eksiksiz okunmuşsa kabul edilir. Kesin olarak bildirilen bir belge sonraki değerlendirmeler için kaydedilir.
- **Kapı: mahkeme dosyası.** IRONSTICK, kurumlarınız arasında kayıtlı bir mahkemeyi veya makamı, dava açan belgenin ilk sayfasının başındaki adreste veya bu sayfadaki muhatap olarak arar. Mahkeme dosyası bu durumda dava açan belgeden ve davanın, karşı tarafı bu mahkeme veya makam olan her gelen ve giden belgesinden oluşur – her iki taraftan, ekler hariç ve gizli veya silinmiş kayıtlar hariç.
- **Aşama 2 — Mahkeme dosyasının durumu ve tahmin.** Yapay zekâ mahkeme dosyasının her belgesini kendisi eksiksiz okumalı ve ardından tahmin bölümünü sunmalıdır: bir yüzde, bandı (açıkça kaybedilmiş, kaybedilmeye yakın, belirsiz, kazanılmaya yakın, açıkça kazanılmış), mahkeme dosyasının durumu, delil durumu, asıl talep, diğer talepler, önceki tahmine göre değişim ve gerekçe. Kontrol edilenler: mahkeme dosyasının her belgesi okunmuştur; yüzde kendi bandı içindedir; her satır mevcuttur; mahkeme dosyasının durumu ve gerekçe yalnızca mahkeme dosyasındaki belgelere atıf yapar; bu satırlar sistem dilinde yazılmıştır; önceki tahmine göre 10 puandan fazla bir değişim, bunu gerekçelendiren yeni belgeleri belirtir.
- **Mahkeme dosyası yok — yapay zekâ size ne bildirir.** Dava açan belge yoksa veya adresinde tanınan bir mahkeme ya da makam yoksa mahkeme dosyası da yoktur. IRONSTICK bu durumda yapay zekâya, devam etmeden önce sohbet dilinde size hemen tahmin hazırlanmayacağını ve başarı göstergesinin boş kalacağını bildirmesi talimatını verir – nedenini ve varsa dava açan belgeyi belirterek. Aşama bu durumda yalnızca davayla geçilir ve tahminin yerini IRONSTICK dosyasının durumu alır.
- **Aşama 3 ve 4 — Okuma.** Aşama 3, davanın en yeni gelen ve giden PDF'lerini ve kayıtlı dava açan belgeyi listeler; aşama 4, müvekkilin bu davaya bağlı diğer davalarının her belgesini listeler. Her biri eksiksiz okunmalıdır; özetler, başlıklar ve arama isabetleri okuma değildir. Ara belleğe giden bir sonuç ancak her bölümü okunmuşsa sayılır.
- **Okuma durumu.** IRONSTICK her dava için bir okuma defteri tutar: yapay zekânın davanın kaç belgesini eksiksiz okuduğu ve özeti ve dava hafızasını okuyup okumadığı. Bunlar sizin gördüğünüz sayılarla aynıdır ve değiştikleri anda yanıtlarla birlikte gelir. Yapay zekâya, okuduklarına ilişkin her ifadenin tek geçerli dayanağının bunlar olduğu ve bir davayı veya belgelerini ancak sayılar bunu gösterdiğinde “eksiksiz okunmuş” olarak nitelendirebileceği söylenmiştir.
- **Yalnızca yapay zekânın kendi okuması sayılır.** IRONSTICK her okumayı bu masaüstü yapay zekânın sohbet kaydına göre kontrol eder; alt ajanların veya paralel ajanların okudukları sayılmaz. Bir bağlantının sohbet kaydının görülemediği yerlerde yanıt bunu belirtir ve yapay zekâya bu kontrolün yapılamadığını size bildirmesi talimatı verilmiştir.
- **Aşama 5 — Olgu özeti.** Yapay zekâ özetini şu başlıklarla sunar: temel olgular, belgelenmiş olgular ve kilit alıntılar, çelişkiler, boşluklar ve kaçırılmış süreler, davalar arası bağlantılar ve muhataplar. Kontrol edilenler: Her başlık mevcut ve doludur; temel olgular belgelere atıf yapar; her komşu dava belirtilmiştir; atıf yapılan her belge eksiksiz okunmuştur.
- **Aşama 6 — Yazma.** Yazma kurallarını yapay zekâ ancak şimdi alır. Bölümler şunlardır: dayanak, IRONSTICK dosyasının durumu, kritik not, güçlü yönler, riskler, davalar arası bağlantılar ve – IRONSTICK başka müvekkillerin ilişkili davalarını bulduysa – son bölüm olarak bu davalar. IRONSTICK dosyasının durumu her belgenin özetine dayanır ve yapay zekâ her önemli belgeyi eksiksiz okur. Kontrol edilenler: bölümler ve sıraları; dayanak dava açan belgeyi belirtir; güçlü yönler ve riskler başlıklarının her birinde en fazla altı madde; atıf yapılan her belge bu müvekkilin dosyalarında veya materyalde mevcuttur, ne gizli ne de silinmiştir ve eksiksiz okunmuştur; davalar arası bölüm her komşu davayı belirtir.
- **Reddetme.** Bir kontrol başarısız olursa yanıt REJECTED ve numaralı bir hata listesiyle başlar. Hiçbir şey ilerlemez ve hiçbir şey kaydedilmez; yapay zekâ tam olarak bu noktaları düzeltir ve yeniden çağırır. Yanlış aşamada sunulan bir bölüm reddedilir. Yapay zekâ zinciri yeni materyalle yeniden aşama 1'den başlatabilir; uygulamanın yeniden başlatılması da zinciri baştan başlatır.
- **Kaydetme.** Aşama 6 kabul edilirse IRONSTICK, aşama 2'deki tahmini – mahkeme dosyası olan yerlerde – dayanaktan sonra ekler ve değerlendirmeyi yeni bir tam değerlendirme olarak kaydeder. Ardından davayı Yapay zekâ değerlendirmesi sekmesinde gösterir ve yapay zekâya yeni değerlendirmenin kaydedildiğini size bildirmesi talimatı verilmiştir.
- **Yapay zekâ değerlendirmesi sekmesinde.** Mahkeme dosyasının durumu, bant, delil durumu, asıl talep ve diğer taleplerle birlikte başarı göstergesinin yanında yer alır. Mahkeme dosyası yoksa IRONSTICK dosyasının durumu ikinci sıraya geçer ve yanındaki gösterge boş kalır.
- **Uygulamada değerlendirme.** Sekmenin kendisinde aktif bir dava için değerlendirme talep edersiniz. Sekme, harici bir yapay zekâ hizmetini kullanmadan önce onay ister; çalışma ardından sekmeyi veya ekranı değiştirseniz bile arka planda devam eder – yeni belgelerin metin tanıma işleminden araştırmaya, yazmaya ve tahmine kadar. Mevcut bir değerlendirme, son tam yeniden değerlendirmeden sonraki bir gün içinde, art arda en fazla üç kez güncellenebilir. Son değerlendirmeden bu yana yeni bir şey gelmemişse yeniden değerlendirme ancak itiraz alanına en az üç kelimelik bir yorum yazdıktan sonra açılır.

## İş akışı 4 — Bir Nucleu oluşturma

Bir Nucleu, bir davanın bağlayıcı yönelimidir: argümantasyonun ana hattı, yol gösteren olgular ve deliller, söylenmesi gerekenler ve asla söylenmemesi gerekenler.
İki düzeyde bulunur — bir kez bütün bir vakıa için, içindeki her davaya geçerli olarak, ve bir kez tek bir dava için — ve yapay zekânın dava için yazdığı her belge ona tabidir.
Oluşturmak için en iyi zaman, bir dava değerlendirmesinin hemen ardından, davanın tamamı hâlâ yapay zekânın çalışma bağlamındayken gelir.
Yapay zekâ taslağı hazırlar, IRONSTICK size her değişikliği gösterir ve onu yeni bir sürüm olarak ancak sizin onayınız kaydeder.

![Nucleu (atom simgesi) ve Snake (yılan simgesi) içeren dava sekmesi](https://www.ironstick.legal/img/screens/5%20case%20tab2.png)

Atom simgeli sekmedeki Nucleu: Yapay zekâ taslak hazırlar ve önerir, siz kabul edersiniz; kabul edilen her değişiklik, sonraki her dilekçeye yön veren yeni bir sürüm olur.

### Adım 0 — Bağlamı belirleyin

- **Zamanı seçin.** Nucleu'yu bir dava değerlendirmesinin hemen ardından isteyin. Değerlendirme sırasında yapay zekâ özeti, tam metinleri, dava hafızasını ve mevcut bir Nucleu ile mevcut bir Snake'i okur; bunların hepsi hâlâ çalışma bağlamındayken yönelim, yalnızca birkaç belgeden değil davanın tamamından damıtılabilir.
- **Düzeyi seçin.** Bir *Vakıa Nucleu'su* bir vakıaya (dava listesindeki bir dava grubuna) aittir ve içindeki her dava için geçerlidir. Bir *Dava Nucleu'su* yalnızca bir dava için geçerlidir ve yönelimi bu dava için ayarlar. Bir davaya kendi Nucleu'su ve ait olduğu her vakıanın Nucleu'su yön verir; bu nedenle Dava Nucleu'su vakıanın çizgisiyle çelişmemelidir.
- **Onu nerede bulursunuz.** Dava ekranında atom simgeli sekme (*Dava Nucleu'su*) üstte düzenlenebilir Dava Nucleu'sunu ve altında, salt okunur olarak, davanın ait olduğu her vakıanın Nucleu'sunu içerir. Dava listesinde bir vakıanın başlık çubuğundaki atom düğmesi o vakıanın Nucleu'sunu açar. Her Nucleu kendi tanımlayıcısını taşır, örneğin *#KI00041 · v3*; bir tıklama onu kopyalar, böylece sohbete yapıştırabilirsiniz.
- **İçine ne girer.** Yönelim ve başka hiçbir şey: yol gösteren tez, davanın daha büyük uyuşmazlıktaki konumu, taraflar, karşı tarafın tezleri ve bunlara verilecek yanıtlar, gelecekteki delillerin nasıl değerlendirileceği ve aşılmaması gereken çizgiler. Olgular belgelenmiş geçmiş olarak girer; davanın güncel durumu her seferinde özetten okunur.
- **İçine ne girmez.** Hatırlatmalar, notlar, yapılacaklar, oturum geçmişi, açık sorular ve çalışma düşünceleri dava hafızasına aittir. Karşı tarafın dosyayla çelişen beyanları Snake'e aittir.
- **Kapsam.** Nucleu başına en fazla 20.000 karakter. Metnin yanındaki sayaç uzunluğu gösterir ve sınırın üzerinde kırmızıya döner. Yönelim daha fazla yer gerektiriyorsa ortak çizgiyi Vakıa Nucleu'sunda tutun ve bir davaya özgü olanı aynı sınırla o davanın Nucleu'suna koyun.
- **Kendiniz yazın.** Bir Nucleu'yu doğrudan sekmede veya vakıa penceresinde yazabilir ya da düzeltebilir ve *Kaydet*'e basabilirsiniz; her kayıt yeni bir sürümdür.

### Ne söylersiniz — adım adım

Bu değerlendirmeden [dosya numarası] davası için Nucleu'yu oluştur.

1. Yapay zekâ yönelimi az önce okuduğu davadan damıtır ve önerisini *Dava Nucleu'su* sekmesinde açar; orada onu kabul eder veya reddedersiniz.

[Vakıa] vakıası için bir Nucleu oluştur: içindeki her dava için geçerli olan ana hat.

2. Yapay zekâ Vakıa Nucleu'sunun taslağını hazırlar ve onu vakıa penceresinde gösterir; bir kez kabul edildiğinde vakıanın her davası için geçerli olur ve her birinde salt okunur olarak görünür.

[Dosya numarası] davasının her Nucleu'su ne uzunlukta ve hangi kısım Vakıa Nucleu'suna taşınabilir?

3. Yapay zekâ davanın Dava Nucleu'sunu ve her Vakıa Nucleu'sunu okur ve her birini 20.000 karakter sınırına göre ölçer.

[Dosya numarası] davasının Nucleu'sunu güncelle: Artık [nokta] ile argüman yapmıyoruz.

4. Yapay zekâ sohbette neyi neden değiştirmek istediğini açıklar ve ardından yalnızca değiştirilen bölümleri önerir; bunları kırmızı kalın yazıyla görürsünüz ve kabul edilen bir değişiklik bir sonraki sürüm olur.

Bana [dosya numarası] davasının güncel Nucleu'sunu, her vakıanın Nucleu'suyla birlikte oku.

5. Yapay zekâ setin tamamını güncel sürümleriyle, her birini tanımlayıcısıyla birlikte yükler, örneğin #KI00041 · v3.

Bu taslak Nucleu ile çelişiyor mu?

6. Yapay zekâ taslağı, dava için geçerli her Nucleu ile madde madde karşılaştırır ve her sapmayı belirtir; bir dilekçede bu karşılaştırma denetim zincirinin son turudur.

### Arka planda neler olur

- **Onayınızla tek bir yazma yolu.** Yapay zekâ bir Nucleu'yu özel bir araç üzerinden önerir: bir Dava Nucleu'sunun ilk sürümünü dava üzerinden, bir Vakıa Nucleu'sunun ilk sürümünü vakıa üzerinden (vakıalar listesinden alınarak), sonraki her değişikliği ise Nucleu numarası üzerinden. Metindeki değişiklikler hedefli değiştirmeler olarak girer; yapay zekâya Nucleu'yu asla baştan sona yeniden yazmaması ve önermeden önce sohbette neyi neden değiştirmek istediğini açıklaması talimatı verilmiştir.
- **İnceleme penceresi.** Bir Dava Nucleu'su için IRONSTICK davayı *Dava Nucleu'su* sekmesinde açar; bir Vakıa Nucleu'su için pencere güncel ekranın üzerinde görünür. Tüm metni, her değişikliği kırmızı kalın yazıyla, silmeleri üstü çizili olarak ve *Reddet* ile *Kabul et* düğmeleriyle gösterir. Aynı anda yalnızca bir Nucleu incelemesi açıktır. Yaklaşık bir dakikadan uzun sürerseniz yapay zekâya incelemenin hâlâ açık olduğu bildirilir ve onu yeniden göndermez; sonradan vereceğiniz onay sürümü yine de kaydeder.
- **Boyut kontrolü.** 20.000 karakteri aşan bir öneri size ulaşmadan reddedilir; yol gösteren çekirdekle sınırlı kalma ve davaya özgü yönelimi Dava Nucleu'suna, ortak yönelimi ise Vakıa Nucleu'suna koyma talimatıyla birlikte.
- **Güncel tarih.** Her tarihli yazma işlemi gibi bir Nucleu önerisi de son 30 dakika içinde sorgulanmış güncel tarihi gerektirir.
- **Sürümler, asla üzerine yazılmaz.** Kabul edilen her öneri ve sekmedeki her kayıt, bir sonraki sürüm numarasıyla yeni bir satır olarak kaydedilir; *#KIxxxxx* numarası tüm sürümlerde aynı kalır ve en yüksek sürüm güncel olandır. Değişmemiş metin yeni bir sürüm oluşturmaz. Bir vakıa silinirse Nucleu'su gizlenir ve sürümleri korunur.
- **Yapay zekâ onu nasıl okur.** Dava ile yapılan bir çağrı setin tamamını sunar: Dava Nucleu'sunu ve davanın her vakıasının Nucleu'sunu, her birini *#KIxxxxx · vN* başlık satırıyla, eksiksiz olarak; ayrıca henüz Nucleu'su olmayan düzeyleri belirtir. Nucleu ayrıca dava özetinin, dava brifinginin ve yeniden başlama paketinin en üstünde yer alır. Bir envanter listesi her Nucleu'yu tam metinler olmadan gösterir; yapay zekâ talimatları araç setini açan, o anda açık olan davanın Nucleu envanterini görür.
- **Her değişiklikten sonra yeniden okuma.** IRONSTICK, yapay zekânın her Nucleu'nun hangi sürümünü okuduğunu kaydeder. Yeni bir sürüm veya masaüstü yapay zekânın sohbeti sıkıştırması önceki okumayı geçersiz kılar.
- **Nerede etkili olur.** Nucleu, [İş akışı 6 — Bir dilekçe yazma](#w6) üzerinden her dilekçeye yön verir. Orada Nucleu kapısı, uygulanabilir her Nucleu — Dava Nucleu'su ve her Vakıa Nucleu'su — güncel sürümüyle okunana kadar davanın bir belgesinin yazılmasını, denetlenmesini ve teslimini reddeder; aynı şekilde bağlayıcı belge formatı da ancak davanın her Nucleu'su okunduktan sonra verilir. Denetim zincirinin sonunda Nucleu turu yer alır: Belge Nucleu ile madde madde karşılaştırılır, her sapma düzeltilir veya sonuçlandırılır, bir çelişki asla göz ardı edilemez ve giderilemeyen bir çelişki çatışma olarak işaretlenir. Bir çatışma, siz ayrıntılı olarak uyarılıp belgenin düzeltilmesine mi yoksa sapmanın kalmasına mı karar verene kadar bu belge üzerindeki çalışmayı durdurur.
- **Dava değerlendirmesinde.** Bir değerlendirme çalışırken davanın mevcut her Nucleu'su bağlayıcı yönelim olarak bağlamının bir parçasıdır ve tanımlayıcısıyla birlikte alıntılanır.

## İş akışı 5 — Snake'i oluşturma

Snake, bir davada karşı tarafın dosyadaki delillerle çelişen beyanlarının dahili çalışma sicilidir. Her kayıt beyanın yerini — belge, tarih, dava ve sayfa — belirler ve onu çürüten her belgeyi listeler.
Onu iki yoldan oluşturursunuz: bir veya birkaç davada ya da belirttiğiniz belgelerde hedefli araştırmayla; veya herhangi bir sohbetin ortasında, karşı tarafın dosyayla bir çelişkisi ortaya çıktığı anda.
IRONSTICK her satırı belgelerinize göre kontrol eder, her sürümü siz onaylarsınız ve sonraki her dilekçede Snake kayıtları karşı tarafa karşı argüman olarak sunulur.

![Dilekçeye giden yolda Nucleu ve Snake](https://www.ironstick.legal/img/76_nucleu_snake_path.png)

Snake, karşı tarafın dosyayla çelişkilerini kayda geçirir: her satır belgelere göre kontrol edilir, her sürüm için sizin onayınız gerekir.

### Adım 0 — Bağlamı belirleyin

- **Hedefli araştırma.** Yapay zekânın, belgelerin çürüttüğü karşı taraf beyanlarını araması gereken davaları veya belgeleri belirtin. İyi bir zaman, bir dava değerlendirmesinin veya davanın eksiksiz okunmasının hemen ardından, dosyalar hâlâ yapay zekânın çalışma bağlamındayken gelir. Ağı geniş atmasını isteyin; Snake yalnızca belgelerin kanıtladıklarını içerir.
- **Herhangi bir sohbet sırasında.** Başka bir şey üzerinde çalışırken karşı tarafın dosyayla bir çelişkisi ortaya çıkarsa, henüz orada değilse yapay zekâya onu Snake'e eklemesi talimatını verin. Yapay zekâ önce güncel Snake'i kontrol eder ve noktayı iki kez kaydetmek yerine mevcut bir kaydı genişletir.
- **Dava başına bir Snake.** Bir Snake tam olarak bir davaya aittir. Bir vakıanın kendi Snake'i yoktur; vakıa, tüm davalarının Snake'lerini gösterir.
- **Onu nerede bulursunuz.** Dava ekranında Nucleu sekmesinin sağındaki yılan simgeli sekme (*Dava Snake'i*), bu davanın Snake'ini tanımlayıcısıyla, örneğin *#SN00004 · v2*, ve bir karakter sayacıyla birlikte içerir. Dava listesinde bir vakıanın başlık çubuğundaki Snake düğmesi *Vakıanın Snake'leri*ni açar: tüm davalarının Snake'leri liste sırasıyla; bir davaya tıklamak onu *Dava Snake'i* sekmesinde açar.
- **Kapsam.** Dava Snake'i başına en fazla 20.000 karakter. Sayaç sınırın üzerinde kırmızıya döner. Her kaydı yere, kısa bir açıklamaya ve atıf satırlarına sınırlayın.
- **İçine ne girer.** Yalnızca karşı tarafın dosyadaki delillerle çelişen beyanları. Tahminler, strateji ve hatırlatmalar girmez; hatırlatmalar dava hafızasına gider ve karşı tarafın çelişkileri yalnızca Snake'e girer, asla hafızaya değil.

**Kayıt formatı.** Kayıtlar boş bir satırla ayrılır. İlk satır beyanın yeridir; ardından açıklama; ardından her bağlantılı belge, bir okla başlayarak kendi satırında:

#0004417 · 12.10.2026 · CaseID 19 · s. 2 üst
İstinafa cevap dilekçesi, karşı taraf B: Mahkemeler tesislerin mülkiyeti hakkında zaten kesin olarak karar vermiş. Dosya ise aksini gösteriyor: Her iki karar da mülkiyeti açıkça esas yargılamaya bırakıyor ve karşı taraf B önceki duruşmada aynı şeyi söylemişti.
→ #0003304 · 18.07.2026 · CaseID 19 · s. 5 orta
→ #0000586 · 25.04.2026 · CaseID 8 · s. 9 üst
→ #0001127 · 24.06.2026 · CaseID 8 · s. 15 alt

Her atıf satırı şöyledir: yedi haneli delil numarası · IRONSTICK'in kaydettiği şekliyle belge tarihi (GG.AA.YYYY) · bu belgenin CaseID'si · sayfa ve sayfadaki konum (üst, orta veya alt; sistem dillerinin her birinde) ya da sayfası olmayan deliller için bir çizgi. Bir çelişki birden fazla belgeye yayılıyorsa her biri kendi atıf satırını alır: beyan, karşı beyan ve aradaki her delil. Kayıtları sekmede kendiniz de yazabilir veya düzeltebilir ve *Kaydet*'e basabilirsiniz; her kayıt yeni bir sürümdür.

### Ne söylersiniz — adım adım

[Dosya numarası] davasının Snake'ini dosyanın tamamından oluştur.

1. Yapay zekâ davayı ve karşı tarafı çürüten her belgeyi okur ve ardından Snake'i *Dava Snake'i* sekmesinde önerir; her satır belgelerinize göre kontrol edilmiştir.

[Delil numaraları] belgelerini dosyanın çeliştiği karşı taraf beyanları için tara ve bunları [dosya numarası] davasının Snake'ine ekle.

2. Yapay zekâ tam olarak bu belgeleri eksiksiz okur ve yalnızca belgelerinizin çürüttüğü beyanları, her birini çürüten belgelerle birlikte kaydeder.

[Vakıa] vakıasındaki tüm davaların Snake'lerini oluştur. Ağı geniş at.

3. Yapay zekâ dava dava, her dava için bir Snake olmak üzere çalışır; vakıa penceresi ardından hepsini dava listesinin sırasıyla gösterir.

Bu çelişki [dosya numarası] davasının Snake'inde zaten var mı?

4. Yapay zekâ güncel Snake'i okur ve noktanın zaten kayıtlı olup olmadığını ve hangi kayıtta olduğunu size söyler.

Karşı tarafın bu çelişkisini, henüz orada değilse Snake'e ekle.

5. Yapay zekâ güncel Snake'i okur, mevcut kaydı genişletir veya her çürüten belgeyi ayrı bir satır olarak içeren yeni bir kayıt yazar ve değişikliği kabulünüz için size gösterir.

[Müvekkil] müvekkili için hangi Snake'lerimiz var?

6. Yapay zekâ müvekkilin davalarına ait her Snake'i tanımlayıcı, sürüm ve kayıt sayısıyla listeler.

### Arka planda neler olur

- **Önce okuma.** Davanın zaten bir Snake'i varsa bir değişiklik ancak yapay zekâ onun güncel sürümünü bu oturumda okuduktan sonra ve masaüstü yapay zekâ sohbetini sıkıştırdıktan sonra yeniden okuduğunda kabul edilir. Snake'i olmayan bir dava ilk kayıtlarını doğrudan kabul eder. Yapay zekâya, noktanın zaten kayıtlı olmadığını kontrol etmesi ve iki kez kaydetmek yerine mevcut kaydı genişletmesi talimatı verilmiştir.
- **Yalnızca okunandan yaz.** Yapay zekâ davada karşı tarafın veya bir resmî makamın belgesini açtıysa, bu belge eksiksiz okunana kadar Snake'in değiştirilmesi reddedilir.
- **Her seferinde metnin tamamı.** Yapay zekâ, eki dahil Snake'in tamamını önerir; kısmi yazma işlemleri (ekleme veya hedefli değiştirmeler) reddedilir, böylece her öneri sicilin tamamı göz önünde tutularak yapılır. 20.000 karakteri aşan bir öneri size ulaşmadan reddedilir.
- **Her satır belgelere göre kontrol edilir.** Öneri gösterilmeden önce IRONSTICK her kaydı kontrol eder: ilk satırın istenen biçimde olması, bir açıklama, en az bir atıf satırı, atıf satırlarından sonra açıklama olmaması; ve her atıf satırı için delilin mevcut olması, belirtilen CaseID'ye ait olması, tam olarak bu belge tarihini taşıması, davayla aynı müvekkile ait olması ve sayfanın kayıtlı PDF'in içinde bulunması. Herhangi bir hatada hiçbir şey önerilmez; yapay zekâ hata listesini kayıt kayıt alır ve düzeltir.
- **İnceleme penceresi.** IRONSTICK davayı *Dava Snake'i* sekmesinde açar ve tüm metni her değişiklik kırmızı kalın yazıyla, *Reddet* ve *Kabul et* düğmeleriyle birlikte gösterir. Yaklaşık bir dakikadan uzun sürerseniz yapay zekâya incelemenin hâlâ açık olduğu bildirilir ve onu yeniden göndermez; sonradan vereceğiniz onay sürümü yine de kaydeder.
- **Sürümler, asla üzerine yazılmaz.** Kabul edilen her öneri ve sekmedeki her kayıt, aynı *#SNxxxxx* numarası altında yeni bir sürüm olur; değişmemiş metin yeni bir sürüm oluşturmaz.
- **Yapay zekâ onu nasıl okur.** Yapay zekâ bir davanın Snake'ini, bir vakıanın tüm davalarının Snake'lerini dava listesinin sırasıyla, bir müvekkilin tüm davalarının Snake'lerini veya bir Snake'i numarası üzerinden okuyabilir — her blok, davasıyla birlikte *#SNxxxxx · vN* başlık satırını taşır. Bir envanter listesi her Snake'i kayıt sayısıyla, tam metinler olmadan gösterir. Bir davanın yeniden başlama paketi ve dava değerlendirmesi de Snake'i içerir.
- **Nerede etkili olur.** Snake, [İş akışı 6 — Bir dilekçe yazma](#w6) içindeki Snake kapısı üzerinden etkili olur. Dava için Snake'ler varsa — kendi Snake'i veya vakıalarındaki diğer davaların Snake'leri — yapay zekâ size sabit soruyu sorar: *Snake kapısını istiyor musunuz?*; meğer ki siz zaten *Snake kapısıyla* demiş veya bu turdan kendi sözlerinizle vazgeçmiş olasınız. Evet demenizin ardından, son Nucleu turundan önce, denetim zincirinin Snake turu gelir: Yapay zekâ davanın Snake'ini ve vakıalarındaki diğer davaların Snake'lerini eksiksiz okur, taslağı yeniden okur ve her Snake kaydını bir sonuç dosyasında eklendi (belgedeki yeriyle), reddedildi veya ilgisiz olarak, her birini gerekçesiyle sonuçlandırır. Bir kayıt, kendisi veya ifadesi müvekkilin aleyhine çevrilebilecekse reddedilir. *Zaten kullanıldı* veya *mahkeme zaten biliyor* gerekçe olarak kabul edilmez: Kayıtlar, uygun düştükleri her belgede tekrarlanması gereken argümanlardır. Tur ancak her kayıt sonuçlandırılmışsa, Snake'ler ve taslak görevden sonra okunmuşsa ve taslak bir kaydın eklendiği her yerde gerçekten değiştirilmişse kabul edilir.

## İş akışı 6 — Bir dilekçe yazma

Bu iş akışı sizi sade sözcüklerle yapılmış bir istekten kelime işlemcide sunulmaya hazır bir taslağa götürür: bir dilekçe, bir mahkemeye veya makama yönelik bir başvuru ya da bir mektup.
Yapay zekâ yazmadan önce davayı okur, belgeyi şifreli ara belleğinde oluşturur, her olguyu, her alıntıyı, her normu ve her tarafı belgelerinize göre kontrol ettirir, sabit bir denetim zincirinden geçer ve her karar noktasında size sorar.
Büronuzdan yazılı bir şey çıkacağı her durumda kullanın. IRONSTICK'ten çıkan şey her zaman sizin kendiniz inceleyip imzalayıp gönderdiğiniz bir taslaktır.

![Bitmiş dilekçeye kadar denetimlerle rehberli yol](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)

Görevinizden kelime işlemcideki taslağa: Yapay zekâ okur, taslak hazırlar ve doğrular, onay işaretine kadar denetimler ona yol gösterir; her adımda siz karar verirsiniz.

### Adım 0 — Bağlamı belirleyin

- **Davayı belirtin.** Yerleşik sohbet için davayı açın ve *Metin yaz* › *Yapay zekâ yardımıyla* seçeneğini seçin: Sohbet bu davayla açılır; bir kronoloji kaydından açıldığında belge zaten belirlenmiştir. Bir masaüstü yapay zekâda ilk mesajınızda dosya numarasını belirtin — yapay zekâ IRONSTICK'e hangi ekranı ve hangi davayı açtığınızı da sorabilir.
- **Davanın ülkesi gerekir.** Belgenin hukuku, dili ve tarihi davada belirlenen yargı alanından gelir. Yargı alanı belirlenmemişse belge formatı, önce onu belirleme çağrısıyla birlikte verilmez.
- **Masaüstü yapay zekânızın en güçlü modelini kullanın.** Taslak hazırlama için yapay zekâya, başlamadan önce en güçlü model kademesini, teslimden sonra ise yeniden daha hafif bir kademeyi önermesi talimatı verilmiştir. Masaüstü yapay zekâ uygulaması yalnızca sizin elinizle model değiştirir; yerleşik sohbet kendiliğinden değiştirir.
- **İlk mesajınızı derli toplu yazın.** Dava, belgenin türü, neye ulaşmak istediğiniz, dayandığı delil numaraları, üslup ve uzunluk ile hitabı iyi işlemiş daha önceki bir dilekçe. Bir dilekçeyi belgeler temellendirir; sıfatlar temellendirmez.
- **Denetim turlarından ne istediğinizi önceden söyleyin.** Kendi mesajınızdaki *Snake kapısıyla* veya *Snake ve Nucleu olmadan* gibi sözcükler IRONSTICK tarafından tanınır; yapay zekâ bu belge için artık bu turları sormaz. Yapıştırılan metin sizin sözleriniz sayılmaz.

[Dosya numarası] davasında #0004127 numaralı cevap dilekçesine karşı cevabı hazırla, #0003310 ve #0003318'e dayandır, kısa ve nesnel olsun, 12 Mayıs tarihli istinaf başvurusu gibi hitap edilsin, Snake kapısıyla.

### Ne söylersiniz — adım adım

[Dosya numarası] davasında [#delil numarası] belgesine bir cevap yaz. Amaç: [amaç].

1. Yapay zekâ davayı, vakıanın ve davanın Nucleu'sunu ve yanıt verdiğiniz belgeyi okur, ardından ara belleğinde taslak hazırlar.

Delil olarak [#delil numaraları] belgelerini kullan. Üslup: [nesnel / kararlı].

2. Talimatlarınız taslağa yansır; atıf yapılan her belge eksiksiz okunur.

Düzeltme yok — devam et.

3. Denetim zinciri çalışır: yeniden okunur, önceki dilekçelerinizle karşılaştırılır, karşı taraf gözüyle saldırıya tabi tutulur, Snake turu, Nucleu denetimi.

[Numara] numaralı noktayı değiştir: [düzeltmeniz].

4. Taslak düzeltilir ve devam edilmeden önce yeniden denetlenir.

Teslim et.

5. Belge indirme penceresinde görünür; onu kelime işlemciye aktarın, imzalayın ve kendiniz gönderin.

### Arka planda neler olur

- **Yargı alanı ve dil.** Yapay zekâ hukuki çalışmaya başlamadan önce yargı alanını davadan belirler. Sizinle IRONSTICK sistem dilinde konuşur; belge, davanın ülkesinin resmî dilinde yazılır ve format dosya numarasını ve bugünün tarihini taşır.
- **Yazmadan önce davayı okuma.** Bir davaya yazan araçlar, yapay zekâ dava özetini okuyana kadar reddedilir; bir dilekçe ayrıca davanın en yeni belgelerinin eksiksiz okunmuş olmasını gerektirir. Ret mesajı henüz okunmamış olanları listeler.
- **Format için başlangıç kapısı.** Bağlayıcı belge formatı (belgenin türüne göre: dilekçe veya mektup, avukatla temsil veya kendi kendini temsil) ancak yapay zekâ eksiksiz özeti, müvekkilin bu davadaki her giden belgesini eksiksiz, dilekçenin yanıt verdiği belgeyi eksiksiz, dava hafızasını ve davanın her Nucleu'sunu okuduktan sonra verilir. Bir mahkemeye hitap eden her şey bir dilekçedir, asla bir mektup değildir. Bir dilekçe için format ayrıca dosyalarınızdan mahkemenin bir profilini de getirir.
- **Önce asıl talepleriniz.** Dilekçe bir belgeye yanıt veriyorsa yapay zekâ önce sohbette müvekkilin davadaki asıl talep dilekçesinin her talebini delil numarasıyla alıntılayarak listelemeli, size hâlâ geçerli olup olmadığını sormalı ve sırasını bitirmelidir. Format ancak yanıtınızdan sonra verilir. Belgenin kendisi yargılamayı başlatıyorsa yapay zekâ bunu tek bir cümleyle söyler ve hiçbir şey sormaz.
- **Önce Nucleu.** Yazma, denetleme ve teslim, davanın her güncel Nucleu'su — Dava Nucleu'su ve davanın ait olduğu her vakıanın Nucleu'su — güncel sürümüyle okunana kadar reddedilir; her yeni sürümden sonra ve masaüstü yapay zekâ sohbetini sıkıştırdıktan sonra yeniden.
- **Yalnızca okunandan yaz.** Yapay zekâ davada karşı tarafın veya bir resmî makamın belgesini açtıysa, bu belge eksiksiz okunana kadar o davanın bir belgesi üzerindeki çalışma reddedilir. Yapay zekânın eksiksiz okumadığı belgelere atıf yapan bir taslak, bu belgeler okunana kadar her değişikliğe karşı kilitlidir; atıf yapılan bölümün silinmesi kilidi kaldırmaz.
- **Deterministik dilekçe denetimi.** Dosyanın güncel durumu üzerinde, yapay zekâ olmadan çalışır ve şunları kontrol eder: her delil atfını ve damgayı ve atıf yapılan veya eklenen her belgenin bu belge için okunmuş olmasını; her kanun atfını doğrulanmış mevzuat kütüphanesine göre; her kelimesi kelimesine alıntıyı davanın tam metinlerine, alınmış belgelere ve kütüphaneye göre; dosya numaralarını; kaydedilmiş biçime tam olarak uyması gereken tutarları; müvekkil, kişi ve kurum adlarını, aksan işaretleri dahil harfi harfine; IBAN'ları ve ülkeye özgü bir kontrol olarak Romanya kişisel kimlik numaralarını (CNP) sağlama toplamıyla ve belgelere göre; adı geçen her kişinin veya şirketin bağlantılarıyla birlikte okunmuş olmasını; ve ek listesi dahil bağlayıcı formatı. Her bulgu DOĞRULANDI, DOĞRULANMADI veya ÇELİŞKİLİ olarak işaretlenir.
- **Yazmadan önce okuyun, sonra değil.** Taslağın son değişikliğinden sonra yapılan bir okuma bu doğrulama için sayılmaz: Yapay zekâ önce okumalı, ardından bunu metne işlemeli ve sonra yeniden doğrulamalıdır.
- **Alıntılar.** Hiçbir kaynakta bulunamayan bir alıntı teslimi engeller; onu yeniden ifade etmek veya tırnak işaretlerini kaldırmak engeli sürdürür ve tek çözüm kaynağın tam ifadesidir. Metinden kaybolan bir alıntı teslim sırasında size bildirilir.
- **Ekler.** Her ek kaydı delil atfını, IRONSTICK tarafından alınan geliş damgasını ve sayfa yer tutucusunu taşımalıdır. Kayıtlı dosyası ve medyası olmayan bir ek inceleme için işaretlenir. Giden bir belge veya karşı tarafın bir yazısı olan bir ek, yazı yalnızca içindeki bir sayfa nedeniyle eklendiyse onun yerine orijinal belgeyi ekleme talimatıyla işaretlenir; bu işaret bir engel değil, bir inceleme notudur.
- **Açık bulgular yapay zekâya geri döner.** Denetimin her bulgusu giderilmesi için yapay zekâya geri verilir ve denetim yeni durum üzerinde yeniden çalışır. Denetimler belge başına, sürüm numaralarından bağımsız olarak sayılır: Beşinci denetimden sonra hâlâ açık bulgular varsa IRONSTICK bir sistem mesajıyla kararı size devreder ve yapay zekâ, nasıl devam edileceğine karar vermeniz için açık noktaları size sunar.
- **Önce özet.** İlk onaydan sonra denetim zinciri sizin için belgenin bir özetiyle başlar — muhatap ve yargılama, talepler, yapı, delilleriyle birlikte temel olgular, atıf yapılan kanunlar. Yapay zekâ yanıtınızı bekler; düzeltmeler zincir devam etmeden önce işlenir.
- **Denetim zinciri.** Her adım dilekçe denetimine geri bildirilir ve bir sonraki görev gelmeden önce kontrol edilir: dosyanın tamamını yeniden okumak; müvekkilin kendi önceki beyanlarıyla çelişmemesi için müvekkilin atıf yapılan belgelere ilişkin önceki dilekçeleri; yanıtlanan belgenin her bölümünü kapsayan bir cevap tablosu; ayrı bir dosyaya yazılan ve taslakta madde madde sonuçlandırılan, karşı taraf gözüyle bir saldırı; aynı şekilde sonuçlandırılan bir değerlendirme. Bir dosya ancak her satırı görevden bu yana okunmuşsa okunmuş sayılır; hiçbir bulgunun benimsenmediği ve bulguların çoğunun zaten giderilmiş olarak göz ardı edildiği bir tur reddedilir.
- **Sabit sorular.** Ardından en fazla iki sabit soru gelir — dava bir Nucleu'ya sahipse Nucleu sorusu, dava için Snake'ler varsa Snake sorusu. Yapay zekâ bunları kelimesi kelimesine, birbiri ardına sorar ve yalnızca sizin kendi mesajınızdan gelen bir evet veya hayırı kabul eder. Önceki sürümü olmayan yeni bir dilekçe Nucleu turunu sorusuz alır. Yanıtınız belgenin tüm sürümleri için hatırlanır.
- **Snake turu.** Evet demenizin ardından yapay zekâ davanın ve vakıalarının Snake'lerini okur ve her Snake kaydı için eklendi mi, reddedildi mi yoksa ilgisiz mi olduğunu, her birini gerekçesiyle kaydeder; bir kayıt müvekkilin aleyhine çevrilebilecekse reddedilir.
- **Nucleu turu.** Belge Nucleu ile madde madde karşılaştırılır. Bir çelişki göz ardı edilemez: Ya düzeltilir ya da çatışma olarak işaretlenir. Bir çatışma bu belge üzerindeki çalışmayı durdurur; yapay zekâ sizi ayrıntılı olarak uyarmalı ve ancak belgeyi düzeltme veya sapmayı bırakma kararınızdan sonra devam etmelidir.
- **Düzeltmeleriniz metinde kalır.** Kendi mesajlarınız belge başına kaydedilir. Sizin tarafınızdan yapılan, işlenen ve daha sonra yeniden kaldırılan bir düzeltme, zinciri ve teslimi engeller. Kendi sözlerinize dayanan bir bölüm, yapay zekâ size sormadan silinemez.
- **Bir değişiklik zinciri yeniden başlatır.** Her düzenleme son denetimi geçersiz kılar. Tamamlanmış zincirden sonra yapılan bir değişiklik zincirin tamamını yeniden başlatır.
- **Tek bir teslim sorusu.** Sonunda yapay zekâ, zincirin neyi değiştirdiğini en fazla üç satırda belirtir ve teslim edip edemeyeceğini bir kez sorar. Tam olarak dosyanın bu durumu için yeni ve olumlu bir denetim olmadan ve sizin evetiniz olmadan teslim reddedilir.
- **Bekleyen mahkeme kararları.** Değerlendirilmeyi bekleyen mahkeme kararları varsa yapay zekâ, sonuçları belgeye yansısın diye bunların şimdi mi yoksa daha sonra mı değerlendirileceğini size sorar.
- **Kelime işlemciye teslim.** Dosya yalnızca IRONSTICK indirme iletişim kutusu üzerinden çıkar: kaydedin veya Markdown'ı doğrudan kelime işlemciye aktarın. Orada düzenler, antetli kâğıdı eklersiniz, sayfaları hariç tutar, imzanızı koyar ve bir PDF veya DOCX dışa aktarırsınız. Değişmemiş, zaten teslim edilmiş bir dosya yalnızca istek üzerine, yeni bir sürüm numarası olmadan tekrarlanır.
- **Teslimden sonra.** Yapay zekâ belgenin bitip bitmediğini veya düzeltme gerektirip gerektirmediğini sorar. Siz yanıt verene kadar yapay zekâ yalnızca okuyabilir. Düzeltmeniz teslim edilen sürüme eklenir, bu sürüm böylece geçersiz olur ve düzeltme için bir sonraki sürüm oluşturulur. Kelime işlemcide yazdırma veya PDF'i e-posta kontrolüne gönderme belgeyi tamamlar.
- **E-posta paketi.** Bir mahkeme e-postası yalnızca bitmiş bir PDF için hazırlanır: İmzalı PDF'i sohbete sürüklersiniz, yapay zekâ onu son sürüme göre kontrol eder ve yalnızca eşleşen bir PDF e-posta formatını açar — konu, gönderen, tanımlayıcı ve dosya numarasıyla metin, paket listesi ve alıcı, kopyalama alanları olarak. Çok büyük gönderimler, e-posta gönderim ekranında her biri kendi eşlik e-postasıyla yaklaşık on megabaytlık parçalara bölünür. IRONSTICK hiçbir şey göndermez; siz kendi e-posta programınızdan gönderirsiniz.

## İş akışı 7 — OSINT: bir kişiyi veya şirketi araştırma

Bir tarafın kim olduğunu öğrenmek istediğinizde bu iş akışını kullanın: bir karşı taraf, bir tanık, bir adresin arkasındaki şirket, bir işletmenin etrafındaki kişiler.
Yapay zekâ kendi belgeleriniz ve açık internet üzerinde sabit bir araştırma prosedürü yürütür, kaynakları açar ve okur ve doğrulayabildiklerini öneri olarak veri tutarlılığı izleyicisine girer.
Siz orada kabul edene kadar hiçbir şey kayıtlarınızın parçası olmaz. Araştırma bir dava gerektirmez: Bir taraf tek başına araştırılabilir.

![Bridge üzerinden kişi ve şirket araştırması](https://www.ironstick.legal/img/60_mcp_network.png)

Taraflar birer birer: ara, oku, doğrula, öner — ve kararı veri tutarlılığı izleyicisinde siz verirsiniz.

### Adım 0 — Bağlamı belirleyin

- **Tarafa ilişkin en önemli bilgileri hazır tutun.** OSINT kontrolü tam adı, ülkeyi ve bunun gerçek kişi mi yoksa şirket mi olduğunu; biliniyorsa şehri ve bölgeyi gerektirir. Ülke arama terimlerinin dilini belirler. Şehir, bölge ve ülke ayrıca yapay zekânın daha sonra önereceği her yeni taraf için zorunludur.
- **Dava gerekmez.** OSINT kontrolü dosya numarası almaz. Tarafı ayrıca bir davayla ilişkilendirmek istiyorsanız bunu söyleyin — ilişkilendirme bu durumda ayrı bir öneridir.
- **Mevcut bir kayıt yardımcı olur.** Taraf zaten IRONSTICK'te kayıtlıysa onu veya numarasını (örneğin @E0001234) belirtin. Yapay zekâ önce kaydı okur; OSINT kontrolü aynı ada sahip mevcut kayıtları ayrıca kendisi de listeler.
- **Birden fazla ad mı?** Bir listeyi (bir arkadaş listesi, bir katılımcı listesi, bir künye) belge olarak kaydettiyseniz yapay zekâdan listeyi önce IRONSTICK'teki tüm kişilerle eşleştirmesini ve ardından yalnızca önemli olan adları araştırmasını isteyin.
- **Yapay zekâ sohbeti olmadan.** Bir kişinin kişi analizinde *Web araştırması* düğmesi rehberli bir kendi araştırmanızı açar: aday bağlantılar, sayfa özetleri, analiz alanlarının önizlemesi ve kişinin analizine kaydetme.

### Ne söylersiniz — adım adım

[Tam ad], [şehir], [ülke] kişisini araştır — gerçek kişi.

1. Önce kendi belgeleriniz kontrol edilir; ardından internetteki kaynaklar açılır ve okunur.

[Ad], [şehir], [ülke] şirketini araştır.

2. Bir şirket için aynı prosedür, vergi numarası ve merkezi dahil.

[Kişi] ile [kişi] arasında bir bağlantı var mı?

3. Mevcut ilişkiler gösterilir; yeni ilişkiler belgelerinizde ve kaynaklarda aranır.

Bana [bulgu] için kaynağı göster.

4. Bulgunun arkasındaki bağlantıyı veya delil numarasını alırsınız.

Doğrulanmış bulguları öneri olarak gir.

5. Bulgular veri tutarlılığı izleyicisine düşer; siz orada kabul edene kadar hiçbir şey kaydedilmez.

### Arka planda neler olur

- **OSINT kontrolü.** Yapay zekâ kontrolü ad, şehir, bölge, ülke ve tarafın gerçek kişi mi yoksa tüzel kişi mi olduğu bilgisiyle başlatır; her seferinde aynı prosedür çalışır. Dahili olarak ad, veritabanının tamamında (tüm müvekkiller) tam metin olarak aranır; her dava için en yeni 10 delil kaydı her bulgunun paragrafıyla birlikte döner, ayrıca kaç tane daha olduğu da bildirilir. Web'de sabit bir arama listesi çalışır: özgeçmiş, Facebook, LinkedIn, Instagram, bölge, şehir, skandal, haberler, mal ve menfaat beyanları (yayımlandığı ölçüde), vergiler, şirketler; bir şirket için ticaret sicili ve iflas, kişiye yönelik aramaların yerini alır. Arama terimleri tarafın ülkesinin dilindedir ve üç arama motoruna yöneltilir. Bağlantılar ve başlıklar yinelenmeden döner. Arama bir arka plan görevi olarak çalışır; tamamlanmadığı sürece yapay zekâ beklemeye devam etmek için aynı çağrıyı tekrarlar. Kontrolün kendisi hiçbir şey yazmaz.
- **Önce mevcut kayıtlar.** IRONSTICK ada uyan kişileri, şirketleri veya kurumları zaten tutuyorsa ilk yanıt bunları eksiksiz olarak, en iyi eşleşme önce olmak üzere listeler. Yapay zekâ bu taraf olan kaydı veya “hiçbiri”ni belirtir. Bildirilen bir kayıt her bulguyu alır; Bridge'deki bir masaüstü yapay zekâda aynı tarafı yeniden oluşturma önerisi bu durumda reddedilir.
- **Hazırlanmış bir profil.** Yapay zekâ onu kaynak kaynak kontrol eder ve adaşları ayıklar. Arama sonucu tam adı gösteren bağlantılar, kaliteye göre sıralanmış uygun bağlantılardır; diğerleri isteğe bağlıdır; salt ana sayfalar atılır. Yapay zekânın görevi her delil bulgusunu okumak, her uygun bağlantıyı açmak ve yalnızca açılan sayfanın kendisinin söylediğini kullanmaktır — asla yalnızca bir başlığı değil.
- **OSINT kapısı — taraflar birer birer.** Bridge'deki bir masaüstü yapay zekâda sonuç bir kontrol listesiyle biter ve başka bir taraf için bir sonraki OSINT kontrolü, liste tamamlanana kadar reddedilir:
   - ilk 10 uygun bağlantı açılmış (bu daha fazlaysa en az %20'si);
   - listelenen her delil kaydı okunmuş — ara bellek kasasına yönlendirilmiş bir sonuç ancak sonuna kadar okunmuşsa sayılır, içinde yapılan bir arama asla sayılmaz;
   - bir kişi için, kişinin adının geçtiği ve ara bellek kasasına düşen her açılmış sayfa, bulunduğu yerlerde okunmuş;
   - ardından ya bir öneri ya da kullanılabilir hiçbir şey bulunamadığının tespiti;
   - bir kişi için ayrıca diğer kişilerle her bağlantının önerilmiş olması ya da hiçbir bağlantı olmadığının tespiti.
- Kişinin tam adını şehir veya bölgeyle birlikte belirten bir sayfa, yapay zekâ onu zaten kayıtlı ya da adaş olarak listelemedikçe “kullanılabilir bir şey yok” olarak kapatılamaz. Ret mesajı tam olarak neyin eksik olduğunu belirtir. Okumalar oturum başına kaydedilir; böylece bir oturumun okuması asla bir diğeri için sayılmaz.
- **Yeni kişi ancak eksiksiz OSINT kontrolünden sonra.** Bridge'deki bir masaüstü yapay zekâda yeni bir gerçek kişi önerisi, bu ad için OSINT kontrolü eksiksiz tamamlanana kadar reddedilir. Şehir, bölge ve ülke her yeni taraf ve her adres kaydı için zorunludur. Bunun dışında yeni bir taraf, adının yanında en az iki ayrıntı alanı gerektirir. Bir gerçek kişinin adresi kurumların adreslerine göre kontrol edilir — bir işverenin adresi ikamet adresi olarak reddedilir — ve yeni bir şirket, dernekler hariç, vergi numarasını gerektirir.
- **Açılmış sayfalar, önizlemeler değil.** Web sayfaları IRONSTICK sayfa aracıyla açılır ve okunur; arama sonuçları yalnızca yol göstericidir. Büyük sayfalar eksiksiz olarak şifreli ara bellek kasasında saklanır ve oradan okunur. Ancak bir filtreden sonra dolan arama formları ve veri tabloları doğrudan sorgulanabilir. Aynı oturumda açılan bir sayfa 30 dakika boyunca bir kopyadan yeniden sunulur. İşlenmesi daha uzun süren taranmış bir belge henüz hazır değil olarak bildirilir; işleme devam eder ve bir sonraki çağrı metni sunar.
- **Bot kontrolleri ve oturum açmalar size gelir.** Bir web sitesi bir bot kontrolü gösterirse veya otomatik erişimleri engellerse IRONSTICK sayfayı kendi tarayıcı penceresinde açar ve yapay zekâ sizden kontrolü orada tamamlamanızı ister. Ardından yapay zekâ sayfayı bu pencerede okur, aynı web sitesinin başka sayfalarını açar ve dosyalarını şifreli ara bellek kasasına indirir; siz kaydetmeden hiçbir şey bir davaya girmez. Başka bir web sitesi için yapay zekâ sayfa aracına döner; işi bittiğinde tarayıcı çalışmasını tamamlandı olarak bildirir ve pencere size kapatılmasını mı yoksa açık tutulmasını mı istediğinizi sorar.
- **Gizli talimatlar karartılır.** Açılan web sayfalarından ve tarayıcı penceresinden gelen metin kural tabanlı bir kontrolden geçer; bir yapay zekâya hitap eden, sohbet veya IRONSTICK kontrol metnini taklit eden ya da metni görünmez karakterlerde gizleyen bölümlerin üzerine yıldız işaretleri yazılır ve içeriğin üzerinde bir not yer alır.
- **Ad listeleri tek seferde.** Bir liste eşleştirmesi, kaydedilmiş bir listeyi IRONSTICK'teki her kişi ve şirketle deterministik olarak karşılaştırır — aksanlar normalleştirilir, kelime sırası yok sayılır, OCR hatalarına karşı toleranslıdır. İsabetler tam, sırası değişmiş, varyant veya tek kelime olarak sınıflandırılır; tek kelime isabetleri her zaman belirsizdir ve kontrol edilmelidir.
- **Yazma işlemleri yerine öneriler.** Doğrulanmış olgular öneri olarak veri tutarlılığı izleyicisine gider: ana veriler, kişi analizi, bağlantılar ve mükerrer kayıtlar. Kişi analizi için yapay zekâ önce kişiyi okumalıdır; zaten içeriği olan bir alan, ancak yapay zekâ bu içeriği kelimesi kelimesine iletirse değiştirilir. Kabul edilen bir analiz alanı kişinin en yeni analizine girer. Yeni bir kişi numarasını ancak siz onu kabul ettikten sonra alır; bu nedenle ona yönelik bağlantılar ikinci bir kabul gerektirir.
- **Asla yapay zekâ hafızasına değil.** OSINT bulguları ve ilerleme hafızaya değil, tarafa aittir. Bir masaüstü yapay zekânın OSINT kontrolü açık olduğu sürece, bir hafıza kaydını kaydetmeye yönelik her girişim, olguları bunun yerine tarafa girme talimatıyla reddedilir.
- **Uygulamada kişi web araması.** Kişi analizindeki *Web araştırması* düğmesi dört adımdan geçer: Ad varyantlarıyla yapılan bir web araması aday bağlantıları toplar (ek bir yapay zekâ web araması yalnızca sizin onayınızla çalışır); istenmeyen isabetleri kaldırırsınız; kalan sayfalar yüklenir ve harici bir yapay zekâ tarafından özetlenir; kaynakları işaretlersiniz ve yapay zekâ bunları analiz alanlarına yönelik düzenlenebilir bir önizleme olarak yoğunlaştırır. Kaydetme, alanları kişinin bir davaya bağlı olmayan analizine onaylanmamış olarak işaretleyerek yazar. Harici yapay zekâ ancak bir onay iletişim kutusunda onay verdikten sonra kullanılır; reddederseniz hiçbir şey gönderilmez.

## İş akışı 8 — Hukuki araştırma: kanunlar önce kütüphaneden

Bir kanun, bir kanun maddesi veya bir yönetmelik önem taşıdığında bu iş akışını kullanın: bir hukuki soruyu yanıtlamak, bir atfı kontrol etmek veya bir dilekçeyi temellendirmek için.
Yapay zekâ normları kendi mevzuat kütüphanenizden kelimesi kelimesine okur ve yalnızca kütüphanede bu norma ilişkin hiçbir şey yoksa internete gider.
Çevrimiçi bulunan bir kanun açılır, okunur, URL'siyle alıntılanır ve geri bildirilir; böylece onayınızdan sonra kütüphaneye girer.
Kütüphane, dilekçe denetiminin atıf yapılan her maddeyi karşılaştırdığı ölçüttür.

![Mevzuat kütüphanesi](https://www.ironstick.legal/img/43_statutes.png)

Önce kütüphane, web yalnızca isabet olmadığında ve her web kaynağı sizin onayınızla kütüphaneye geri döner.

### Adım 0 — Bağlamı belirleyin

- **Davayı açın veya belirtin.** Uygulanacak hukuk davadan gelir. Yapay zekâ esasa ilişkin hukuki çalışmaya başlamadan önce davada kayıtlı yargı alanını okur.
- **Yargı alanı belirtilmemişse.** Kütüphane araması bu durumda yapay zekânın oturumda en son üzerinde çalıştığı davanın yargı alanını kullanır ve bunu belirtir; bilinen bir dava yoksa tüm yargı alanlarında arama yapar ve yapay zekâdan her isabetin yargı alanını kontrol etmesini ister.
- **Kütüphanede neler olduğunu görün.** *Mevzuat* ekranı kütüphanedeki her kanunu başlık, yargı alanı, alan, kaynak ve durumla listeler, kendi tam metin aramasına ve bir bağlantı ya da bir PDF veya Markdown dosyası için bir ekleme düğmesine sahiptir. Aynı genel bakışı sohbette almak için yapay zekâya “Kütüphanede [ülke] için hangi kanunlar var?” diye sorun.
- **İhtiyacınız olan okumayı isteyin.** Kısa bir genel bakış, bir maddenin metni veya bir kanunun eksiksiz okunması. Hangisi olduğunu söyleyin.

### Ne söylersiniz — adım adım

[Kanun] madde [numara] ne diyor? Aynen aktar.

1. Madde mevzuat kütüphanenizden kelimesi kelimesine okunur ve kaynağıyla birlikte alıntılanır.

[Soru] [kanun] içinde düzenlenmiş mi? Bana maddeleri söyle.

2. Kütüphane taranır; ilgili maddeleri tam metinleriyle birlikte alırsınız.

Taslağımda atıf yapılan normları kütüphaneye göre kontrol et.

3. Atıf yapılan her madde kütüphanedeki tam metinle karşılaştırılır.

[Kanun] kütüphanede yok — resmî portalda ara.

4. Web yalnızca kütüphanede bulunmayan bir norm için açılır; sayfa okunur, bağlantısıyla alıntılanır ve kütüphaneniz için önerilir.

### Arka planda neler olur

- **Kütüphane araması.** Kütüphanedeki tüm mevzuat dosyalarını iki şekilde arar: başlık ve açıklamayla eşleştirilip öne sıralanan adlandırmaya göre (“Medeni Kanun”, “Tüzük (AB) 2016/679”) veya kelimelerin yaklaşık %60'ının yettiği bulanık bir arama olan metin pasajına göre. Her isabet dahili kayıt numarasını (L numarası), dosyayı, kesin karakter konumlarıyla kısa alıntıları ve çevresindeki metni almak için hazır bir çağrıyı belirtir.
- **Kelimesi kelimesine okuma.** Madde okuyucu, bir maddeyi L numarası ve madde numarası üzerinden sunar; ifade araması bir karakter aralığını veya bir ifadenin geçtiği her yeri çevresindeki metinle birlikte sunar. Her ikisi de tam olarak sundukları şeyi okunmuş olarak kaydeder. Kanun okuyucu bir kanunun tamamını sunar; bağlayıcı sınırından büyük bir kanun eksiksiz olarak şifreli çalışma alanına gider; okunmuş sayılan, yapay zekânın oradan madde okuyucuyla aldığıdır.
- **Önce mevzuat kütüphanesi.** Bir kanun sorgusu gibi görünen bir web araması veya sayfa sorgusu — madde veya fıkra numaraları, kanun adları, kanun numaraları, mevzuat portalları — yapay zekâ kütüphanede bu normu arayana kadar reddedilir. Kütüphanede isabet varsa web bu norm için kapalı kalır ve yapay zekâya kütüphaneden alıntı yapması talimatı verilir. Web bu norm için ancak kütüphane isabet bildirmediğinde, 15 dakika süreyle ve bu aramanın sunduğu mevzuat portalı bağlantıları dahil olmak üzere açılır. Aranan kanun numarasını veya adlandırmayı başlığında taşımayan ya da aranan madde numarasını içermeyen isabetler “kütüphanede var” sayılmaz — bir yönetmeliğin dayandığı ana kanun içinde anılması böyle bir isabetsizliktir. Kapı, yapay zekâ sohbeti ve her masaüstü yapay zekâ için geçerlidir.
- **Açılmış sayfalar, önizlemeler değil.** Kaynak olarak kullanılan bir sayfa IRONSTICK sayfa aracıyla açılır ve okunur; arama sonuçları yalnızca yol göstericidir. Her internet kaynağı URL'siyle alıntılanır. Kaynak kütüphaneye girdiği anda kanun metni kütüphane dosyasından alıntılanır.
- **Mevzuat kaynaklarını bildirin.** Kanunla ilgili bir web aramasından veya yapay zekâ bir mevzuat portalının bir sayfasını açtıktan sonra, sonraki her araç yanıtı 15 dakikaya kadar kaynağı bildirme hatırlatmasıyla başlar. Yalnızca konu dışı bir arama sonucunda görünen bir portal bağlantısı yalnızca bir not alır.
- **Yapay zekânın kendisi tarafından açılmış.** Bir kaynak bildirimi ancak aynı yapay zekâ oturumu tam olarak bu sayfayı son 24 saat içinde sayfa aracıyla açtıysa kabul edilir. Aksi takdirde bildirim, sayfayı açma ve gerçekten kanun metnini içerdiğini kontrol etme talimatıyla reddedilir — hata sayfası değil, oturum açma sayfası değil, arama sonucu değil, genel bakış değil. Her tarihli yazma işlemi gibi bildirim de son 30 dakika içinde sorgulanmış güncel tarihi gerektirir.
- **Onayınız.** Bildirilen kaynaklar, her biri bir onay kutusuyla birlikte bir iletişim kutusunda toplanır. İşaretlenen kaynaklar bir arka plan işlemi tarafından alınır, dönüştürülür, kontrol edilir ve kütüphaneye kaydedilir; işaretlenmeyenler reddedilir. İletişim kutusunu kapatırsanız kaynaklar toplanmış olarak kalır; kutu bir sonraki bildirimle geri gelir. Kütüphanede zaten bulunan bir bağlantı mevcut olarak yanıtlanır; kütüphanede zaten bulunan bir kanun için başka bir kaynak, kaynağı aynı L numarası altında değiştirme talebine dönüşür.
- **Tarayıcı penceresinde mevzuat portalı yok.** Diğer web siteleri için bot kontrollerini ve oturum açmaları tamamladığınız IRONSTICK tarayıcı penceresi mevzuat portallarını reddeder: Orada hiçbir şey açılmaz, okunmaz veya indirilmez. Sayfa aracını engelleyen bir mevzuat portalı bu pencereye devredilmez.
- **Kütüphanenin güncelliği.** Bağlantılı kaynaklar yaklaşık her 14 günde bir kaynaklarına göre yeniden kontrol edilir; yapay zekâ tek bir kanunu da hemen yeniden kontrol edebilir. Bir kanun kaynağından farklıysa yapay zekâ güncel metni çevrimiçi olarak inceler. Kaynağı olmayan yüklenmiş dosyalar bu şekilde işaretlenir.
- **Bir dilekçedeki atıflar.** Dilekçe denetimi atıf yapılan her maddeyi kütüphane araçlarının okuma kaydıyla karşılaştırır. Kütüphanede bulunan ancak taslağın son değişikliğinden önce orada okunmamış bir madde, onu madde okuyucuyla kelimesi kelimesine okuma ve metne işleme talimatıyla birlikte engelleyici bir bulgudur. Kütüphanede bulunmayan bir norm, kaynağı bildirilip dahil edilene kadar engelleyici bir bulgudur. Bir okuma, kütüphane metninin son değişikliğinden sonra ve taslağın son değişikliğinden önce yapılmışsa sayılır.
- **Bulmak okumak değildir.** Bir mevzuat dosyasında bir madde numarası bulmak veya onu bir genel bakışta anmak, kelimesi kelimesine bir okuma değildir. Bir dilekçe için atıf yapılan her madde madde okuyucuyla okunur ve yapay zekâ, metnin cümlesini gerçekten desteklediğini kontrol eder.
- **Bir kanunun tamamını okuma.** Eksiksiz bir kanun ara bellek kasasındaysa ve yapay zekâ onu orada bölüm bölüm okuyorsa, tam metin onun sohbetinde yer alır. Dilekçe denetimi için bir madde ancak madde okuyucu veya ifade araması üzerinden geldiyse ya da doğrudan geri döndürülebilecek kadar küçük bir kanunda yer alıyorsa okunmuş sayılır.

## Yapay zekâ ile çalışmak — dosyadaki asistanınız

Esas itibarıyla, Bridge üzerinden IRONSTICK'e bağlı bir yapay zekâ ile sohbet son derece güçlü bir araçtır. Onu bir avukat yardımcısı veya bir meslektaş olarak düşünün. Bridge üzerinden yapay zekâ yalnızca belgeleri, tek tek metin pasajlarını veya delilleri taramakla kalmaz — kayıtlı görüntülere bakabilir, istek üzerine PDF dosyalarını görüntüleyip inceleyebilir, yeni OCR taramaları başlatabilir ve çok daha fazlasını yapabilir.

Yapay zekâ ile çalışırken onunla bir avukat yardımcısıyla veya bir avukatla çalışır gibi çalışırsınız. Tam olarak ne istediğinize dair açık talimatlar vermeniz yeterlidir. Yapay zekâ gerekli sorguları arka planda Bridge üzerinden doğrudan IRONSTICK'te — yani dosyalarınızda — yürütür.

**Kural olarak:** Onayınız olmadan yapay zekâ IRONSTICK'te okumaktan pek fazlasını yapamaz. Ana verilerde, kronolojide, takvimde, hafızada, tam metinlerde ve mevzuat kütüphanesinde yapılan değişiklikler ancak siz onayladıktan sonra geçerli olur: Ya bunun için IRONSTICK'te bir form veya iletişim kutusu alırsınız ya da yapay zekânın değişiklik talebi veri tutarlılığı izleyicisinde görünür. Böyle bir iletişim kutusu olmadan yapay zekâ yalnızca kendi çalışma alanlarına yazar — şifreli ara belleğe, isteğiniz üzerine günlük tutanağa ve deterministik denetimlerden sonra kendi dava değerlendirmesine. Etiketler ve büro sohbet mesajları sohbette sizin onayınızı gerektirir.

**Tam şeffaflık:** Her masaüstü yapay zekâ uygulaması araç çağrılarını gösterir — yapay zekânın IRONSTICK'ten hangi bilgileri aldığını her zaman görürsünüz.
Sorularınızda ve talimatlarınızda titiz olun ve yapay zekâya nerede ve nasıl araştırma yapması gerektiğini söyleyin. Arama aracını belirtmeniz gerekmez — yapay zekâ onu kendisi bilir —, ancak ona bilgiyi IRONSTICK'ten alması gerektiğini açıkça söyleyin: XY müvekkilinde, XY davasında, XY delilinde. Müvekkilleri basitçe adlarıyla anabilirsiniz — yapay zekâ müvekkil kimliğini kendisi çözer — ya da müvekkil numarasını (*@C0000000*) IRONSTICK'ten kopyalayıp yapay zekâya verebilirsiniz. Aynı şey örneğin bir delil numarasıyla (*#0000000*) da çalışır.

Yapay zekâ, deterministik program mantığının yapamadığını veya ancak aşırı çabayla yapabildiğini üstlenir — doğal dili anlamak ve yazmak. Geri kalan her şeyi — dosyalarınıza erişimi, mahkeme dosyasının seçimini, belgelerinize göre yapılan kontrolleri, belgelerinizin yalnızca sizin onayınızla değiştiği kuralını — IRONSTICK kendisi, deterministik olarak halleder. Yapay zekâ asla olguların kaynağı olmaz; kaynak IRONSTICK'tir. IRONSTICK yaklaşımını yapay zekânın geleneksel kullanımından bu kadar temelden ayıran budur.
Ancak kullanıcı olarak sizin için IRONSTICK tanıdık biçimde karşınıza çıkar — grafik arayüz olarak veya iletişim kutusu olarak.
