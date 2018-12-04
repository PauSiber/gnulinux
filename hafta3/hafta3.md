
# Hafta 3

**Amaç :** Server kavramının açıklanması, SSH Kullanımı, Zamanlanmış görevler oluşturulması

**Yazarlar :** [**boratanrikulu**](https://github.com/boratanrikulu) **&&** [**hasantezcan**](https://github.com/hasantezcan)

---

## Server (Sunucu) Nedir ?

Server denince, akıllara; -filimlerin de etkisiyle- devasa büyüklükte hangarlar içine, sıra sıra istiflenmiş genelde siyah renkte dolaplar içinde bulunan, dikdörtgen şeklinde çekmeceler geliyor.

<p align="center">
	<img alt="pwd" src="img/0.jpg" width="800">
</p>

Evet, akıllara gelen bu tablo ve tanım tamamen doğru. Fakat bir "server" oluşturmak için tüm bu saydığımız şeylere ihtiyacımız yok. Sadece bir bilgisayar, server oluşturmak için yeterli. Ve tabiki gerekli iletişim ağı.(internet ya da local ağ)

Yani server dediğimiz şeylerde aslında birer bilgisayardır.

Bir bilgisayarın server olarak çalışabilmesi için; gerekli bazı yazılımlara ve kulandığı verileri iletim ağına itebilecek ve çekebilecek güce sahip olması gerekir.

Bu **güç** bazen; en başta anlattığımız, o hollywood vari tablodaki serverların güçü gibi devasa bir güçce sahip olurken, bazen de 20 dolarlık bir Raspberry Pi'ın gücü olabilir.

---
## SSH Protokolü Nedir ?

SSH (Secure Shell), ağ üzerinde bulunan bir sunucuya bağlanmaya ve bağlanılan sunucu üzerinde komut çalıştırma, dosya transferi gibi işlemleri gerçekleştirmeye olanak sağlayan bir uzak sunucu bağlantı protokolüdür.

SSH protokolü, komut çalıştırma, dosya transferi gibi işlemlerin dışında, güvenli iletişim kanalları gerektiren durumların tamamında kullanılabilmektedir. Örneğin; POP3 mail protokolü gibi iletişimini şifrelenmemiş şekilde gerçekleştiren servisler SSH üzerinden aktarılarak şifreli ve güvenli duruma getirilebilirler.

---

#### SSH Kullanımı

- Uzakdaki bir sunucuya bağlanmak için;
```bash
ssh kullancı_adı@remote_host
```


- Uzakdaki bir sunucuya özel bir port üzerinden bağlanmak;
```bash
ssh kullancı_adı@remote_host -p port
```



---

#### Parola ile Bağlantı Kurmak Neden Güvenli Değil ?

...  
...

---

#### SSH-Key Nedir ?

...  
...

---

#### SSH-Keygen ile Key Oluşturulması

- SSH key oluşturmak için;
```bash
ssh-keygen
```

<p align="center">
	<img alt="ssh-keygen" src="img/1.png" width="800">
</p>

- Oluşan keyi istediğimiz bir dizine koymak için bu komutu yürütürüz.
```bash
ssh-keygen -f ~/.ssh/file_name
```

---

#### Bir Server'e SSH-Key Kullanarak Bağlantı Sağlanması

- Uzakdaki bir sunucuya private key kullanarak bağlanmak;
```bash
ssh -i private_key_path kullancı_adı@remote_host
```

---

#### ".ssh/config" Dosyasının Kullanımı

Eğer birden fazla sunucu ile uğraşıyorsanız, her bağlantı kurma aşamasında IP girmek tam bir işkence. Bunun önüne geçmek için bilgisayarınızda aşağıdaki gibi bir .ssh/config dosyası oluşturabilirsiniz. Bu sayede IP'leri girmeden direkt olarak **ssh serverName** diyerek sunucunuz ile bağlantı sağlayabilirsiniz.

Bunun için **~/.ssh/config** dosyasını oluşturun.  
```bash
	[~$] touch .ssh/config
```
Ardından aşağıdaki dosyayı ayarlayın.
```bash
	Host	serverName
		HostName		ServerIP
		User			username
		Port			22
		IdentityFile		/path/to/ssh-key
```

Artık herhangi bir şekilde IP girmek yerine direkt olarak **ssh serverName** diyerek sunucunuza bağlanabilirsiniz.

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

Birincisi; hali hazırda sistemde /etc/ altında bulunan **cron.daily**, **cron.hourly**, **cron.monthly** ve **cron.weekly** klasörlerinine istenen script'in kopyalanmasıdır.  
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
**Crontab** ile bir crontab dosyası oluşturulduğunda bu dosyalar **/var/spool/cron/crontabs/** altında tutulur. Bu dosyalara elle müdahale edilmemesi gerekir, bunun yerine **crontab** komutu kullanılmalıdır.

Crontab komutunun kullanım paremetreleri aşağıdaki gibidir.

| Komut | Açıklama |
|:-----:|:--------:|
| crontab -l | Komudu çalıştıran kullacının, eğer mevcut ise, crontab dosyasını gösterir |
| crontab -e | Komudu çalıştıran kullanıcının, crontab dosyasını açar |
| crontab -r | Komudu çalıştıran kullanıcının crontab dosyasını siler |
| crontab -u userName -e | Başka bir kullanıcının crontab dosyasını açar |

Crontab dosyasını bir kullanıcı için oluşturmak ve düzenlemek istiyorsak **-e** parametresini kullanmamız gerekir. Eğer ilk defa oluşturuluyorsa aşadağıki gibi boş/default bir crontab dosyası oluşacaktır.

```
	[~$] crontab -e
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
| **@yearly** | 0 0 1 1 \* | Her yılın ilk günü çalışır |
| **@monthly** | 0 0 1 \* \* | Her ayın ilk günü çalışır |
| **@weekly** | 0 0 \* \* 0 | Her hafta pazar günü çalışır |
| **@daily** |  0 0 \* \* \* | Her gün gece yarısı çalışır |
| **@hourly** | 0 \* \* \* \* | Her saatin başlangıcında çalışır |
| **@reboot** | **-karşılığı yok-** | Her başlatma işleminde çalışır |


Örneğin aşağıdaki iki satır da aynı işlemi yapmaktadır.

<p align="center">
	<img src="img/cron-ile-zamanlanmis-gorevler/12.png">
</p>

---

#### Düzenli Olarak Server'den Verileri Çekecek Betiğin Yazımı

```bash
#!/bin/sh

username="developer"
server_ip="192.168.1.101"
key_path="${HOME}/Documents/week_3/rasp_keys/developer/rasp_developer"
remote_path="gnulinux"
local_path="${HOME}/Documents/week_3/"

scp -i ${key_path} -r ${username}@${server_ip}:${remote_path} ${local_path}
```
