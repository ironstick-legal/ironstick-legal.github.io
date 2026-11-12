# Dosyanızda yapay zekâ

> Yerleşik sohbette ya da Bridge aracılığıyla masaüstü yapay zekânızda.

Orijinal sayfa: https://www.ironstick.legal/ki_tr.html

---

Yerleşik sohbette ya da Bridge aracılığıyla masaüstü yapay zekânızda.

IRONSTICK, dosyalarınız üzerinde bir yapay zekâ ile çalışmanız için size iki yol sunar: yerleşik yapay zekâ sohbeti ve masaüstü yapay zekânıza giden Bridge. Her iki durumda da yapay zekâ verilerinize yalnızca IRONSTICK üzerinden ulaşır — aynı araçlarla ve aynı denetimlerin arkasından.

## 1. Yapay zekâ sohbeti ve Bridge — farkı

### Yapay zekâya iki yol

![Yapay zekâya iki yol](https://www.ironstick.legal/img/66_pseudonymization.png)

**Yapay zekâ sohbeti** IRONSTICK'e yerleşiktir: IRONSTICK penceresine yazarsınız ve IRONSTICK isteği kendi API anahtarlarınızla yapay zekâ hizmetine gönderir — adlar ve numaralar bu sırada bilgisayarınızdan yalnızca [nötr yer tutucular](https://www.ironstick.legal/gdpr_tr.html) olarak çıkar. **Bridge** ise tersine çalışır: Zaten kullandığınız masaüstü yapay zekâ uygulamasına — Claude, ChatGPT, Qwen veya Kimi Desktop — yazarsınız ve bu uygulama, sağlayıcıdaki kendi hesabınız altında dosyanız üzerinde canlı olarak çalışır.

|  | Yapay zekâ sohbeti (yerleşik) | Bridge (masaüstü yapay zekâ) |
| --- | --- | --- |
| Nereye yazarsınız | IRONSTICK sohbet penceresine | Masaüstü yapay zekâ uygulamanıza |
| Maliyet | Çağrı başına API maliyeti | Abonelik — büyük dosyalar için çok daha uygun |
| IRONSTICK lisansı | Dahil | [Masaüstü yapay zekâ başına bir Bridge ya da dördü birden paket halinde](https://www.ironstick.legal/download_tr.html) |
| Yapay zekâya gönderilen veriler | Takma adlandırılmış | — |
| Onayınız | Bir sohbet oturumunun ilk harici isteğinden önce | Her program başlatıldıktan sonraki ilk veri erişiminden önce |
| En uygun olduğu alan | Günlük iş: dosyaya ilişkin sorular, diyalog içinde yazılar ve dilekçeler — her zaman el altında, tablette de | Büyük dosyalarda derinlemesine çalışma: davaların tamamını okumak, yüzlerce belge, birden fazla taslak turu |

## 2. IRONSTICK'teki yapay zekâ sohbeti

### Yapay zekâ yapılandırması

![Yapay zekâ yapılandırması](https://www.ironstick.legal/img/screens/A%20config%20AI.png)

1. Yapay zekâ yapılandırması. Tüm yapay zekâ sağlayıcılarını içeren kart.
2. Groq, OpenRouter ve Mistral — e-posta önceliklendirme, veri tutarlılığı monitörü ve günlük brifing gibi arka plan görevleri için ücretsiz yapay zekâ sağlayıcıları; her biri ayrı ayrı açılıp kapatılabilir.
3. Qwen, Kimi, ChatGPT ve Claude — yerleşik sohbet için yapay zekâ sağlayıcıları, her biri [kendi API anahtarınızla](https://www.ironstick.legal/manualquickstart_tr.html#q3). Birden fazlası kayıtlıysa IRONSTICK bunları otomatik olarak gösterilen sırayla kullanır; biri erişilemezse bir sonraki devreye girer.

**Yapay zekânız, sözleşmeniz.** Yapay zekâ sağlayıcısını siz seçer ve kendi API anahtarınızı kaydedersiniz — Claude, ChatGPT, Kimi veya Qwen. Faturalandırma doğrudan sağlayıcınız tarafından yapılır.

- **Ücretsiz arka plan yapay zekâsı.** Groq, OpenRouter ve Mistral, dilerseniz e-postaların atanması ve günlük brifing gibi rutin görevleri üstlenir — her sağlayıcı ayrı ayrı açılıp kapatılabilir.
- **Red/Blue Team.** Dilerseniz ikinci bir inceleme, her yapay zekâ sonucunu eleştirel gözle kontrol eder.
- **Bridge üzerinden masaüstü yapay zekâ.** Claude, ChatGPT, Qwen ve Kimi Desktop, kendi aboneliğinizle doğrudan dosya üzerinde çalışır.

### Yerleşik sohbet

**Önce yerel, sonra harici — onayınızla.** Sohbet, yapay zekâya giden sıkı denetimli yoldur.

- **Önce bilgisayarınız.** Basit istekleri — bir davayı açmak, bir müvekkili görüntülemek — yerel bir katman, yapay zekâ modeli ve internet olmadan yerine getirir.
- **Önce onayınız.** Harici bir yapay zekâ hizmetine bir şey gönderilmeden önce sohbet size sorar.
- **Takma adlandırılmış.** Adlar, dosya numaraları, numaralar ve adresler bilgisayarınızdan yalnızca [nötr yer tutucular](https://www.ironstick.legal/gdpr_tr.html) olarak çıkar; yanıt bilgisayarınızda geri çevrilir.
- **Kayıt altında.** Harici bir yapay zekâ hizmetine yapılan her çağrı yerel olarak kaydedilir.

## 3. Bridge — masaüstü yapay zekânız dosyanın başında

### Bridge

![Bridge](https://www.ironstick.legal/img/58_mcp_bridge.png)

**Büyük dosyalar için tam derinlik.** Masaüstü yapay zekânız dosyanın güncel durumunu — kronolojiler, tam metinler, e-postalar, süreler, temel veriler — özel olarak geliştirilmiş 200'den fazla araç üzerinden okur ve tam derinlikte çalışır:

- “Davanın tamamını oku ve bana pozisyonumuzun en zayıf olduğu yeri söyle.”
- “İstinaf dilekçesini bizim dilekçe formatımızda taslak olarak hazırla ve kelime işlemciye aktar.” — taslak, antetli kâğıdınıza basılmaya hazır olarak IRONSTICK'te görünür.
- “Üç bilirkişi raporunu karşılaştır ve bana bir çelişkiler tablosu hazırla.”
- **Aboneliğe dahil.** Dosyaların tamamını okumak ve birden fazla turda taslak hazırlamak, masaüstü yapay zekâ uygulaması için zaten ödediğiniz abonelik üzerinden yürür.
- **Sizin tarafınızdan açılır.** Bridge yalnızca siz [erişime izin verdiğinizde](https://www.ironstick.legal/manualironstick_tr.html#s2) çalışır; etkin olan her yapay zekâ, simgesini menü çubuğunda gösterir.

### Birden fazla yapay zekâ, tek dava — danışma kurulunuz

![Birden fazla yapay zekâ, tek dava — danışma kurulunuz](https://www.ironstick.legal/img/cutout_advisory_board.jpg)

**Gerçek bir ikinci görüş.** Claude, ChatGPT, Qwen ve Kimi, farklı eğitimlere sahip farklı modellerdir — ve aynı dosya durumuyla aynı dava üzerinde eş zamanlı çalışabilir.

- **Dava teorileri geliştirin** — bir yapay zekâ kurar, diğeri stres testine tabi tutar.
- **Dilekçeleri sağlamlaştırın** — yazın, kontrol edin, çürütün, geliştirin.
- **Yönetimi siz yaparsınız**, doğal dilde: “Bunu ayrıntılandır … kontrol etmesi için diğerine ver … onun değerlendirmesini bana getir.”

## 4. İnanılan değil, doğrulanan

### Bir yapay zekâ neden büyük dosyaların altından tek başına kalkamaz

![Bir yapay zekâ neden büyük dosyaların altından tek başına kalkamaz](https://www.ironstick.legal/img/71_context_overload.png)

**Tarayıcıdaki bir yapay zekâ sohbetinden fazlası.** Bir dil modeline yüzlerce sayfa tek seferde verildiğinde ortadaki ayrıntılar kaybolur, konuşma taşar ve her oturum sıfırdan başlar.

- **Önce yapı.** IRONSTICK dosyayı zaten düzenlemiştir: belgeler sınıflandırılmış, veriler dizinlenmiş, ekler bağlanmıştır.
- **Hedefli erişim.** Yapay zekâ, sorunun gerektirdiği pasajları, belgeleri, e-postaları ve süreleri tam olarak — dosyadan taze olarak — alır.
- **Bir bellek.** Bulgular oturumlar boyunca korunur; yapay zekâ, dosya çalışmasına ilişkin bilgiyi dinamik olarak biriktirir.

### Umut edilen değil, yönlendirilen

![Umut edilen değil, yönlendirilen](https://www.ironstick.legal/img/73_ironstick_guided_path.png)

**İyi dilekler yerine sabit denetimler.** Yapay zekâ ile dosyanız arasında sabit denetimler bulunur — olguları sade program mantığı kontrol eder.

- **Önce okumak, sonra yazmak.** Yapay zekâ yalnızca okuduğu kanıtlanabilen içerikten yazar.
- **Önce kütüphanenizdeki mevzuat.** Mevzuat hükümleri mevzuat kütüphanenizden alıntılanır; internete yalnızca kütüphanede ilgili hüküm yoksa başvurulur.
- **Teslimattan önce denetim.** Bir dilekçe sistemden ancak denetimi geçtikten sonra çıkar — incelemeniz ve imzanız için sunulmaya hazır bir şablon olarak.
- **Yazmak yerine öneri.** Yapay zekâ temel verilerde ve bellekte yapılacak değişiklikleri yalnızca önerir; yalnızca sizin onayladıklarınız geçerlilik kazanır.
- **Gizli belgeler görünmez kalır.** Gizli olarak işaretlenen kayıtlar hiçbir yapay zekâya ulaşmaz.

### Olgular ve metin

![Olgular ve metin](https://www.ironstick.legal/img/75_ironstick_coaching_line.png)

**İki tür içerik için iki denetim yolu.** IRONSTICK, olgular ile metin arasında temel bir ayrım yapar.

- **Olgular — deterministik olarak denetlenir.** Delil numaralarını, tarihleri, tarafları, dosya numaralarını ve mevzuat atıflarını IRONSTICK, sabit program mantığıyla dosyaya ve mevzuat kütüphanesine karşı kontrol eder.
- **Metin — Red/Blue Team tarafından denetlenir.** Argümantasyonu, yapıyı ve üslubu ikinci bir yapay zekâ eleştirel gözle kontrol eder.
- **Red/Blue Team de IRONSTICK ile çalışır.** Dosyaya erişimi vardır ve kendi önerilerini arka planda mevzuata ve olgulara karşı kontrol eder.

## 5. Nucleu ve Snake-Gate

### Nucleu ve Snake

![Nucleu ve Snake](https://www.ironstick.legal/img/76_nucleu_snake_path.png)

**Nucleu — bir davanın bağlayıcı ana yönü.** Nucleu (davadaki atom simgesi), argümantasyonun ana hattını kayıt altına alır: belirleyici olgular ve deliller, söylenmesi gerekenler ve asla söylenmemesi gerekenler. Yapay zekânın dava için yazdığı her belge ona tabidir.

- **İki düzeyde.** Bütün bir olay için — içindeki her davada geçerli — ve tek bir dava için.
- **Yapay zekâ taslak hazırlar, siz karar verirsiniz.** Her değişiklik kırmızıyla işaretlenmiş olarak görünür; ancak sizin onayınız onu yeni bir sürüm olarak kaydeder.
- **Zorunlu okuma.** Güncel Nucleu'yu okumadan yapay zekâ, davanın hiçbir dilekçesini yazamaz, denetleyemez veya teslim edemez.
- **Denetim zincirinin son turu.** Her dilekçe en son, madde madde Nucleu'ya karşı kontrol edilir.

**Snake — karşı tarafın çelişkilerinin sicili.** Snake (davadaki yılan simgesi), dosyadaki delillerin çeliştiği karşı tarafın her beyanını kayıt altına alır — belge, tarih, dava ve sayfayla birlikte ve onunla çelişen her belgeyle.

- **Her satır dosyaya karşı kontrol edilir.** Delil numarası, tarih, dava ve sayfa doğru olmalıdır; aksi halde kayıt reddedilir.
- **Araştırmayla ya da konuşmanın ortasında oluşturulur** — bir çelişki ortaya çıkar çıkmaz, mükerrer kayıt olmadan.
- **Snake-Gate.** Bir dilekçe tamamlanmadan önce yapay zekâ, Snake turunun çalıştırılıp çalıştırılmayacağını sorar. Onay vermeniz halinde müvekkilin her Snake kaydı kontrol edilir ve kullanıldı, reddedildi ya da ilgisiz olarak işaretlenerek kapatılır — karşı tarafın çelişkileri, delille desteklenen bir argüman olarak sistematik biçimde dilekçenize yansır.
- **Her sürüm için sizin onayınız.**

**Yapay zekâ çalışır, siz karar verirsiniz.** Kurulumu ve iş akışlarını [Bridge kılavuzunda](https://www.ironstick.legal/manualbridge_tr.html) bulabilirsiniz.
