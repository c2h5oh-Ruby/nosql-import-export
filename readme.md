#Skrypty NoSql

##Import - export

Dane: ap.json, są to dane lotnisk w USA

* Dane są tablicą "data".

* Dane zawierają pola:
	* id
	* ident
	* type
	* name
	* latitude_deg
	* longitude_deg
	* elevation_ft
	* continent
	* iso_country
	* iso_region
	* muncipality
	* scheduled_service
	* gps_code
	* iata_code
	* local_code
	* home_link
	* wikipedia_link
	* keywords

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

MapReduce
 



