
# Hafta 3

**Amaç :** Server kavramının açıklanması, SSH Kullanımı, Zamanlanmış görevler oluşturulması

**Yazarlar :** [**boratanrikulu**](https://github.com/boratanrikulu) **&&** [**hasantezcan**](https://github.com/hasantezcan)

---

## Server (Sunucu) Nedir ?

Server denince akıllara -filmlerin de etkisiyle- devasa büyüklükte hangarlar içine sıra sıra istiflenmiş, genelde siyah renkte dolaplar içinde bulunan, dikdörtgen şeklinde çekmeceler geliyor.

Evet, akıllara gelen bu tablo ve tanım tamamen doğru. Fakat bir "server" oluşturmak için tüm bu saydığımız şeylere ihtiyacımız yok. Sadece bir bilgisayar, server oluşturmak için yeterli. Ve tabiki gerekli olan bir iletişim ağı.

<p align="center">
	<img alt="pwd" src="img/0.jpg" width="800">
</p>

Yani server dediğimiz şeyler de aslında birer bilgisayardır.

Bir bilgisayarın server olarak çalışabilmesi için; gerekli bazı yazılımlara ve kullandığı verileri iletim ağına itebilecek - çekebilecek güce sahip olması gerekir.

Bu **güç** bazen en başta anlattığımız o hollywood vari tablodaki serverların gücü gibi devasa bir güce sahip olurken, bazen de 20 dolarlık bir bilgisayar olan Raspberry Pi'ın gücü olabilir.

Server'ları yönetmek için her durumda fiziksel olarak müdahale edemeyiz. Uzaktan erişip yönetmemiz gerekir. Bu gibi durumlarda **SSH protokolü** kullanır.

---

## SSH Protokolü Nedir ?

SSH (Secure Shell), ağ üzerinde bulunan bir sunucuya bağlanmaya ve bağlanılan sunucu üzerinde komut çalıştırma, dosya transferi gibi işlemleri gerçekleştirmeye olanak sağlayan bir uzak sunucu bağlantı protokolüdür.

SSH protokolü; komut çalıştırma, dosya transferi gibi işlemlerin dışında, güvenli iletişim kanalları gerektiren durumların tamamında kullanılabilmektedir. Örneğin, POP3 mail protokolü gibi iletişimini şifrelenmemiş şekilde gerçekleştiren servisler SSH üzerinden aktarılarak şifreli ve güvenli duruma getirilebilirler.

---

#### SSH Kullanımı

SSH'ın genel olarak kullanımı oldukça basittir. Aşağıdaki gibi bir yapı ile uzak server'ımıza; kullanıcı adı ve parola bilgisini kullanarak erişebiliriz.

```
	[~$] ssh kullancı_adı@server_ip
```

SSH'ın varsayılan port'u 22'dir. Fakat genellikle -her ne kadar gerekliliği tartışılsa da- sunucularda bu port güvenlik sebebi ile değiştirilmektedir. Bağlantı sağlanırken, sunucunun SSH bağlantısını kabul etmek amacıyla dinlediğini port'u belirtmek için **`-p`** parametresi kullanılır.

```
	[~$] ssh kullancı_adı@server_ip -p port
```

---

#### Parola ile Bağlantı Kurmak Neden Güvenli Değil ?

Az önce kullanıcı adı ve parola bilgisi sağlayan uzakta bulunan server'ımıza erişim sağladık. Fakat sizce bu güvenli mi ?

Bizim açımıza göre server'ımıza **parola ile uzaktan bağlanmak güvenli bir yöntem değildir.**

Bunun belli başlı sebepleri vardır; ssh bağlantısının bruteforce işlemine açık olması, herkese açık ortamlarda parolanın elle girilmesi uzaktan izleyen kişiler tarafından parolanın tespit edilmesine yol açabilecek olması gibi faktörler örnek verilebilir.

Bu yüzden, server'ımıza erişim sağlarken, ssh-key kullanmamız daha kullanışlı ve güvenli olacaktır.

---

#### SSH-Key Nedir ?

SSH-Key, parola kullanmadan SSH bağlantıları sağlayabilmemizde kullanılan public ve private key çiftine denir.

---

#### SSH-Keygen ile Key Oluşturulması

SSH-Key oluşturmak oldukça basittir. Aşağıdaki komutu yürüttüğünüzde size birkaç soru sorduktan sonra key üretilecektir. Key üretimi sonucunda biri **public** diğeri **private** olmak üzere **iki adet key** oluşacaktır.

```
	[~$] ssh-keygen
```

<p align="center">
	<img alt="ssh-keygen" src="img/1.png" width="800">
</p>

Üretilen keyler'den sonunda **.pub** uzantısı bulunan sizin public key'inizdir. Bu key'i bağlanmak istediğiniz sunuculara eklemeniz gerekir. Biz bu anlatımda sunucu tarafına değinmeyecemiz için bu adımın nasıl uygulanacağını öğrenmek isteyen arkadaşların bu anlatıma bakmasını tavsiye ederiz : [**`boratanrikulu.me/ssh-key-kullanimi`**](https://boratanrikulu.dev/ssh-key-kullanimi/)

Uzantısı bulunmayan key ise sizin private key'inizdir. Bu dosyayı kimse ile paylaşmamalısınız. SSH ile bağlantı sağlarken bu dosyayı kullanacağız.

Ek olarak private key'in izinleri **600** olarak ayarlanmalıdır.  
Bunu uygulamak için önceki haftanın dokümanını inceleyin : [**`hafta2.md`**](/hafta2/hafta2.md)

---

#### SSH-Key Kullanarak Bağlantı Sağlanması

SSH-Key kullanarak bağlantı sağlamak için **`-i`** parametresi kullanılmalıdır.

```
	[~$] ssh -i /path/to/private_key kullancı_adı@server
```

---

#### ".ssh/config" Dosyasının Kullanımı

Eğer birden fazla sunucu ile uğraşıyorsanız, her bağlantı kurma aşamasında IP girmek tam bir işkence. Bunun önüne geçmek için bilgisayarınızda aşağıdaki gibi bir **`${HOME}/.ssh/config`** dosyası oluşturabilirsiniz. Bu sayede IP'leri girmeden direkt olarak **`ssh server_name`** diyerek sunucunuz ile bağlantı sağlayabilirsiniz.

Bunun için **`${HOME}/.ssh/config`** dosyasını oluşturun.

```
	[~$] touch ${HOME}/.ssh/config
```

Ardından dosya içeriğini aşağıdaki yapıya uygun şekilde ayarlayın.

```
	Host	server_name
		HostName		server_ip
		User			username
		Port			22
		IdentityFile		/path/to/ssh-key
```

Artık herhangi bir şekilde IP girmek yerine direkt olarak **`ssh server_name`** diyerek sunucunuza bağlanabilirsiniz.

---

## Zamanlanmış Görev Nedir ?

Zamanlanmış görevler sayesinde günlük-haftalık-aylık-yıllık periyotlar ile yapmanız gereken işlemleri manuel yapmak yerine otomatik olarak istenen zaman diliminde gerçekleşmesini sağlayabilirsiniz.

Zamanlanmış görevler için çoğunlukla **cron** kullanılır. Çoğu sistemde cron kurulu olarak gelmektedir. Ayrıca yine çoğu sistemde default olarak gelen bazı zamanlanmış cron görevleri mevcuttur.  
Bunlar **/etc/** altında aşağıdaki gibi bulunur.

<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/3.png">
</p>

---

## Cron Nedir ?

Cron zamanlanmış olarak komutları çalıştırmamızı sağlayan bir daemon'dur. Çoğu linux dağıtımında yüklü olarak gelir.

Cron kullanımı için iki temel yol vardır.

Birincisi; hali hazırda sistemde /etc/ altında bulunan **cron.daily**, **cron.hourly**, **cron.monthly** ve **cron.weekly** klasörlerine istenen script'in konulmasıdır.

Bu klasörlerde bulunan scriptler, **/etc/crontab**'daki ayarlamaya göre ilgili zaman dilimlerinde çalıştırılır.

/etc/crontab aşağıdaki gibidir.

<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/4.png">
</p>

İkinicisi; kullanıcıya özel crontab dosyası oluşturulmasıdır. Biz anlatımızda ikinci yolu tercih edeceğiz.

---

#### Sunucuda Saat Ayarlamasının Yapılması

Eğer zamanlanmış bir görev yapmak istiyorsanız ilk yapanız gereken, elinizde bulunan sunucunun sistem saatinin istediğiniz gibi olduğundan emin olmaktır. Sistem saatini aşağıdaki komut ile kontrol edebilirsiniz.

```
	[~$] date
```

Eğer istenenden farklı bir sonuç gözleniyor ise aşağıdaki komut ile sistem saatini bölgesel olarak yeniden ayarlayabilirsiniz.

```
	[~#] dpkg-reconfigure tzdata
```
<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/1.png">
</p>
<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/2.png">
</p>

---

#### Crontab Kullanımı

Her kullanıcının kendisine ait bir crontab dosyası vardır.  

**Crontab** ile bir crontab dosyası oluşturulduğunda bu dosyalar **/var/spool/cron/crontabs/** altında tutulur. Bu dosyalara elle müdahale edilmemesi gerekir, bunun yerine **`crontab`** komutu kullanılmalıdır.

Crontab komutunun kullanım paremetreleri aşağıdaki gibidir.

| Komut | Açıklama |
|:-----:|:--------:|
| **`crontab -l`** | Komudu çalıştıran kullacının, eğer mevcut ise, crontab dosyasını gösterir |
| **`crontab -e`** | Komudu çalıştıran kullanıcının, crontab dosyasını açar |
| **`crontab -r`** | Komudu çalıştıran kullanıcının crontab dosyasını siler |
| **`crontab -u user_name -e`** | Başka bir kullanıcının crontab dosyasını açar |

Crontab dosyasını bir kullanıcı için oluşturmak ve düzenlemek istiyorsak **-e** parametresini kullanmamız gerekir. Eğer ilk defa oluşturuluyorsa aşadağıki gibi boş - varsayılan bir crontab dosyası oluşacaktır.

```
	[~$] EDITOR=nano crontab -e
```


<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/11.png">
</p>

Crontab dosya yapısı aşağıdaki yapıdaki gibi kullanılmalıdır. Her satıra bir işlem yazılacak şekilde düzenlenmelidir.

<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/10.png">
</p>

Yukardaki ifade yerine direkt olarak aşağıdaki gibi bir yapı da kullanılabilir.

| Komut | Eşiti | Açıklama |
|:-----:|:-----:|:--------:|
| **`@yearly`** | 0 0 1 1 \* | Her yılın ilk günü çalışır |
| **`@monthly`** | 0 0 1 \* \* | Her ayın ilk günü çalışır |
| **`@weekly`** | 0 0 \* \* 0 | Her hafta pazar günü çalışır |
| **`@daily`** |  0 0 \* \* \* | Her gün gece yarısı çalışır |
| **`@hourly`** | 0 \* \* \* \* | Her saatin başlangıcında çalışır |
| **`@reboot`** | **-karşılığı yok-** | Her başlatma işleminde çalışır |

Örneğin aşağıdaki iki satır da aynı işlemi yapmaktadır.

<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/12.png">
</p>

---

## Düzenli Olarak Server'den Verileri Çekecek Betiğin Yazımı

Hadi şimdi şuana kadar öğrendiğimiz SSH ve CRON bilgilerimizi harmanlayalım.

Elimizde 192.168.1.101 ip'li bir sunucu olduğunu düşünelim. Bu sunucunun developer kullanıcısının Home dizini altında **gnulinux** isimli, eğitim dokümanlarını içeren bir klasör olsun.

Senaryomuzda bu sunucuya her hafta pazartesi saat 23:50'de SSH-Key ilgili dizini kendi bilgisayarımızda bulunan Documents/egitim/ dizini içerisine kaydetmek istiyor olalım.

Bunun için aşağıdaki gibi bir betik yazdım. Yapısı oldukça basit. Betiğini okuduğunuzda **`scp`** komutunu göreceksiniz. SCP, ssh protokolü üzerinden dosya transferi yapabilmemize olanak veren bir programdır. Detaylı olarak kullanımına bakmak için **`tldr scp`** yapabilirsiniz.

Aşağıdaki betiğin bilgisayarınızda bir yere kayıt edip, çalıştırmak iznini **`+x`** verin.
```sh
	#!/bin/sh

	username="developer"
	server_ip="192.168.1.101"
	key_path="${HOME}/keys/private_key"
	remote_path="gnulinux"
	local_path="${HOME}/Documents/egitim/"

	scp -i ${key_path} -r ${username}@${server_ip}:${remote_path} ${local_path}
```

Şimdi aşağıdaki komut ile yeni bir crontab oluşturalım.

```
	[~$] EDITOR=nano crontab -e
```

Betiğimizi her hafta pazartesi saat 23:50'de çalıştırmak istediğimiz için, aşağıdaki satırı crontab dosyasını ekleyip kaydetmemiz yeterli.

```
	50 23 * * 1 sh /path/to/betik.sh
```
