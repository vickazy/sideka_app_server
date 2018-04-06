export const CONFIG = [
  {
     "id":"network_transportation",
     "label":"Jaringan Transportasi",
     "attributeSets":{
        "highway":[
           {
              "key":"name",
              "label":"Nama",
              "type":"text"
           },
           {
              "key":"lanes",
              "label":"Jumlah Jalur",
              "type":"text"
           },
           {
              "key":"lit",
              "label":"Diterangi?",
              "type":"boolean"
           },
           {
              "key":"width",
              "label":"Lebar",
              "type":"text"
           },
           {
              "key":"surface",
              "label":"Permukaan",
              "type":"select",
              "options":[
                 {
                    "label":"Tanah",
                    "value":"ground"
                 },
                 {
                    "label":"Aspal",
                    "value":"asphalt"
                 },
                 {
                    "label":"Beton",
                    "value":"concrete"
                 },
                 {
                    "label":"Kerikil",
                    "value":"gravel"
                 },
                 {
                    "label":"Rumput",
                    "value":"grass"
                 },
                 {
                    "label":"Lumpur",
                    "value":"mud"
                 },
                 {
                    "label":"Pasir",
                    "value":"sand"
                 },
                 {
                    "label":"Kayu",
                    "value":"wood"
                 }
              ]
           }
        ]
     },
     "elements":[
        {
           "label":"Jalan Kolektor",
           "values":{
              "highway":"secondary"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 30,
                 0,
                 0
              ],
              "weight":5
           }
        },
        {
           "label":"Jalan Lokal",
           "values":{
              "highway":"local"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 47,
                 60,
                 0
              ],
              "weight":3
           }
        },
        {
           "label":"Jalan Setapak",
           "values":{
              "highway":"path"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 30,
                 0,
                 0
              ],
              "weight":3,
              "dashArray":"5,5"
           }
        },
        {
           "label":"Jalan Pematang",
           "values":{
              "highway":"track"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 30,
                 0,
                 0
              ],
              "weight":3
           }
        },
        {
           "label":"Jalan Tol",
           "values":{
              "highway":"motorway"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 0,
                 60,
                 0
              ],
              "weight":5
           }
        },
        {
           "label":"Jalan Arteri",
           "values":{
              "highway":"trunk"
           },
           "attributeSetNames":[
              "highway"
           ],
           "style":{
              "cmykColor":[
                 0,
                 50,
                 0,
                 0
              ],
              "weight":5
           }
        },
        {
           "label":"Jembatan",
           "values":{
              "man_made":"bridge"
           },
           "attributeSetNames":[
              "highway"
           ],
           "attributes":[
              {
                 "key":"bridge:structure",
                 "label":"Struktur",
                 "type":"select",
                 "options":[
                    {
                       "label":"Pelengkung (Arch)",
                       "value":"arch"
                    },
                    {
                       "label":"Alang (Beam)",
                       "value":"beam"
                    },
                    {
                       "label":"Rangka (Truss)",
                       "value":"truss"
                    },
                    {
                       "label":"Ponton",
                       "value":"floating"
                    },
                    {
                       "label":"Gantung",
                       "value":"suspension"
                    },
                    {
                       "label":"Kabel",
                       "value":"cable-stayed"
                    }
                 ]
              }
           ],
           "style":{
              "cmykColor":[
                 0,
                 50,
                 0,
                 0
              ],
              "weight":5
           }
        }
     ]
  },
  {
     "id":"boundary",
     "label":"Batas Administrasi",
     "attributeSets":{
        "boundary":[
           {
              "key":"name",
              "label":"Nama",
              "type":"text"
           },
           {
              "key":"status",
              "label":"Status",
              "type":"select",
              "options":[
                 {
                    "label":"Definitif",
                    "value":"definitive",
                    "style": {
                      "weight":3,
                      "dashArray":"0"
                    }
                 },
                 {
                    "label":"Indikatif",
                    "value":"indicative",
                    "style": {
                      "weight":3,
                      "dashArray":"5,5"
                    }
                 }
              ]
           }
        ]
     },
     "elements":[
        {
           "label":"Batas Desa",
           "values":{
              "admin_level":7
           },
           "attributeSetNames":[
              "boundary"
           ],
           "style":{

           }
        },
        {
           "label":"Batas Dusun",
           "values":{
              "admin_level":8
           },
           "attributeSetNames":[
              "boundary"
           ],
           "style":{

           }
        },
        {
           "label":"Batas RW",
           "values":{
              "admin_level":9
           },
           "attributeSetNames":[
              "boundary"
           ],
           "style":{

           }
        },
        {
           "label":"Batas RT",
           "values":{
              "admin_level":10
           },
           "attributeSetNames":[
              "boundary"
           ],
           "style":{

           }
        }
     ]
  },
  {
     "id":"waters",
     "label":"Perairan",
     "attributeSets":{
        "waterway":[
           {
              "key":"width",
              "label":"Lebar",
              "type":"text"
           },
           {
              "key":"name",
              "label":"Nama",
              "type":"text"
           },
           {
              "key":"irrigation",
              "label":"Untuk Irigasi?",
              "type":"boolean"
           },
           {
              "key":"intermittent",
              "label":"Pasang Surut?",
              "type":"boolean"
           }
        ]
     },
     "elements":[
        {
           "label":"Sungai",
           "values":{
              "waterway":"river"
           },
           "attributeSetNames":[
              "waterway"
           ]
        },
        {
           "label":"Kanal",
           "values":{
              "waterway":"canal"
           },
           "attributeSetNames":[
              "waterway"
           ]
        },
        {
           "label":"Saluran",
           "values":{
              "waterway":"ditch"
           },
           "attributeSetNames":[
              "waterway"
           ]
        },
        {
           "label":"Mata Air",
           "values":{
              "natural":"spring"
           },
           "attributes":[
              {
                 "key":"drinking_water",
                 "label":"Air Minum?",
                 "type":"boolean"
              },
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              }
           ]
        },
        {
           "label":"Danau",
           "values":{
              "natural":"water",
              "water":"lake"
           },
           "attributes":[
              {
                 "key":"drinking_water",
                 "label":"Air Minum?",
                 "type":"boolean"
              },
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              },
              {
                 "key":"intermittent",
                 "label":"Pasang Surut?",
                 "type":"boolean"
              }
           ]
        },
        {
           "label":"Embung",
           "values":{
              "natural":"water",
              "water":"basin",
              "basin":"retention"
           },
           "attributes":[]
        },
        {
          "label": "Sistem Pipa",
          "values": {
            "waterway": "pipe_system"
          },
          "attributes": [{
             "key": "width",
             "label": "Lebar",
             "type": "text"
          }]
        }
     ]
  },
  {
     "id":"landuse",
     "label":"Penggunaan Lahan",
     "elements":[
        {
           "label":"Pemukiman",
           "values":{
              "landuse":"residential"
           },
           "style":{
              "rgbColor":[
                 215,
                 215,
                 215,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Industri dan Pergudangan",
           "values":{
              "landuse":"industrial"
           },
           "style":{
              "rgbColor":[
                 255,
                 175,
                 129,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Perkantoran",
           "values":{
              "landuse":"commercial"
           },
           "style":{
              "rgbColor":[
                 204,
                 150,
                 119,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Pertokoan",
           "values":{
              "landuse":"retail"
           },
           "style":{
              "rgbColor":[
                 251,
                 203,
                 217,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Pemakaman",
           "values":{
              "landuse":"cemetery"
           },
           "style":{
              "rgbColor":[
                 142,
                 142,
                 142,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Perkebunan",
           "values":{
              "landuse":"orchard"
           },
           "attributes":[
              {
                 "key":"crop",
                 "label":"Tanaman",
                 "type":"text"
              }
           ],
           "style":{
              "rgbColor":[
                 141,
                 198,
                 102,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Hutan",
           "values":{
              "landuse":"forest"
           },
           "attributes":[
              {
                 "key":"trees",
                 "label":"Pohon",
                 "type":"text"
              }
           ],
           "style":{
              "rgbColor":[
                 0,
                 104,
                 56,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Sawah",
           "values":{
              "landuse":"farmland"
           },
           "attributes":[
              {
                 "key":"crop",
                 "label":"Tanaman",
                 "type":"text"
              }
           ],
           "style":{
              "rgbColor":[
                 247,
                 230,
                 102,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Rumput",
           "values":{
              "landuse":"grass"
           },
           "style":{
              "rgbColor":[
                 188,
                 254,
                 159,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Semak Belukar",
           "values":{
              "landuse":"meadow"
           },
           "style":{
              "rgbColor":[
                 155,
                 231,
                 155,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Rawa",
           "values":{
              "landuse":"wetland"
           },
           "style":{
              "rgbColor":[
                 129,
                 204,
                 182,
                 0
              ],
              "weight":2
           }
        },
        {
           "label":"Lahan Terbuka",
           "values":{
              "landuse":"greenfield"
           },
           "style":{
              "rgbColor":[
                 255,
                 255,
                 255,
                 0
              ],
              "weight":2
           }
        }
     ]
  },
  {
     "id":"facilities_infrastructures",
     "label":"Sarana Prasarana",
     "elements":[
        {
           "label":"Rumah",
           "attributeKey": null,
           "values":{
              "building":"house"
           },
           "attributes":[
              {
                 "key":"kk",
                 "label":"No KK",
                 "type":"penduduk_selector"
              },
              {
                 "key":"electricity_watt",
                 "label":"Watt Listrik",
                 "type": "date"
              },
              {
                 "key":"start_from",
                 "label":"Dari",
                 "type": "date"
              }
           ],
           "style":{
              "cmykColor":[
                 0,
                 30,
                 0,
                 0
              ],
              "weight":3
           }
        },
        {
           "label":"Sekolah",
           "attributeKey": "isced",
           "values":{
              "amenity":"school"
           },
           "attributes":[
              {
                 "key":"capacity",
                 "label":"Kapasitas",
                 "type":"text"
              },
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              },
              {
                 "key":"address",
                 "label":"Alamat",
                 "type":"text"
              },
              {
                 "key":"isced",
                 "label":"Tingkat",
                 "type":"select",
                 "options":[
                    {
                       "label":"PAUD/TK",
                       "value":0,
                       "marker":"ic_tk.png"
                    },
                    {
                       "label":"SD",
                       "value":1,
                       "marker":"ic_pendidikandasar.png"
                    },
                    {
                       "label":"SMP",
                       "value":2,
                       "marker":"ic_pendidikanmenengahpertama.png"
                    },
                    {
                       "label":"SMA",
                       "value":3,
                       "marker":"ic_pendidikanmenengahumum.png"
                    },
                    {
                       "label":"Univesitas/S1",
                       "value":4,
                       "marker":"ic_universitas.png"
                    }
                 ]
              }
           ]
        },
        {
           "label":"Tempat Ibadah",
           "attributeKey": "building",
           "values":{
              "amenity":"place_of_worship"
           },
           "attributes":[
              {
                 "key":"building",
                 "label":"Gedung",
                 "type":"select",
                 "options":[
                    {
                       "label":"Masjid",
                       "value":"mosque",
                       "marker":"ic_mesjid.png"
                    },
                    {
                       "label":"Gereja",
                       "value":"church",
                       "marker":"ic_gereja.png"
                    },
                    {
                       "label":"Wihara",
                       "value":"vihara",
                       "marker":"ic_vihara.png"
                    },
                    {
                       "label":"Pura",
                       "value":"pura",
                       "marker":"ic_klenteng.png"
                    }
                 ]
              },
              {
                 "key":"religion",
                 "label":"Agama",
                 "type":"select",
                 "options":[
                    {
                       "label":"Islam",
                       "value":"islam"
                    },
                    {
                       "label":"Hindu",
                       "value":"hindu"
                    },
                    {
                       "label":"Buddha",
                       "value":"budhha"
                    },
                    {
                       "label":"Kristen",
                       "value":"chirstian"
                    },
                    {
                       "label":"Katolik",
                       "value":"catholic"
                    }
                 ]
              },
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              }
           ]
        },
        {
           "label":"Sumur",
           "attributeKey": null,
           "values":{
              "man_made":"waterwell"
           },
           "attributes":[
              {
                 "key":"pump",
                 "label":"Pompa",
                 "type":"select",
                 "options":[
                    {
                       "label":"Bertenaga",
                       "value":"powered"
                    },
                    {
                       "label":"Manual",
                       "value":"manual"
                    }
                 ]
              },
              {
                 "key":"drinking_water",
                 "label":"Air Minum",
                 "type":"boolean"
              }
           ]
        },
        {
           "label":"MCK Umum",
           "attributeKey": null,
           "values":{
              "value":"toilets",
              "access":"public"
           }
        },
        {
           "label":"Lapangan Olahraga",
           "attributeKey": null,
           "values":{
              "leisure":"pitch"
           },
           "attributes":[
              {
                 "key":"sport",
                 "label":"Olahraga",
                 "type":"select",
                 "options":[
                    {
                       "label":"Sepak Bola",
                       "value":"soccer"
                    },
                    {
                       "label":"Basket",
                       "value":"basketball"
                    },
                    {
                       "label":"Badminton",
                       "value":"badminton"
                    },
                    {
                       "label":"Voli",
                       "value":"volleyball"
                    }
                 ]
              },
              {
                 "key":"surface",
                 "label":"Permukaan",
                 "type":"select",
                 "options":[
                    {
                       "label":"Tanah",
                       "value":"earth"
                    },
                    {
                       "label":"Beton",
                       "value":"concrete"
                    }
                 ]
              }
           ]
        },
        {
           "label":"Pasar",
           "attributeKey": null,
           "values":{
              "amenity":"marketplace"
           },
           "attributes":[
              {
                 "key":"opening_hours",
                 "label":"Jam Buka",
                 "type":"time"
              },
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              }
           ]
        },
        {
           "label":"Pembangkit Listrik",
           "attributeKey": null,
           "values":{
              "power":"plant"
           },
           "attributes":[
              {
                 "key":"name",
                 "label":"Nama",
                 "type":"text"
              },
              {
                 "key":"output",
                 "label":"Pengeluaran",
                 "type":"text"
              },
              {
                 "key":"source",
                 "label":"Sumber",
                 "type":"select",
                 "options":[
                    {
                       "label":"Batu Bara",
                       "value":"coal"
                    },
                    {
                       "label":"Gas",
                       "value":"gas"
                    },
                    {
                       "label":"Air",
                       "value":"water"
                    },
                    {
                       "label":"Panas Bumi",
                       "value":"geothermal"
                    },
                    {
                       "label":"Minyak",
                       "value":"oil"
                    }
                 ]
              }
           ]
        }
     ]
  }
]