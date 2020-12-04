
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', 
  { 'baslik': 'Anasayfa',
  'sayfaBaslik':{
    'siteAd':'Mekan32',
    'aciklama':'Isparta civarındaki mekanları keşfet!!!'
  },
     'mekanlar':[
       {
         'ad':'Starbucks',
         'adres':'Centrum Garden AVM',
         'puan':4,
         'imkanlar':['Dünya Kahveleri','Kekler','Pastalar','Şekerlemeler'],
         'mesafe':'15Km'
       },
       {
        'ad':'Gloria',
        'adres':'SDÜ Doğu Kampüsü',
        'puan':3,
        'imkanlar':['Dünya Kahveleri','Çay','Pastalar','Şekerlemeler'],
        'mesafe':'2Km'
      },
      {
        'ad':'Donas',
        'adres':'Çarşı',
        'puan':5,
        'imkanlar':['Döner','Ayran','doyurucu menüler'],
        'mesafe':'21Km'
      },
      {
        'ad':'Karikatür Bi Kafe Isparta',
        'adres':'Kutlubey, 1001. Sk',
        'puan':4,
        'imkanlar':['Atıştırmalık','Çay','Kahve'],
        'mesafe':'15Km'
      },
      {
        'ad':'CADDE 102',
        'adres':'Fatih, 4508/1. Sk ',
        'puan':1,
        'imkanlar':['Kahve','Çay','Atıştırmalık'],
        'mesafe':'11Km'
      },
     ]
 });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { 
    'baslik':'Mekan Bilgisi',
    'sayfaBaslik':'Starbucks',
    'mekanBilgisi':{
      'ad':'Starbucks',
      'adres':'Centrum Garden AVM',
      'puan':4,
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar','Şekerlemeler'],
      'koordinatlar':{
        'enlem':37.781885,
        'boylam':30.566034
      },
      'saatler':[
        {
          'gunler':'Pazartesi-Cuma',
          'acilis':'7:00',
          'kapanis':'23:00',
          'kapali':false
        },
        {
          'gunler':'Cumartesi',
          'acilis':'8:00',
          'kapanis':'22:00',
          'kapali':false
        },
        {
          'gunler':'Pazar',
          'kapali':true
        }
      ],
      'yorumlar':[
        {
          'yorumYapan':'Tuğrulhan Keskin',
          'puan':5,
          'tarih':'3 Aralık 2020',
          'yorumMetni':'Güzel mekan '
        }
      ]
    }
  });
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}