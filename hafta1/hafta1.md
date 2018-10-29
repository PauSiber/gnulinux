
# Hafta 1

**Amaç :** Terminal kullanımını kavratmak, dosya sistem hiyerarşisini kavratmak, paket yöneticisi kavramından bahsetmek

**Yazarlar :** [**boratanrikulu**](https://github.com/boratanrikulu) **&&** [**hasantezcan**](https://github.com/hasantezcan)

---

## Terminal Nedir ?

Terminal, işletim sisteminizi shell ile kullanmanızı sağlayan bir arayüzdür. GNU/Linux dağıtımlarında SHELL olarak genellikle BASH kabuğu (shell) kullanılır.

Windows'ta bunun karşılığı CMD denebilir.

Windows'ta şuana kadar hiç CMD'ye girmeden hayatta kalabiliyorsanız, aslında GNU/Linux dağıtımlarının **bir çoğunda da** terminale hiç uğramadan da hayatta kalabilirsiniz..

<p align="center">
	<img alt="cmd" src="img/2.png" width="800">
</p>

---

## Peki neden size terminal kullanımı anlatıyoruz ?

İşletim sistemine tamamen hakim olmak, isteklerinizi grafik arayüzünün hantallığına takılmadan yapmak ve işlerinizi çok daha hızlı görmek açısından terminal kullanımı önemlidir.

Ayrıca mesleğimiz gereği burada çok işimiz oluyor **:)**.

Örneğin en basitinden, bir kaç hafta içersinde eğitimini alacağınız git kullanımının terminal üzerinden yapılması gibi. Onun dışında, yazdığınız herhangi bir programı derlerken terminal kullanmanız gerektiği gibi faktörler terminal kullanımına alışmanız açısından önemlidir.

Bu arada html/css derslerinde yazdığınız ya da yazcağınız uygulamaları bundan bir kaç hafta sonra hep birlikte, hiç bir şekilde grafik arayüzü (GUI) kullanmadan yalnızca terminali kullanarak; bir sunucu üzerinde ayağa kaldıracağız **:)**.

Yani şuan öğreneceğiniz bilgiler başka anlamsız, hantal ve yavaş olarak gözükecek olsa bile aslında ilerki mesleki hayatınızda çokça rahat etmenizi sağlayacaktır.

Ne kadar erken öğrenmeniz sizin için o kadar iyi olacaktır.

---

## SHELL Nedir ?

SHELL işletim sistemlerinin servislerini kullanmak amacıyla kullanılan bir kullanıcı arabirimidir (user interface), bir programdır.

Kabuk (shell) , çekirdek ile kullanıcı arasında ara görev görür.

Bir çok kabul çeşidi vardır;

- sh
- bash (Bourne Again Shell)
- zsh
- csh
- ksh
- tcsh

Önünüzde bulunan PauSiber Dev'de ise kabuk yani shell olarak ZSH kullanılmamaktadır.

Kabuk olarak BASH yerine ZSH kullanma sebebimiz; ZSH'ın BASH'e göre daha fazla özellik içermesi.

Bi de şekil filan yani .s.s.s

<p align="center">
	<img alt="zsh" src="img/0.png" width="800">
</p>

<p align="center">
	<img alt="bash" src="img/1.png" width="800">
</p>

---

## Temel Komutlar

Terminalda kullanabileceğiniz sayısız uygulama, sayısız komut var. Biz bu eğitim sırasında yalnızca temel düzeyde olan komutları göstereceğiz.

---

### `ls [LIST]`

Herhangi bir dizinin içini görmek için kullandığımız komuttur.

Örneğin terminalde aşağıdaki gibi bir komut yürütürsek, o sırada bulunduğumuz dizinin içindeki tüm dosya dizinlerin çıktısı görürüz

```bash
	ls
```

<p align="center">
	<img alt="ls" src="img/3.png" width="800">
</p>

---

GNU/Linux'da bir dosyanın gizli olması için başına **"."** konması yeterlidir. Eğer bir dosyanın başında **"."** ifadesin var ise `ls` sorgularında gösterilmez.

Bu yüzden az önce yaptığımız sorgu gördüklerimiz bulunduğumuz satırdaki tüm dosya ya da dizinleri göstermedi.

Gizli dosya ve dizinler dahil tüm her şeyi görmek istiyor isek **--all** ya da **-a** parametresi kullanmamız gerekir.

Yani aşağıdaki gibi bir komut yürütürüz.

```bash
	ls -a
```

<p align="center">
	<img alt="ls - show them all" src="img/4.png" width="800">
</p>

Peki örneğin bulunduğumuz dizin altında bulunan tüm dosyaları tarihe ögre sıralı şekilde görüntülemek istersek ne yapmalıyız ? Aşağıdaki parametreleri kullanabiliriz.

```bash
	ls -lat
```

<p align="center">
	<img alt="ls - show them all with ordering by date" src="img/5.png" width="800">
</p>

---

### `man [MANUEL]`

EE tüm parametreleri böyle tek tek öğrenecek miyiz ? Evet.

**Peki ezberleyecek miyiz ? HAYIR !**

Kullanılan neredeyse her komutun bir manuel sayfası vardır. Bunları okumak için `man` komutunu kullanabiliriz. Örneğin `ls` komutunun manuel sayfasını okumak için `man ls` dememiz yeterlidir.

Son derece detaylı olan bu manuel sayfalarında ilgili komutla ilgili tüm detaya ulaşabilirsiniz.

<p align="center">
	<img alt="man ls" src="img/6.png" width="800">
</p>

**Not :** manuel sayfasından **q**'a basarak çıkabilirsiniz.

Ayrıca ek bir öneri olarak; okuma kolaylığı sağlaması, aranan şeylere daha kolay ulaşma imkanı vermesi açısından, man kullanmak yerine **tldr** uygulamasını kullanabilirsiniz.

[**github.com/tldr-pages/tldr**](https://github.com/tldr-pages/tldr) **|** *tl;dr : "too long; didn't read"*

<p align="center">
	<img alt="man ls" src="img/7.png" width="800">
</p>

---

### `cd` [Change Directory]

Bulunduğumuz dizini değiştirmek için cd komutunu kullanırız.

```bash
	cd Documents/
```

<p align="center">
	<img alt="cd" src="img/9.png" width="800">
</p>

---

### `pwd` [Print Working Directory]

Bu komut bize hangi dizinin içinde olduğumuzu söyler. Yani bulunduğumuz dizinin path'ini verir.

```bash
	pwd
```

<p align="center">
	<img alt="pwd" src="img/8.png" width="800">
</p>

---

### `touch`

İçi boş bir dosya oluşturmak amacıyla kullanılır.

```bash
	touch yeni_bir_dosya.txt
```

---

### `cat`

Bir dosyanın içeriğini terminale basar.

```bash
	cat beni_oku
```

<p align="center">
	<img alt="cat" src="img/10.png" width="800">
</p>

tac

---

### `echo`

Terminal ekrine string bir ifadeyi basmak amacıyla kullanılabilir.

```bash
	echo "MESAJ"
```

<p align="center">
	<img alt="echo" src="img/11.png" width="800">
</p>

Daha çok dosyaların içersine veri yazılırken kullanılır.

Örneğin aşağıdaki gibi bir ifade, file.txt dosyasının en son satırına "yeni veri" string'ini ekler
```bash
	echo "yeni veri" >> file.txt
```

Eğer hali hazırda bulunan dosyadaki tüm verileri silmek ver yerine yazmak istersek

```bash
	echo "hepsini sil yerine yaz" > file.txt
```

---

### `less`

Dosya içeriğini vim'e benzer bir şekilde görüntelememizi sağlayan bir programdır.

```bash
	less dosya_adi
```

<p align="center">
	<img alt="less" src="img/12.png" width="800">
</p>

---

### `mkdir` [Make Directory]

Dizin (klasör) oluşturmak amacıyla kullanılır. Aynı anda birden fazla klasör oluşturulabilir. 

Hatta aynı anda iç içe klasörler de direkt olarak tek komutta oluşturulabilir.

```bash
	mkdir klasor_adi
```

<p align="center">
	<img alt="mkdir" src="img/13.png" width="800">
</p>


---

### `mv` [MOVE]

Dosya ya da dizinlerin taşınmasını sağlar.

*Bu arada, GNU/Linux'da dosya ve dizin aynı şeydir, buna ileride değineceğiz.*

```bash
	mv pamuk_seker tatli_bisey/
```

<p align="center">
	<img alt="mv" src="img/14.png" width="800">
</p>

---

### `cp` [COPY]

Dosya ya da dizinlerin kopyalanması sağlar.

```bash
	cp dosya dosya.backup
```

**"-r"** parametresi ise dizinlerin kopyalanması sağlanırken kullanılır.

```bash
	cp -r sutlac/ tatli_bisey/
```

<p align="center">
	<img alt="cp" src="img/15.png" width="800">
</p>

---

### `rm` [REMOVE]

Dosya ya da dizinlerin silinmesi amacıyla kullanılır.

```bash
	rm dosya
```

```bash
	rm -r dizin/
```

Örneğin aşağıdaki gibi tüm sistemi tek bir komut ile silebilirsiniz. Lakin bu komutun bir çok GNU/Linux dağıtımında çalıştırılması engellidir.

```bash
	rm -rf /
```

<p align="center">
	<img alt="sil cnm" src="img/16.png" width="800">
</p>

---

### `wget`

Wget; internet protokolleri üzerinden dosya indirme aracıdır.

```bash
	wget https://raw.githubusercontent.com/PauSiber/gnulinux/master/hafta1/hafta1.md
```

<p align="center">
	<img alt="wget" src="img/17.png" width="800">
</p>

---

### `!!`

Son komutu tekrar yürütür.

<p align="center">
	<img alt="!!-elif-hocama-selamlar" src="img/18.png" width="800">
</p>

---

### `histroy`

Önceden yürütülen komutları listeli halde gösterir.

```bash
	histroy
```

Daha düzenli şekilde görebilmek aşağıdaki gibi bir komut yürütebilirsiniz.

```bash
	history | less 
```

<p align="center">
	<img alt="history" src="img/19.png" width="800">
</p>

---

## Bir Kaç Kısa Yol

**`ctrl + a`** ile terminalde yazılı olan ifadenin **`ilk başına`** gidilir.

**`ctrl + e`** ile terminalde yazılı olan ifadenin **`en sonuna`** gidilir.

**`ctrl + l`** ile terminal **`temizlenir`**.

**`ctrl + d`** ile terminalden **`çıkış`** sağlanır.

**`ctrl + shift + c`** ile **`kopyalama`** yapılır.

**`ctrl + shift + v`** ile **`yapıştırma`** yapılır.

**`ctrl + c`** ile çalışan uygulama durdurulabilir.

**`ctrl + z`** çalışan uygulama arkaya atılır.

**`ctrl + u`** o anda satıra yazılan herşeyi siler, temizler.

---

## Terminal'de Çalışan Metin Editörleri

#### `nano`

<p align="center">
	<img alt="nano" src="img/20.png" width="800">
</p>

#### `vim`

<p align="center">
	<img alt="vim" src="img/21.png" width="800">
</p>

---

## GNU/Linux'da Dosya Sistem Hiyerarşisi

UNIX tabanlı ya da esinlenilmiş işletim sistemlerinin dosya sistem hiyerarşisi Windows işletim sisteminden oldukça farklıdır.


<p align="center">
	<img alt="windows-my-computer" src="img/23.png" width="800">
</p>

<p align="center">
	<img alt="windows-my-computer" src="img/24.png" width="800">
</p>

<p align="center">
	<img alt="dosya-sistem-hiyerarşisi" src="img/22.png" width="800">
</p>

