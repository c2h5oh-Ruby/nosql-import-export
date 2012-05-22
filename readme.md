#Skrypty NoSql

##Import - export

Skrypty

* air_import_couch.js : importuje dane z pliku ap.json do bazy airports

```sh
node air_import_couch.js
```

* air_export_couch.js : eksportuje dane z bazy danych airports do pliku ap.json w oryginalnej postaci, tj. do tablicy "data" ( zadbałem o wymienność operacji ).

```sh
node air_export_couch.js
```

* air_import_mongo.js :importuje dane z pliku ap.json do bazy danych test i kolekcji airports

```sh
node air_import_mongo.js
```

* air_import_elasticsearch.js: importuje dane z pliku ap.json do bazy danych /dawcio/airports/ na hoscie http://127.0.0.1:9200

```sh
node air_import_elasticsearch.js
```

##MapReduce
 
Dane: ap.json, są to dane lotnisk w USA

* dane zawarte są w tablicy "data"

```sh
{"data" :[
        	{
		...# dane
		}
	 ]
}
```

* dane zawierają pola:
	* id
	* ident
	* type
	* name
	* ...
	* local_code
	* home_link
	* wikipedia_link
	* keywords

* przykładowy zestaw danych lotniska:

```sh
 {
                "id":"6523",
                "ident":"00A",
                "type":"heliport",
                "name":"Total Rf Heliport",
                "latitude_deg":"40.07080078125",
                "longitude_deg":"-74.9336013793945",
                "elevation_ft":"11",
                "continent":"NA",
                "iso_country":"US",
                "iso_region":"US-PA",
                "municipality":"Bensalem",
                "scheduled_service":"no",
                "gps_code":"00A",
                "iata_code":"",
                "local_code":"00A",
                "home_link":"",
                "wikipedia_link":"",
                "keywords":""
        }
```


* skrypt dla mongodb types.js liczy lotniska poszczególnych typów (small_airport, heliport, seaplane_base, closed ) na kolekcji airports w bazie danych test.

```sh
mongo types.js --shell
```
a później 

```
db.air_mr.show()
```
Wyniki:
```sh
{ "_id" : "closed", "value" : 2 }
{ "_id" : "heliport", "value" : 104 }
{ "_id" : "seaplane_base", "value" : 8 }
{ "_id" : "small_airport", "value" : 185 }
```