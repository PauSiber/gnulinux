
# Hafta 4

**Amaç :** Servis kavramının açıklanması, systemctl Kullanımı, LAMP kurulumunun yapılması

**Yazarlar :** [**boratanrikulu**](https://github.com/boratanrikulu) **&&** [**hasantezcan**](https://github.com/hasantezcan)

---

## Servis Nedir ?

...  
...

---

## Systemctl Nedir ? Nasıl Kullanılır ?

Systemctl controls the systemd system and service manager.

List failed units:  
`systemctl --failed`

Start/Stop/Restart/Reload a service:  
`systemctl start/stop/restart/reload unit`

Show the status of a unit:  
`systemctl status unit`

Enable/Disable a unit to be started on bootup:  
`systemctl enable/disable unit`

Mask/Unmask a unit, prevent it to be started on bootup:  
`systemctl mask/unmask unit`

Reload systemd, scanning for new or changed units:  
`systemctl daemon-reload`

---

ROOT için de zsh ayarlar


## LAMP Kurulumu

Dev'den Debian server'ımıza bağlanmak için iki sanal makinemızın network ayarını da NAT Network olarak seçmeliyiz.

NAT Network oluşturmak için Preferences > Network > Nat

```
	[~#] apt update
```
```
	[~#] apt install apache2
```
```
	[~#] ls -la /var/www/html
```
```
	[~#] cd /var/www/html && git clone https://github.com/PauSiber/dev.git
```
https://10.0.2.5/dev
```
	[~#] apt install mariadb-server mariadb-client
```
```
	[~#] mysql_secure_installation
```
root parolası set edilir, buradaki root denilen sistem yöneticisi değil mariadb veri tabanın yöneticisi anlamındadır, parolası farklı olmalıdır. Fakat biz deneme amacıyla yapacağımız için 123123 diyip geçiyoruz.
```
	[~#] apt install php php-mysql php-pear
```
```
	<?php
    	phpinfo();
	?>
```
https://10.0.2.5/info.php
```
	[~#] apt install phpmyadmin
```

thats all.

---

## Wordpress Kurulumu

????????
```
	[~#] nano /root/.my.cnf
```
```
	[~#] mysql
```
```
	CREATE DATABASE wordpress;
	CREATE USER wordpress@localhost IDENTIFIED BY '123123';
	GRANT ALL PRIVILEGES ON wordpress.* TO wordpress@localhost IDENTIFIED BY '123123';
	FLUSH PRIVILEGES;
```
https://10.0.2.5/phpmyadmin
```
	[~#] wget http://wordpress.org/latest.tar.gz
```
```
	[~#] tar xzvf latest.tar.gz
```
```
	[~#] cp -a wordpress/* /var/www/html/ 
```
```
	[~#] chown -R www-data:www-data /var/www/html/*
```
```
	[~#] cp /var/www/html/wp-config-sample.php /var/www/html/wp-config.php
```
``` 
	[~#] nano /var/www/html/wp-config.php
```
```
	[~#] mv /var/www/html/index.html /var/www/html/index.html.backup
```
https://10.0.2.5/
