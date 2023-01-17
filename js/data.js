/* exported data */
/* exported airports */
// data received from AVWX API
// Airport List
const airports = [
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'WIB',
    icao: '',
    airport: 'Wilbarger County Airport (FAA: F05)',
    latitude: 34.22570038,
    longitude: -99.28379822
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'AJO',
    icao: 'KAJO',
    airport: 'Corona Municiple Airport',
    latitude: 0,
    longitude: 0
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'HHR',
    icao: 'KHHR',
    airport: 'Hawthorne Municipal Airport (Jack Northrop Field)',
    latitude: 33.922798,
    longitude: -118.334999
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SJT',
    icao: 'KSJT',
    airport: 'San Angelo Regional Airport (Mathis Field)',
    latitude: 31.35770035,
    longitude: -100.4960022
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'HHI',
    icao: 'PHHI',
    airport: 'Wheeler Army Airfield',
    latitude: 21.48349953,
    longitude: -158.0399933
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'HHH',
    icao: 'KHXD',
    airport: 'Hilton Head Airport',
    latitude: 32.22439957,
    longitude: -80.69750214
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HGZ',
    icao: '',
    airport: 'Hog River Airport',
    latitude: 66.2161026,
    longitude: -155.6690063
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SKA',
    icao: 'KSKA',
    airport: 'Fairchild Air Force Base',
    latitude: 47.61510086,
    longitude: -117.6559982
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SKF',
    icao: 'KSKF',
    airport: 'Kelly Field Annex / Lackland Air Force Base',
    latitude: 29.38419914,
    longitude: -98.58110046
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'HGR',
    icao: 'KHGR',
    airport: 'Hagerstown Regional Airport (Richard A. Henson Field)',
    latitude: 39.707901,
    longitude: -77.72949982
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SKK',
    icao: 'PFSH',
    airport: 'Shaktoolik Airport',
    latitude: 64.37110138,
    longitude: -161.223999
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'HFF',
    icao: 'KHFF',
    airport: 'Mackall Army Airfield',
    latitude: 35.036288,
    longitude: -79.497755
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'HFD',
    icao: 'KHFD',
    airport: 'Hartford-Brainard Airport',
    latitude: 41.73669815,
    longitude: -72.6493988
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SKW',
    icao: 'PASW',
    airport: 'Skwentna Airport',
    latitude: 61.96530151,
    longitude: -151.1909943
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'HEZ',
    icao: 'KHEZ',
    airport: 'Natchez-Adams County Airport (Hardy-Anders Field)',
    latitude: 31.613738,
    longitude: -91.297313
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'SLB',
    icao: 'KSLB',
    airport: 'Storm Lake Municipal Airport',
    latitude: 42.59730148,
    longitude: -95.24069977
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'SLC',
    icao: 'KSLC',
    airport: 'Salt Lake City International Airport',
    latitude: 40.78839874,
    longitude: -111.9779968
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'SLE',
    icao: 'KSLE',
    airport: 'McNary Field',
    latitude: 44.90950012,
    longitude: -123.0029984
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'SLG',
    icao: 'KSLG',
    airport: 'Smith Field',
    latitude: 36.19189835,
    longitude: -94.48999786
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'FOB',
    icao: '',
    airport: 'Fort Bragg Airport',
    latitude: 39.47430038,
    longitude: -123.7959976
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'HES',
    icao: 'KHRI',
    airport: 'Hermiston Municipal Airport',
    latitude: 45.828223,
    longitude: -119.259024
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'SLK',
    icao: 'KSLK',
    airport: 'Adirondack Regional Airport',
    latitude: 44.38529968,
    longitude: -74.20619965
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'SLN',
    icao: 'KSLN',
    airport: 'Salina Regional Airport',
    latitude: 38.79100037,
    longitude: -97.65219879
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'SLO',
    icao: 'KSLO',
    airport: 'Salem-Leckrone Airport',
    latitude: 38.64289856,
    longitude: -88.96420288
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SLQ',
    icao: 'PASL',
    airport: 'Sleetmute Airport',
    latitude: 61.70050049,
    longitude: -157.1660004
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SLR',
    icao: 'KSLR',
    airport: 'Sulphur Springs Municipal Airport',
    latitude: 33.15980148,
    longitude: -95.62110138
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'SLT',
    icao: 'KANK',
    airport: 'Harriet Alexander Field',
    latitude: 38.5383,
    longitude: -106.049004
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'HEE',
    icao: 'KHEE',
    airport: 'Thompson-Robbins Airport',
    latitude: 34.576571,
    longitude: -90.67616
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HED',
    icao: '',
    airport: 'Herendeen Bay Airport',
    latitude: 55.80139923,
    longitude: -160.8990021
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'SME',
    icao: 'KSME',
    airport: 'Lake Cumberland Regional Airport',
    latitude: 37.05339813,
    longitude: -84.61589813
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SMF',
    icao: 'KSMF',
    airport: 'Sacramento International Airport',
    latitude: 38.69540024,
    longitude: -121.5910034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SMK',
    icao: 'PAMK',
    airport: 'St. Michael Airport',
    latitude: 63.49010086,
    longitude: -162.1100006
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'HDN',
    icao: 'KHDN',
    airport: 'Yampa Valley Airport',
    latitude: 40.48120117,
    longitude: -107.2180023
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'SMN',
    icao: 'KSMN',
    airport: 'Lemhi County Airport',
    latitude: 45.12379837,
    longitude: -113.8809967
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SMO',
    icao: 'KSMO',
    airport: 'Santa Monica Municipal Airport',
    latitude: 34.0158,
    longitude: -118.450996
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'HDH',
    icao: 'PHDH',
    airport: 'Dillingham Airfield',
    latitude: 21.5795002,
    longitude: -158.1970062
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'HDE',
    icao: 'KHDE',
    airport: 'Brewster Field',
    latitude: 40.452099,
    longitude: -99.336502
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SMU',
    icao: 'PASP',
    airport: 'Sheep Mountain Airport',
    latitude: 61.81200027,
    longitude: -147.5070038
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SMX',
    icao: 'KSMX',
    airport: 'Santa Maria Public Airport (Capt. G. Allan Hancock Field)',
    latitude: 34.89889908,
    longitude: -120.4570007
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SNA',
    icao: 'KSNA',
    airport: 'John Wayne Airport (Orange County Airport)',
    latitude: 33.67570114,
    longitude: -117.8679962
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'HCW',
    icao: 'KCQW',
    airport: 'Cheraw Municipal Airport (Lynch Bellinger Field',
    latitude: 34.71289825,
    longitude: -79.95700073
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HCR',
    icao: 'PAHC',
    airport: 'Holy Cross Airport',
    latitude: 62.18830109,
    longitude: -159.7749939
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'HCC',
    icao: '',
    airport: 'Columbia County Airport',
    latitude: 42.29130173,
    longitude: -73.71029663
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HCA',
    icao: 'KBPG',
    airport: 'Big Spring McMahon-Wrinkle Airport',
    latitude: 32.212601,
    longitude: -101.522003
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SNK',
    icao: 'KSNK',
    airport: 'Winston Field Airport',
    latitude: 32.69340134,
    longitude: -100.9499969
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'SNL',
    icao: 'KSNL',
    airport: 'Shawnee Regional Airport',
    latitude: 35.35789871,
    longitude: -96.94280243
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SNP',
    icao: 'PASN',
    airport: 'St. Paul Island Airport',
    latitude: 57.16730118,
    longitude: -170.2200012
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'HBR',
    icao: 'KHBR',
    airport: 'Hobart Regional Airport',
    latitude: 34.991317,
    longitude: -99.051313
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SNS',
    icao: 'KSNS',
    airport: 'Salinas Municipal Airport',
    latitude: 36.66279984,
    longitude: -121.6060028
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'HBK',
    icao: '',
    airport: 'Holbrook Municipal Airport',
    latitude: 34.94070053,
    longitude: -110.1380005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HBH',
    icao: '',
    airport: 'Entrance Island Seaplane Base (Hobart Bay)',
    latitude: 57.412201,
    longitude: -133.43848
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'SNY',
    icao: 'KSNY',
    airport: 'Sidney Municipal Airport (Lloyd W. Carr Field)',
    latitude: 41.10129929,
    longitude: -102.9850006
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'HBG',
    icao: 'KHBG',
    airport: 'Hattiesburg Bobby L. Chain Municipal Airport',
    latitude: 31.26479912,
    longitude: -89.25279999
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'HBB',
    icao: '',
    airport: 'Hobbs Industrial Airpark',
    latitude: 32.7668,
    longitude: -103.209
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'HAR',
    icao: 'KCXY',
    airport: 'Capital City Airport',
    latitude: 40.21709824,
    longitude: -76.85150146
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SOL',
    icao: '',
    airport: 'Solomon State Field Airport',
    latitude: 64.5605,
    longitude: -164.4457
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'SOP',
    icao: 'KSOP',
    airport: 'Moore County Airport',
    latitude: 35.23740005,
    longitude: -79.3911972
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'HAO',
    icao: 'KHAO',
    airport: 'Butler County Regional Airport',
    latitude: 39.36380005,
    longitude: -84.52200317
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SOV',
    icao: 'PASO',
    airport: 'Seldovia Airport',
    latitude: 59.44240189,
    longitude: -151.7039948
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'SOW',
    icao: 'KSOW',
    airport: 'Show Low Regional Airport',
    latitude: 34.26549912,
    longitude: -110.0059967
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'HAI',
    icao: 'KHAI',
    airport: 'Three Rivers Municipal Airport (Dr. Haines Flying Field)',
    latitude: 41.95980072,
    longitude: -85.59339905
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'HAF',
    icao: 'KHAF',
    airport: 'Half Moon Bay Airport',
    latitude: 37.51340103,
    longitude: -122.5009995
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SPA',
    icao: 'KSPA',
    airport: 'Spartanburg Downtown Memorial Airport',
    latitude: 34.91569901,
    longitude: -81.95649719
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'HAB',
    icao: 'KHAB',
    airport: 'Marion County - Rankin Fite Airport',
    latitude: 34.11759949,
    longitude: -87.99819946
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'SPF',
    icao: 'KSPF',
    airport: 'Black Hills Airport (Clyde Ice Field)',
    latitude: 44.4803009,
    longitude: -103.7829971
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'SPG',
    icao: 'KSPG',
    airport: 'Albert Whitted Airport',
    latitude: 27.7651,
    longitude: -82.626999
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'SPI',
    icao: 'KSPI',
    airport: 'Abraham Lincoln Capital Airport',
    latitude: 39.84410095,
    longitude: -89.67790222
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'GYR',
    icao: 'KGYR',
    airport: 'Phoenix Goodyear Airport',
    latitude: 33.42250061,
    longitude: -112.3759995
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SPS',
    icao: 'KSPS',
    airport: 'Sheppard Air Force Base / Wichita Falls Municipal Airport',
    latitude: 33.9888,
    longitude: -98.491898
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'SPW',
    icao: 'KSPW',
    airport: 'Spencer Municipal Airport',
    latitude: 43.16550064,
    longitude: -95.20279694
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'SPZ',
    icao: 'KASG',
    airport: 'Springdale Municipal Airport',
    latitude: 36.17639923,
    longitude: -94.11930084
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SQA',
    icao: 'KIZA',
    airport: 'Santa Ynez Airport',
    latitude: 34.60680008,
    longitude: -120.0759964
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'GXY',
    icao: 'KGXY',
    airport: 'Greeley-Weld County Airport',
    latitude: 40.43740082,
    longitude: -104.6330032
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'GWV',
    icao: '',
    airport: 'Glendale Fokker Field',
    latitude: 39.94869995,
    longitude: -80.7594986
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'GWS',
    icao: 'KGWS',
    airport: 'Glenwood Springs Municipal Airport',
    latitude: 39.50830078,
    longitude: -107.310997
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'SQI',
    icao: 'KSQI',
    airport: 'Whiteside County Airport (Jos. H. Bittorf Field)',
    latitude: 41.74280167,
    longitude: -89.67630005
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'GWO',
    icao: 'KGWO',
    airport: 'Greenwood-Leflore Airport',
    latitude: 33.49430084,
    longitude: -90.08470154
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SQL',
    icao: 'KSQL',
    airport: 'San Carlos Airport',
    latitude: 37.51190186,
    longitude: -122.25
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SQV',
    icao: '',
    airport: 'Sequim Valley Airport',
    latitude: 48.09809875,
    longitude: -123.1869965
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'GVT',
    icao: 'KGVT',
    airport: 'Majors Airport',
    latitude: 33.06779861,
    longitude: -96.06529999
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'GVL',
    icao: 'KGVL',
    airport: 'Lee Gilmer Memorial Airport',
    latitude: 34.27259827,
    longitude: -83.8302002
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'GVE',
    icao: 'KGVE',
    airport: 'Gordonsville Municipal Airport',
    latitude: 38.15599823,
    longitude: -78.165802
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'GUY',
    icao: 'KGUY',
    airport: 'Guymon Municipal Airport',
    latitude: 36.68510056,
    longitude: -101.5080032
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'SRC',
    icao: 'KSRC',
    airport: 'Searcy Municipal Airport',
    latitude: 35.21061,
    longitude: -91.737539
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SRF',
    icao: '',
    airport: 'San Rafael Airport (Hamilton Field)',
    latitude: 38.06,
    longitude: -122.51
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'GUP',
    icao: 'KGUP',
    airport: 'Gallup Municipal Airport',
    latitude: 35.51110077,
    longitude: -108.7890015
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'GUF',
    icao: 'KJKA',
    airport: 'Jack Edwards Airport',
    latitude: 30.29050064,
    longitude: -87.67179871
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'SRQ',
    icao: 'KSRQ',
    airport: 'Sarasota-Bradenton International Airport',
    latitude: 27.39539909,
    longitude: -82.55439758
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'GUC',
    icao: 'KGUC',
    airport: 'Gunnison-Crested Butte Regional Airport',
    latitude: 38.53390121,
    longitude: -106.9329987
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SRV',
    icao: '',
    airport: 'Stony River Airport',
    latitude: 61.78969955,
    longitude: -156.5890045
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'SRW',
    icao: 'KRUQ',
    airport: 'Rowan County Airport',
    latitude: 35.645901,
    longitude: -80.520302
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'GTY',
    icao: '',
    airport: 'Gettysburg Regional Airport',
    latitude: 39.84090042,
    longitude: -77.27420044
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'GTR',
    icao: 'KGTR',
    airport: 'Golden Triangle Regional Airport',
    latitude: 33.45029831,
    longitude: -88.59140015
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'GTP',
    icao: '',
    airport: 'Grants Pass Airport',
    latitude: 42.510101,
    longitude: -123.388
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'SSC',
    icao: 'KSSC',
    airport: 'Shaw Air Force Base',
    latitude: 33.97269821,
    longitude: -80.47059631
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SSF',
    icao: 'KSSF',
    airport: 'Stinson Municipal Airport',
    latitude: 29.33699989,
    longitude: -98.47109985
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'GTG',
    icao: 'KGTG',
    airport: 'Grantsburg Municipal Airport',
    latitude: 45.79809952,
    longitude: -92.66439819
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'SSI',
    icao: 'KSSI',
    airport: 'Malcolm McKinnon Airport',
    latitude: 31.1518,
    longitude: -81.391296
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'GTF',
    icao: 'KGTF',
    airport: 'Great Falls International Airport',
    latitude: 47.48199844,
    longitude: -111.3710022
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GST',
    icao: 'PAGS',
    airport: 'Gustavus Airport',
    latitude: 58.4253006,
    longitude: -135.7070007
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SSW',
    icao: '',
    airport: 'Stuart Island Airpark',
    latitude: 48.67290115,
    longitude: -123.1760025
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'GSP',
    icao: 'KGSP',
    airport: 'Greenville-Spartanburg International Airport',
    latitude: 34.89569855,
    longitude: -82.21890259
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'GSO',
    icao: 'KGSO',
    airport: 'Piedmont Triad International Airport',
    latitude: 36.09780121,
    longitude: -79.93730164
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'STC',
    icao: 'KSTC',
    airport: 'St. Cloud Regional Airport',
    latitude: 45.54660034,
    longitude: -94.05989838
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'STE',
    icao: 'KSTE',
    airport: 'Stevens Point Municipal Airport',
    latitude: 44.54520035,
    longitude: -89.53029633
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'GSB',
    icao: 'KGSB',
    airport: 'Seymour Johnson Air Force Base',
    latitude: 35.33940125,
    longitude: -77.96060181
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'STG',
    icao: 'PAPB',
    airport: 'St. George Airport',
    latitude: 56.57830048,
    longitude: -169.6620026
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'STJ',
    icao: 'KSTJ',
    airport: 'Rosecrans Memorial Airport',
    latitude: 39.77190018,
    longitude: -94.90969849
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'STK',
    icao: 'KSTK',
    airport: 'Sterling Municipal Airport',
    latitude: 40.61529922,
    longitude: -103.2649994
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'STL',
    icao: 'KSTL',
    airport: 'Lambert-St. Louis International Airport',
    latitude: 38.748697,
    longitude: -90.370003
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'STP',
    icao: 'KSTP',
    airport: 'St. Paul Downtown Airport (Holman Field)',
    latitude: 44.93450165,
    longitude: -93.05999756
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'STQ',
    icao: 'KOYM',
    airport: 'St. Marys Municipal Airport',
    latitude: 41.41249847,
    longitude: -78.50260162
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'GRR',
    icao: 'KGRR',
    airport: 'Gerald R. Ford International Airport',
    latitude: 42.88079834,
    longitude: -85.52279663
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'STS',
    icao: 'KSTS',
    airport: 'Charles M. Schulz-Sonoma County A',
    latitude: 38.50899887,
    longitude: -122.8130035
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'GRN',
    icao: 'KGRN',
    airport: 'Gordon Municipal Airport',
    latitude: 42.80599976,
    longitude: -102.1750031
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'SUA',
    icao: 'KSUA',
    airport: 'Witham Field',
    latitude: 27.18169975,
    longitude: -80.22109985
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'GRM',
    icao: 'KCKC',
    airport: 'Grand Marais/Cook County Airport',
    latitude: 47.8382988,
    longitude: -90.38289642
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'SUD',
    icao: 'KSUD',
    airport: 'Stroud Municipal Airport',
    latitude: 35.78960037,
    longitude: -96.65570068
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'SUE',
    icao: 'KSUE',
    airport: 'Door County Cherryland Airport',
    latitude: 44.84370041,
    longitude: -87.42150116
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'GRK',
    icao: 'KGRK',
    airport: 'Killeen-Fort Hood Regional Airport / Robert Gray Army Airfield',
    latitude: 31.06719971,
    longitude: -97.8289032
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SUM',
    icao: 'KSMS',
    airport: 'Sumter Airport',
    latitude: 33.99499893,
    longitude: -80.36129761
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'SUN',
    icao: 'KSUN',
    airport: 'Friedman Memorial Airport',
    latitude: 43.50439835,
    longitude: -114.2959976
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'SUO',
    icao: '',
    airport: 'Sunriver Airport',
    latitude: 43.87630081,
    longitude: -121.4530029
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'GRI',
    icao: 'KGRI',
    airport: 'Central Nebraska Regional Airport',
    latitude: 40.96749878,
    longitude: -98.30960083
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'GRF',
    icao: 'KGRF',
    airport: 'Gray Army Airfield',
    latitude: 47.07920074,
    longitude: -122.5810013
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'SUS',
    icao: 'KSUS',
    airport: 'Spirit of St. Louis Airport',
    latitude: 38.66210175,
    longitude: -90.65200043
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SUU',
    icao: 'KSUU',
    airport: 'Travis Air Force Base',
    latitude: 38.26269913,
    longitude: -121.927002
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'GRE',
    icao: 'KGRE',
    airport: 'Greenville Airport',
    latitude: 38.83620071,
    longitude: -89.37840271
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'SUW',
    icao: 'KSUW',
    airport: 'Richard I. Bong Airport',
    latitude: 46.68970108,
    longitude: -92.09470367
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'SUX',
    icao: 'KSUX',
    airport: 'Sioux Gateway Airport (Colonel Bud Day Field)',
    latitude: 42.402599,
    longitude: -96.384399
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SVA',
    icao: 'PASA',
    airport: 'Savoonga Airport',
    latitude: 63.68640137,
    longitude: -170.4929962
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'GRD',
    icao: 'KGRD',
    airport: 'Greenwood County Airport',
    latitude: 34.24869919,
    longitude: -82.15910339
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'SVC',
    icao: 'KSVC',
    airport: 'Grant County Airport',
    latitude: 32.63650131,
    longitude: -108.1559982
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SVE',
    icao: 'KSVE',
    airport: 'Susanville Municipal Airport',
    latitude: 40.3757019,
    longitude: -120.572998
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'SVH',
    icao: 'KSVH',
    airport: 'Statesville Regional Airport',
    latitude: 35.76530075,
    longitude: -80.9539032
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'GRB',
    icao: 'KGRB',
    airport: 'Austin Straubel International Airport',
    latitude: 44.48509979,
    longitude: -88.12960052
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'GQQ',
    icao: 'KGQQ',
    airport: 'Galion Municipal Airport',
    latitude: 40.7533989,
    longitude: -82.72380066
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'GPZ',
    icao: 'KGPZ',
    airport: 'Grand Rapids-Itasca County Airport (Gordon Newstrom Field)',
    latitude: 47.21110153,
    longitude: -93.50980377
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'GPT',
    icao: 'KGPT',
    airport: 'Gulfport-Biloxi International Airport',
    latitude: 30.40730095,
    longitude: -89.07009888
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'SVN',
    icao: 'KSVN',
    airport: 'Hunter Army Airfield',
    latitude: 32.00999832,
    longitude: -81.14569855
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'GON',
    icao: 'KGON',
    airport: 'Groton-New London Airport',
    latitude: 41.33010101,
    longitude: -72.04509735
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SVS',
    icao: '',
    airport: 'Stevens Village Airport',
    latitude: 66.0172,
    longitude: -149.0545
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'GOL',
    icao: '',
    airport: 'Gold Beach Municipal Airport',
    latitude: 42.41339874,
    longitude: -124.4240036
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'GOK',
    icao: 'KGOK',
    airport: 'Guthrie-Edmond Regional Airport',
    latitude: 35.84980011,
    longitude: -97.41560364
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SVW',
    icao: 'PASV',
    airport: 'Sparrevohn LRRS Airport',
    latitude: 61.09740067,
    longitude: -155.5740051
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SWD',
    icao: 'PAWD',
    airport: 'Seward Airport',
    latitude: 60.12689972,
    longitude: -149.4190063
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'SWF',
    icao: 'KSWF',
    airport: 'Stewart International Airport',
    latitude: 41.504101,
    longitude: -74.104797
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'GNV',
    icao: 'KGNV',
    airport: 'Gainesville Regional Airport',
    latitude: 29.69009972,
    longitude: -82.27179718
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GNU',
    icao: '',
    airport: 'Goodnews Airport',
    latitude: 59.11740112,
    longitude: -161.5769959
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'SWO',
    icao: 'KSWO',
    airport: 'Stillwater Regional Airport',
    latitude: 36.16120148,
    longitude: -97.08570099
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'GNT',
    icao: 'KGNT',
    airport: 'Grants-Milan Municipal Airport',
    latitude: 35.16730118,
    longitude: -107.9020004
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SWW',
    icao: 'KSWW',
    airport: 'Avenger Field',
    latitude: 32.4673996,
    longitude: -100.4670029
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'GNG',
    icao: 'KGNG',
    airport: 'Gooding Municipal Airport',
    latitude: 42.91719818,
    longitude: -114.7649994
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'GNF',
    icao: '',
    airport: 'Gansner Field',
    latitude: 39.943902,
    longitude: -120.945
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'GMV',
    icao: '',
    airport: 'Monument Valley Airport',
    latitude: 37.01670074,
    longitude: -110.2009964
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'GMU',
    icao: 'KGMU',
    airport: 'Greenville Downtown Airport',
    latitude: 34.84790039,
    longitude: -82.34999847
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GMT',
    icao: 'PAGZ',
    airport: 'Granite Mountain Air Station',
    latitude: 65.40209961,
    longitude: -161.2810059
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SXP',
    icao: '',
    airport: 'Sheldon Point Airport',
    latitude: 62.520599,
    longitude: -164.848006
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SXQ',
    icao: 'PASX',
    airport: 'Soldotna Airport',
    latitude: 60.47570038,
    longitude: -151.0339966
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'GLW',
    icao: 'KGLW',
    airport: 'Glasgow Municipal Airport',
    latitude: 37.03179932,
    longitude: -85.9536972
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GLV',
    icao: 'PAGL',
    airport: 'Golovin Airport',
    latitude: 64.55049896,
    longitude: -163.0070038
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'SXY',
    icao: '',
    airport: 'Sidney Municipal Airport',
    latitude: 42.30260086,
    longitude: -75.41600037
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SYA',
    icao: 'PASY',
    airport: 'Eareckson Air Station',
    latitude: 52.71229935,
    longitude: 174.1139984
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SYB',
    icao: '',
    airport: 'Seal Bay Seaplane Base',
    latitude: 58.3733,
    longitude: -152.2018
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'GLS',
    icao: 'KGLS',
    airport: 'Scholes International Airport at Galveston',
    latitude: 29.26530075,
    longitude: -94.86039734
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'GLR',
    icao: 'KGLR',
    airport: 'Gaylord Regional Airport',
    latitude: 45.01350021,
    longitude: -84.70359802
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'SYI',
    icao: 'KSYI',
    airport: 'Shelbyville Municipal Airport (Bomar Field)',
    latitude: 35.56010056,
    longitude: -86.44249725
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'SYN',
    icao: 'KSYN',
    airport: 'Stanton Airfield',
    latitude: 44.4754982,
    longitude: -93.01629639
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'GLH',
    icao: 'KGLH',
    airport: 'Mid-Delta Regional Airport',
    latitude: 33.48289871,
    longitude: -90.98560333
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'GLE',
    icao: 'KGLE',
    airport: 'Gainesville Municipal Airport',
    latitude: 33.65140152,
    longitude: -97.1969986
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'SYR',
    icao: 'KSYR',
    airport: 'Syracuse Hancock International Airport',
    latitude: 43.11119843,
    longitude: -76.10630035
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'GLD',
    icao: 'KGLD',
    airport: 'Goodland Municipal Airport (Renner Field)',
    latitude: 39.37060165,
    longitude: -101.6989975
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'GLB',
    icao: '',
    airport: 'San Carlos Apache Airport',
    latitude: 33.35309982,
    longitude: -110.6669998
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'SYV',
    icao: 'KSYV',
    airport: 'Sylvester Airport',
    latitude: 31.55850029,
    longitude: -83.89569855
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'GKT',
    icao: 'KGKT',
    airport: 'Gatlinburg-Pigeon Forge Airport',
    latitude: 35.85779953,
    longitude: -83.52870178
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GKN',
    icao: 'PAGK',
    airport: 'Gulkana Airport',
    latitude: 62.1548996,
    longitude: -145.4570007
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'GJT',
    icao: 'KGJT',
    airport: 'Grand Junction Regional Airport (Walker Field)',
    latitude: 39.12239838,
    longitude: -108.5270004
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'SZL',
    icao: 'KSZL',
    airport: 'Whiteman Air Force Base',
    latitude: 38.7303009,
    longitude: -93.54789734
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SZN',
    icao: 'KSZN',
    airport: 'Santa Cruz Island Airport',
    latitude: 34.06060028,
    longitude: -119.9150009
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SZP',
    icao: 'KSZP',
    airport: 'Santa Paula Airport',
    latitude: 34.34719849,
    longitude: -119.060997
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'TAD',
    icao: 'KTAD',
    airport: 'Perry Stokes Airport',
    latitude: 37.25939941,
    longitude: -104.3410034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TAL',
    icao: 'PATA',
    airport: 'Ralph M. Calhoun Memorial Airport',
    latitude: 65.17440033,
    longitude: -152.1089935
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'GIF',
    icao: 'KGIF',
    airport: 'Winter Haven Gilbert Airport',
    latitude: 28.062901,
    longitude: -81.753304
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'GHM',
    icao: 'KGHM',
    airport: 'Centerville Municipal Airport',
    latitude: 35.83739853,
    longitude: -87.44539642
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'GGW',
    icao: 'KGGW',
    airport: 'Glasgow Airport (Wokal Field)',
    latitude: 48.212502,
    longitude: -106.614998
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'TBC',
    icao: '',
    airport: 'Tuba City Airport',
    latitude: 36.09280014,
    longitude: -111.3830032
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'GGG',
    icao: 'KGGG',
    airport: 'East Texas Regional Airport',
    latitude: 32.38399887,
    longitude: -94.71150208
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'AAF',
    icao: 'KAAF',
    airport: 'Apalachicola Regional Airport',
    latitude: 29.72750092,
    longitude: -85.02749634
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'ABE',
    icao: 'KABE',
    airport: 'Lehigh Valley International Airport',
    latitude: 40.65209961,
    longitude: -75.44080353
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ABI',
    icao: 'KABI',
    airport: 'Abilene Regional Airport',
    latitude: 32.41130066,
    longitude: -99.68190002
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'GGE',
    icao: 'KGGE',
    airport: 'Georgetown County Airport',
    latitude: 33.31169891,
    longitude: -79.31960297
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ABL',
    icao: 'PAFM',
    airport: 'Ambler Airport',
    latitude: 67.1063,
    longitude: -157.856989
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ABQ',
    icao: 'KABQ',
    airport: 'Albuquerque International Sunport',
    latitude: 35.040199,
    longitude: -106.609001
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'GFL',
    icao: 'KGFL',
    airport: 'Floyd Bennett Memorial Airport',
    latitude: 43.34120178,
    longitude: -73.61029816
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'TBN',
    icao: 'KTBN',
    airport: 'Waynesville-St. Robert Regional Airport (Forney Field)',
    latitude: 37.74160004,
    longitude: -92.14070129
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'ABR',
    icao: 'KABR',
    airport: 'Aberdeen Regional Airport',
    latitude: 45.44910049,
    longitude: -98.42179871
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'ABY',
    icao: 'KABY',
    airport: 'Southwest Georgia Regional Airport',
    latitude: 31.53549957,
    longitude: -84.19450378
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'TBR',
    icao: 'KTBR',
    airport: 'Statesboro-Bulloch County Airport',
    latitude: 32.48270035,
    longitude: -81.73690033
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'GFK',
    icao: 'KGFK',
    airport: 'Grand Forks International Airport',
    latitude: 47.949299,
    longitude: -97.176102
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'GEY',
    icao: 'KGEY',
    airport: 'South Big Horn County Airport',
    latitude: 44.51679993,
    longitude: -108.0830002
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ACB',
    icao: 'KACB',
    airport: 'Antrim County Airport',
    latitude: 44.988602,
    longitude: -85.198402
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'ACK',
    icao: 'KACK',
    airport: 'Nantucket Memorial Airport',
    latitude: 41.25310135,
    longitude: -70.06020355
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ACT',
    icao: 'KACT',
    airport: 'Waco Regional Airport',
    latitude: 31.61129951,
    longitude: -97.23049927
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'ACV',
    icao: 'KACV',
    airport: 'Arcata-Eureka Airport',
    latitude: 40.978101,
    longitude: -124.109
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'GEG',
    icao: 'KGEG',
    airport: 'Spokane International Airport',
    latitude: 47.61989975,
    longitude: -117.5339966
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'ACY',
    icao: 'KACY',
    airport: 'Atlantic City International Airport',
    latitude: 39.45759964,
    longitude: -74.57720184
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'TCC',
    icao: 'KTCC',
    airport: 'Tucumcari Municipal Airport',
    latitude: 35.18280029,
    longitude: -103.6029968
  },
  {
    country_code: 'US',
    region_name: 'Delaware',
    iata: 'GED',
    icao: 'KGED',
    airport: 'Delaware Coastal Airport',
    latitude: 38.68920135,
    longitude: -75.35890198
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ADG',
    icao: 'KADG',
    airport: 'Lenawee County Airport',
    latitude: 41.86769867,
    longitude: -84.07730103
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ADK',
    icao: 'PADK',
    airport: 'Adak Airport',
    latitude: 51.87799835,
    longitude: -176.6459961
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'ADM',
    icao: 'KADM',
    airport: 'Ardmore Municipal Airport',
    latitude: 34.30301,
    longitude: -97.0196342
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ADQ',
    icao: 'PADQ',
    airport: 'Kodiak Airport',
    latitude: 57.75,
    longitude: -152.4940033
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'GDW',
    icao: 'KGDW',
    airport: 'Gladwin Zettel Memorial Airport',
    latitude: 43.97060013,
    longitude: -84.47499847
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'TCL',
    icao: 'KTCL',
    airport: 'Tuscaloosa Regional Airport',
    latitude: 33.22060013,
    longitude: -87.61139679
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'TCM',
    icao: 'KTCM',
    airport: 'McChord Field',
    latitude: 47.13769913,
    longitude: -122.4759979
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ADR',
    icao: 'KPHH',
    airport: 'Robert F. Swinnie Airport',
    latitude: 33.4516983,
    longitude: -79.52619934
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'GDV',
    icao: 'KGDV',
    airport: 'Dawson Community Airport',
    latitude: 47.13869858,
    longitude: -104.8069992
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ADS',
    icao: 'KADS',
    airport: 'Addison Airport',
    latitude: 32.96860123,
    longitude: -96.83640289
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'ADT',
    icao: 'KADH',
    airport: 'Ada Municipal Airport',
    latitude: 34.804298,
    longitude: -96.671303
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'TCS',
    icao: 'KTCS',
    airport: 'Truth or Consequences Municipal Airport',
    latitude: 33.23690033,
    longitude: -107.2720032
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TCT',
    icao: '',
    airport: 'Takotna Airport',
    latitude: 62.993206,
    longitude: -156.029026
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'ADW',
    icao: 'KADW',
    airport: 'Andrews Field (Andrews Air Force Base)',
    latitude: 38.810799,
    longitude: -76.866997
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'GDM',
    icao: 'KGDM',
    airport: 'Gardner Municipal Airport',
    latitude: 42.54999924,
    longitude: -72.01609802
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'AEL',
    icao: 'KAEL',
    airport: 'Albert Lea Municipal Airport',
    latitude: 43.68149948,
    longitude: -93.36720276
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GDH',
    icao: '',
    airport: 'Golden Horn Lodge Seaplane Base',
    latitude: 59.74700165,
    longitude: -158.875
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AET',
    icao: 'PFAL',
    airport: 'Allakaket Airport',
    latitude: 66.55180359,
    longitude: -152.621994
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'AEX',
    icao: 'KAEX',
    airport: 'Alexandria International Airport',
    latitude: 31.32740021,
    longitude: -92.54979706
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'GDC',
    icao: 'KGYH',
    airport: 'Donaldson Center Airport',
    latitude: 34.758301,
    longitude: -82.376404
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'AFF',
    icao: 'KAFF',
    airport: 'United States Air Force Academy Airfield',
    latitude: 38.96969986,
    longitude: -104.8130035
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'GCY',
    icao: 'KGCY',
    airport: 'Greeneville-Greene County Municipal Airport',
    latitude: 36.19300079,
    longitude: -82.81510162
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'GCW',
    icao: '',
    airport: 'Grand Canyon West Airport',
    latitude: 35.99039841,
    longitude: -113.8160019
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'TDO',
    icao: 'KTDO',
    airport: 'South Lewis County Airport (Ed Carlson Memorial Field)',
    latitude: 46.47719955,
    longitude: -122.8059998
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'AFN',
    icao: 'KAFN',
    airport: 'Jaffrey Airport-Silver Ranch',
    latitude: 42.80509949,
    longitude: -72.00299835
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'GCN',
    icao: 'KGCN',
    airport: 'Grand Canyon National Park Airport',
    latitude: 35.95240021,
    longitude: -112.1470032
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'AFO',
    icao: 'KAFO',
    airport: 'Afton Municipal Airport',
    latitude: 42.71120071,
    longitude: -110.9420013
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'AFW',
    icao: 'KAFW',
    airport: 'Fort Worth Alliance Airport',
    latitude: 32.98759842,
    longitude: -97.31880188
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'TDW',
    icao: 'KTDW',
    airport: 'Tradewind Airport',
    latitude: 35.16989899,
    longitude: -101.8259964
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'AGC',
    icao: 'KAGC',
    airport: 'Allegheny County Airport',
    latitude: 40.35440063,
    longitude: -79.93019867
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'TDZ',
    icao: 'KTDZ',
    airport: 'Toledo Executive Airport',
    latitude: 41.56489944,
    longitude: -83.4822998
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AGN',
    icao: 'PAGN',
    airport: 'Angoon Seaplane Base',
    latitude: 57.503601,
    longitude: -134.585007
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'TEB',
    icao: 'KTEB',
    airport: 'Teterboro Airport',
    latitude: 40.85010147,
    longitude: -74.06079865
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'GCK',
    icao: 'KGCK',
    airport: 'Garden City Regional Airport',
    latitude: 37.92750168,
    longitude: -100.723999
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'GCD',
    icao: '',
    airport: 'Grand Coulee Dam Airport',
    latitude: 47.92200089,
    longitude: -119.0830002
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'GCC',
    icao: 'KGCC',
    airport: 'Gillette-Campbell County Airport',
    latitude: 44.34889984,
    longitude: -105.5390015
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'AGO',
    icao: 'KAGO',
    airport: 'Magnolia Municipal Airport',
    latitude: 33.228001,
    longitude: -93.217002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TEH',
    icao: '',
    airport: 'Tetlin Airport',
    latitude: 63.133888,
    longitude: -142.51944
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'AGS',
    icao: 'KAGS',
    airport: 'Augusta Regional Airport at Bush Field',
    latitude: 33.36989975,
    longitude: -81.96450043
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TEK',
    icao: '',
    airport: 'Tatitlek Airport',
    latitude: 60.871449,
    longitude: -146.690297
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'AHC',
    icao: 'KAHC',
    airport: 'Amedee Army Airfield',
    latitude: 40.26620102,
    longitude: -120.1529999
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'GBR',
    icao: 'KGBR',
    airport: 'Walter J. Koladza Airport',
    latitude: 42.18420029,
    longitude: -73.40319824
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'AHD',
    icao: '',
    airport: 'Ardmore Downtown Executive Airport',
    latitude: 34.14699936,
    longitude: -97.12270355
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'AHF',
    icao: '',
    airport: 'Arapahoe Municipal Airport',
    latitude: 40.33950043,
    longitude: -99.90650177
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'AHH',
    icao: 'KAHH',
    airport: 'Amery Municipal Airport',
    latitude: 45.28110123,
    longitude: -92.37539673
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'AHM',
    icao: '',
    airport: 'Ashland Municipal Airport',
    latitude: 42.19029999,
    longitude: -122.6610031
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'AHN',
    icao: 'KAHN',
    airport: 'Athens Ben Epps Airport',
    latitude: 33.94860077,
    longitude: -83.32630157
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'AIA',
    icao: 'KAIA',
    airport: 'Alliance Municipal Airport',
    latitude: 42.05319977,
    longitude: -102.8040009
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GBH',
    icao: 'PAGB',
    airport: 'Galbraith Lake Airport',
    latitude: 68.47969818,
    longitude: -149.4900055
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'TEX',
    icao: 'KTEX',
    airport: 'Telluride Regional Airport',
    latitude: 37.9538002,
    longitude: -107.9079971
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'GBG',
    icao: 'KGBG',
    airport: 'Galesburg Municipal Airport',
    latitude: 40.93799973,
    longitude: -90.43109894
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'GBD',
    icao: 'KGBD',
    airport: 'Great Bend Municipal Airport',
    latitude: 38.34429932,
    longitude: -98.85919952
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'AIK',
    icao: 'KAIK',
    airport: 'Aiken Municipal Airport',
    latitude: 33.649399,
    longitude: -81.684998
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AIN',
    icao: 'PAWI',
    airport: 'Wainwright Airport',
    latitude: 70.63800049,
    longitude: -159.9949951
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'AIO',
    icao: 'KAIO',
    airport: 'Atlantic Municipal Airport',
    latitude: 41.40729904,
    longitude: -95.04689789
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'AIV',
    icao: 'KAIV',
    airport: 'George Downer Airport',
    latitude: 33.106499,
    longitude: -88.1978
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'AIZ',
    icao: 'KAIZ',
    airport: 'Lee C. Fine Memorial Airport',
    latitude: 38.09600067,
    longitude: -92.54949951
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GAM',
    icao: 'PAGM',
    airport: 'Gambell Airport',
    latitude: 63.76679993,
    longitude: -171.7330017
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AKB',
    icao: 'PAAK',
    airport: 'Atka Airport',
    latitude: 52.22029877,
    longitude: -174.2059937
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'AKC',
    icao: 'KAKR',
    airport: 'Akron Fulton International Airport',
    latitude: 41.03749847,
    longitude: -81.46690369
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AKI',
    icao: 'PFAK',
    airport: 'Akiak Airport',
    latitude: 60.9029007,
    longitude: -161.2310028
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AKK',
    icao: 'PAKH',
    airport: 'Akhiok Airport',
    latitude: 56.93870163,
    longitude: -154.1829987
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AKN',
    icao: 'PAKN',
    airport: 'King Salmon Airport',
    latitude: 58.67679977,
    longitude: -156.6490021
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'TGE',
    icao: '',
    airport: 'Sharpe Field',
    latitude: 32.4919014,
    longitude: -85.77559662
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'AKO',
    icao: 'KAKO',
    airport: 'Colorado Plains Regional Airport',
    latitude: 40.17559814,
    longitude: -103.2220001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AKP',
    icao: 'PAKP',
    airport: 'Anaktuvuk Pass Airport',
    latitude: 68.13359833,
    longitude: -151.7429962
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ALB',
    icao: 'KALB',
    airport: 'Albany International Airport',
    latitude: 42.74829865,
    longitude: -73.80169678
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ALE',
    icao: '',
    airport: 'Alpine-Casparis Municipal Airport',
    latitude: 30.38419914,
    longitude: -103.6839981
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ALI',
    icao: 'KALI',
    airport: 'Alice International Airport',
    latitude: 27.74090004,
    longitude: -98.02690125
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'GAL',
    icao: 'PAGA',
    airport: 'Edward G. Pitka Sr. Airport',
    latitude: 64.73619843,
    longitude: -156.9369965
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'GAI',
    icao: 'KGAI',
    airport: 'Montgomery County Airpark',
    latitude: 39.16830063,
    longitude: -77.16600037
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ALM',
    icao: 'KALM',
    airport: 'Alamogordo-White Sands Regional Airport',
    latitude: 32.83990097,
    longitude: -105.9909973
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'GAG',
    icao: 'KGAG',
    airport: 'Gage Airport',
    latitude: 36.29550171,
    longitude: -99.77639771
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'ALN',
    icao: 'KALN',
    airport: 'St. Louis Regional Airport',
    latitude: 38.89030075,
    longitude: -90.04599762
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'ALO',
    icao: 'KALO',
    airport: 'Waterloo Regional Airport',
    latitude: 42.55709839,
    longitude: -92.40029907
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'ALS',
    icao: 'KALS',
    airport: 'San Luis Valley Regional Airport',
    latitude: 37.434898,
    longitude: -105.866997
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'ALW',
    icao: 'KALW',
    airport: 'Walla Walla Regional Airport',
    latitude: 46.09489822,
    longitude: -118.288002
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'GAD',
    icao: 'KGAD',
    airport: 'Northeast Alabama Regional Airport',
    latitude: 33.972599,
    longitude: -86.088996
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'ALX',
    icao: 'KALX',
    airport: 'Thomas C. Russell Field',
    latitude: 32.91469955,
    longitude: -85.96299744
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'THA',
    icao: 'KTHA',
    airport: 'Tullahoma Regional Airport (William Northern Field)',
    latitude: 35.38010025,
    longitude: -86.24639893
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ALZ',
    icao: '',
    airport: 'Alitak Seaplane Base',
    latitude: 56.8995018,
    longitude: -154.2480011
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'AMA',
    icao: 'KAMA',
    airport: 'Rick Husband Amarillo International Airport',
    latitude: 35.219398,
    longitude: -101.706001
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'GAB',
    icao: 'KGAB',
    airport: 'Gabbs Airport',
    latitude: 38.92409897,
    longitude: -117.9589996
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'FYV',
    icao: 'KFYV',
    airport: 'Drake Field (Fayetteville Executive Airport)',
    latitude: 36.00510025,
    longitude: -94.17009735
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'AMK',
    icao: '',
    airport: 'Animas Air Park',
    latitude: 37.20320129,
    longitude: -107.8690033
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'AMN',
    icao: 'KAMN',
    airport: 'Gratiot Community Airport',
    latitude: 43.32210159,
    longitude: -84.68800354
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'AMW',
    icao: 'KAMW',
    airport: 'Ames Municipal Airport',
    latitude: 41.992001,
    longitude: -93.621803
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'ANB',
    icao: 'KANB',
    airport: 'Anniston Regional Airport',
    latitude: 33.5882,
    longitude: -85.8581
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'THM',
    icao: 'KTHM',
    airport: 'Thompson Falls Airport',
    latitude: 47.57350159,
    longitude: -115.2809982
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ANC',
    icao: 'PANC',
    airport: 'Ted Stevens Anchorage International Airport',
    latitude: 61.17440033,
    longitude: -149.9960022
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FYU',
    icao: 'PFYU',
    airport: 'Fort Yukon Airport',
    latitude: 66.57150269,
    longitude: -145.25
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'THP',
    icao: 'KTHP',
    airport: 'Hot Springs County-Thermopolis Municipal Airport',
    latitude: 43.713602,
    longitude: -108.389687
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'AND',
    icao: 'KAND',
    airport: 'Anderson Regional Airport',
    latitude: 34.49459839,
    longitude: -82.70939636
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'FYM',
    icao: 'KFYM',
    airport: 'Fayetteville Municipal Airport',
    latitude: 35.05970001,
    longitude: -86.56400299
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ANI',
    icao: 'PANI',
    airport: 'Aniak Airport',
    latitude: 61.58160019,
    longitude: -159.5429993
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ANN',
    icao: 'PANT',
    airport: 'Annette Island Airport',
    latitude: 55.04240036,
    longitude: -131.5720062
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'FXY',
    icao: 'KFXY',
    airport: 'Forest City Municipal Airport',
    latitude: 43.23469925,
    longitude: -93.62409973
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'THV',
    icao: 'KTHV',
    airport: 'York Airport',
    latitude: 39.91699982,
    longitude: -76.8730011
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'ANP',
    icao: 'KANP',
    airport: 'Lee Airport',
    latitude: 38.942902,
    longitude: -76.568398
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ANV',
    icao: 'PANV',
    airport: 'Anvik Airport',
    latitude: 62.646702,
    longitude: -160.190994
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'ANW',
    icao: 'KANW',
    airport: 'Ainsworth Regional Airport',
    latitude: 42.579201,
    longitude: -99.992995
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'ANY',
    icao: 'KANY',
    airport: 'Anthony Municipal Airport',
    latitude: 37.158501,
    longitude: -98.079597
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'FXE',
    icao: 'KFXE',
    airport: 'Fort Lauderdale Executive Airport',
    latitude: 26.19729996,
    longitude: -80.17070007
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'AOH',
    icao: 'KAOH',
    airport: 'Lima Allen County Airport',
    latitude: 40.706902,
    longitude: -84.026703
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FWL',
    icao: 'PAFW',
    airport: 'Farewell Airport',
    latitude: 62.509327,
    longitude: -153.892279
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'FWH',
    icao: 'KNFW',
    airport: 'NAS Fort Worth JRB / Carswell Field',
    latitude: 32.76919937,
    longitude: -97.4414978
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'AOO',
    icao: 'KAOO',
    airport: 'Altoona-Blair County Airport',
    latitude: 40.29639816,
    longitude: -78.31999969
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AOS',
    icao: '',
    airport: 'Amook Bay Seaplane Base',
    latitude: 57.4715004,
    longitude: -153.8150024
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'APA',
    icao: 'KAPA',
    airport: 'Centennial Airport',
    latitude: 39.57009888,
    longitude: -104.848999
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'APC',
    icao: 'KAPC',
    airport: 'Napa County Airport',
    latitude: 38.2132,
    longitude: -122.280998
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'TIK',
    icao: 'KTIK',
    airport: 'Tinker Air Force Base',
    latitude: 35.41469955,
    longitude: -97.38659668
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'APF',
    icao: 'KAPF',
    airport: 'Naples Municipal Airport',
    latitude: 26.15259933,
    longitude: -81.77529907
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'FUL',
    icao: 'KFUL',
    airport: 'Fullerton Municipal Airport',
    latitude: 33.87200165,
    longitude: -117.9800034
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'APG',
    icao: 'KAPG',
    airport: 'Phillips Army Airfield',
    latitude: 39.466202,
    longitude: -76.1688
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'APH',
    icao: 'KAPH',
    airport: 'A.P. Hill Army Airfield',
    latitude: 38.068902,
    longitude: -77.318298
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'APN',
    icao: 'KAPN',
    airport: 'Alpena County Regional Airport',
    latitude: 45.0780983,
    longitude: -83.56030273
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'FTY',
    icao: 'KFTY',
    airport: 'Fulton County Airport (Charlie Brown Field)',
    latitude: 33.77909851,
    longitude: -84.52140045
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'APT',
    icao: 'KAPT',
    airport: 'Marion County Airport (Brown Field)',
    latitude: 35.060699,
    longitude: -85.585297
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'APV',
    icao: 'KAPV',
    airport: 'Apple Valley Airport',
    latitude: 34.57529831,
    longitude: -117.185997
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'TIW',
    icao: 'KTIW',
    airport: 'Tacoma Narrows Airport',
    latitude: 47.26789856,
    longitude: -122.5780029
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TIX',
    icao: 'KTIX',
    airport: 'Space Coast Regional Airport',
    latitude: 28.51479912,
    longitude: -80.79920197
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AQY',
    icao: '',
    airport: 'Girdwood Airport',
    latitude: 60.966099,
    longitude: -149.126007
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'ARA',
    icao: 'KARA',
    airport: 'Acadiana Regional Airport',
    latitude: 30.0378,
    longitude: -91.883904
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'FTW',
    icao: 'KFTW',
    airport: 'Fort Worth Meacham International Airport',
    latitude: 32.819801,
    longitude: -97.362396
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ARB',
    icao: 'KARB',
    airport: 'Ann Arbor Municipal Airport',
    latitude: 42.22299957,
    longitude: -83.74559784
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'FTK',
    icao: 'KFTK',
    airport: 'Godman Army Airfield',
    latitude: 37.90710068,
    longitude: -85.9720993
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ARC',
    icao: 'PARC',
    airport: 'Arctic Village Airport',
    latitude: 68.1147,
    longitude: -145.578995
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'FTI',
    icao: 'NSFQ',
    airport: 'Fitiuta Airport',
    latitude: -14.2172,
    longitude: -169.425003
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'ARE',
    icao: 'TJAB',
    airport: 'Antonio (Nery) Juarbe Pol Airport',
    latitude: 18.45000076,
    longitude: -66.6753006
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'ARG',
    icao: 'KARG',
    airport: 'Walnut Ridge Regional Airport',
    latitude: 36.124667,
    longitude: -90.925111
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'FSU',
    icao: 'KFSU',
    airport: 'Fort Sumner Municipal Airport',
    latitude: 34.48339844,
    longitude: -104.2170029
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ART',
    icao: 'KART',
    airport: 'Watertown International Airport',
    latitude: 43.9919014,
    longitude: -76.021698
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'FST',
    icao: 'KFST',
    airport: 'Fort Stockton-Pecos County Airport',
    latitude: 30.91570091,
    longitude: -102.9160004
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TKA',
    icao: 'PATK',
    airport: 'Talkeetna Airport',
    latitude: 62.32049942,
    longitude: -150.0939941
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ARV',
    icao: 'KARV',
    airport: 'Lakeland Airport (Noble F. Lee Memorial Field)',
    latitude: 45.92789841,
    longitude: -89.73090363
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'FSM',
    icao: 'KFSM',
    airport: 'Fort Smith Regional Airport',
    latitude: 35.33660126,
    longitude: -94.36740112
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TKE',
    icao: '',
    airport: 'Tenakee Seaplane Base',
    latitude: 57.77970123,
    longitude: -135.2180023
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TKF',
    icao: 'KTRK',
    airport: 'Truckee Tahoe Airport',
    latitude: 39.31999969,
    longitude: -120.1399994
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'FSK',
    icao: 'KFSK',
    airport: 'Fort Scott Municipal Airport',
    latitude: 37.79840088,
    longitude: -94.76940155
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'ASE',
    icao: 'KASE',
    airport: 'Aspen-Pitkin County Airport (Sardy Field)',
    latitude: 39.22320175,
    longitude: -106.8690033
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TKI',
    icao: '',
    airport: 'Tokeen Seaplane Base',
    latitude: 55.93709946,
    longitude: -133.3269959
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TKJ',
    icao: 'PFTO',
    airport: 'Tok Junction Airport',
    latitude: 63.32949829,
    longitude: -142.9539948
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'FSI',
    icao: 'KFSI',
    airport: 'Henry Post Army Airfield (Fort Sill)',
    latitude: 34.64979935,
    longitude: -98.40219879
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TKL',
    icao: '',
    airport: 'Taku Lodge Seaplane Base',
    latitude: 58.48970032,
    longitude: -133.9429932
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'FSD',
    icao: 'KFSD',
    airport: 'Sioux Falls Regional Airport (Joe Foss Field)',
    latitude: 43.58200073,
    longitude: -96.74189758
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'ASH',
    icao: 'KASH',
    airport: 'Nashua Airport (Boire Field)',
    latitude: 42.78170013,
    longitude: -71.51480103
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ASL',
    icao: 'KASL',
    airport: 'Harrison County Airport',
    latitude: 32.52050018,
    longitude: -94.30780029
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'ASN',
    icao: 'KASN',
    airport: 'Talladega Municipal Airport',
    latitude: 33.56990051,
    longitude: -86.05090332
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'FRY',
    icao: 'KIZG',
    airport: 'Eastern Slopes Regional Airport',
    latitude: 43.99110031,
    longitude: -70.94789886
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'ASQ',
    icao: '',
    airport: 'Austin Airport',
    latitude: 39.467998,
    longitude: -117.195
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'AST',
    icao: 'KAST',
    airport: 'Astoria Regional Airport',
    latitude: 46.15800095,
    longitude: -123.8789978
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'FRR',
    icao: 'KFRR',
    airport: 'Front Royal-Warren County Airport',
    latitude: 38.91749954,
    longitude: -78.25350189
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ASX',
    icao: 'KASX',
    airport: 'John F. Kennedy Memorial Airport',
    latitude: 46.54850006,
    longitude: -90.91899872
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'ASY',
    icao: 'KASY',
    airport: 'Ashley Municipal Airport',
    latitude: 46.02389908,
    longitude: -99.3526001
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'ATE',
    icao: '',
    airport: 'Antlers Municipal Airport',
    latitude: 34.19260025,
    longitude: -95.64990234
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ATK',
    icao: 'PATQ',
    airport: 'Atqasuk Edward Burnell Sr. Memorial Airport',
    latitude: 70.46730042,
    longitude: -157.4360046
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TLA',
    icao: 'PATE',
    airport: 'Teller Airport',
    latitude: 65.24040222,
    longitude: -166.3390045
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'ATL',
    icao: 'KATL',
    airport: 'Hartsfield-Jackson Atlanta International Airport',
    latitude: 33.6367,
    longitude: -84.428101
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'ATO',
    icao: 'KUNI',
    airport: 'Ohio University Airport (Snyder Field)',
    latitude: 39.21099854,
    longitude: -82.23139954
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FRN',
    icao: 'PAFR',
    airport: 'Bryant Army Airport',
    latitude: 61.26639938,
    longitude: -149.6529999
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ATS',
    icao: 'KATS',
    airport: 'Artesia Municipal Airport',
    latitude: 32.85250092,
    longitude: -104.4680023
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TLF',
    icao: '',
    airport: 'Telida Airport',
    latitude: 63.39390182,
    longitude: -153.2689972
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ATT',
    icao: '',
    airport: 'Atmautluak Airport',
    latitude: 60.866699,
    longitude: -162.272995
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TLH',
    icao: 'KTLH',
    airport: 'Tallahassee International Airport',
    latitude: 30.39649963,
    longitude: -84.35030365
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TLJ',
    icao: 'PATL',
    airport: 'Tatalina LRRS Airport',
    latitude: 62.89440155,
    longitude: -155.977005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ATU',
    icao: 'PAAT',
    airport: 'Casco Cove Coast Guard Station',
    latitude: 52.82839966,
    longitude: 173.1799927
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'FRM',
    icao: 'KFRM',
    airport: 'Fairmont Municipal Airport',
    latitude: 43.64390183,
    longitude: -94.41560364
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ATW',
    icao: 'KATW',
    airport: 'Appleton International Airport',
    latitude: 44.2580986,
    longitude: -88.51909637
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'FRI',
    icao: 'KFRI',
    airport: 'Marshall Army Airfield',
    latitude: 39.05530167,
    longitude: -96.76450348
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'FRG',
    icao: 'KFRG',
    airport: 'Republic Airport',
    latitude: 40.72880173,
    longitude: -73.41339874
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TLR',
    icao: 'KTLR',
    airport: 'Mefford Field Airport',
    latitude: 36.15629959,
    longitude: -119.3259964
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'ATY',
    icao: 'KATY',
    airport: 'Watertown Regional Airport',
    latitude: 44.91400146,
    longitude: -97.15470123
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TLT',
    icao: '',
    airport: 'Tuluksak Airport',
    latitude: 61.09680176,
    longitude: -160.9689941
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'FRD',
    icao: 'KFHR',
    airport: 'Friday Harbor Airport',
    latitude: 48.52199936,
    longitude: -123.0240021
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'FPY',
    icao: '',
    airport: 'Perry-Foley Airport',
    latitude: 30.0692997,
    longitude: -83.58059692
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'AUG',
    icao: 'KAUG',
    airport: 'Augusta State Airport',
    latitude: 44.3205986,
    longitude: -69.79730225
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'FPR',
    icao: 'KFPR',
    airport: 'St. Lucie County International Airport',
    latitude: 27.49510002,
    longitude: -80.36830139
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'AUK',
    icao: '',
    airport: 'Alakanuk Airport',
    latitude: 62.68004227,
    longitude: -164.6599274
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'AUM',
    icao: 'KAUM',
    airport: 'Austin Municipal Airport',
    latitude: 43.66500092,
    longitude: -92.93340302
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'TMA',
    icao: 'KTMA',
    airport: 'Henry Tift Myers Airport',
    latitude: 31.42900085,
    longitude: -83.4885025
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TMB',
    icao: 'KTMB',
    airport: 'Miami Executive Airport',
    latitude: 25.6479,
    longitude: -80.4328
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'FOK',
    icao: 'KFOK',
    airport: 'Francis S. Gabreski Airport',
    latitude: 40.84370041,
    longitude: -72.63179779
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'AUN',
    icao: 'KAUN',
    airport: 'Auburn Municipal Airport',
    latitude: 38.95479965,
    longitude: -121.0820007
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'FOE',
    icao: 'KFOE',
    airport: 'Topeka Regional Airport',
    latitude: 38.95090103,
    longitude: -95.66359711
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'AUO',
    icao: 'KAUO',
    airport: 'Auburn University Regional Airport',
    latitude: 32.615101,
    longitude: -85.433998
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'AUS',
    icao: 'KAUS',
    airport: 'Austin-Bergstrom International Airport',
    latitude: 30.19449997,
    longitude: -97.66989899
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'AUW',
    icao: 'KAUW',
    airport: 'Wausau Downtown Airport',
    latitude: 44.92620087,
    longitude: -89.62660217
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'FOD',
    icao: 'KFOD',
    airport: 'Fort Dodge Regional Airport',
    latitude: 42.55149841,
    longitude: -94.19259644
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'AUZ',
    icao: 'KARR',
    airport: 'Aurora Municipal Airport',
    latitude: 41.77190018,
    longitude: -88.47570038
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'AVL',
    icao: 'KAVL',
    airport: 'Asheville Regional Airport',
    latitude: 35.43619919,
    longitude: -82.54180145
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'FNT',
    icao: 'KFNT',
    airport: 'Bishop International Airport',
    latitude: 42.9654007,
    longitude: -83.74359894
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FNR',
    icao: 'PANR',
    airport: 'Funter Bay Seaplane Base',
    latitude: 58.25439835,
    longitude: -134.897995
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'AVO',
    icao: 'KAVO',
    airport: 'Avon Park Executive Airport',
    latitude: 27.59119987,
    longitude: -81.52780151
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'FNL',
    icao: 'KFNL',
    airport: 'Fort Collins-Loveland Municipal Airport',
    latitude: 40.451804,
    longitude: -105.011
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'AVP',
    icao: 'KAVP',
    airport: 'Wilkes-Barre/Scranton International Airport',
    latitude: 41.33850098,
    longitude: -75.7233963
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'AVW',
    icao: 'KAVQ',
    airport: 'Marana Regional Airport',
    latitude: 32.4095993,
    longitude: -111.2180023
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'AVX',
    icao: 'KAVX',
    airport: 'Catalina Airport',
    latitude: 33.4049,
    longitude: -118.416
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'AWM',
    icao: 'KAWM',
    airport: 'West Memphis Municipal Airport',
    latitude: 35.13510132,
    longitude: -90.23439789
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'AXB',
    icao: '',
    airport: 'Maxson Airfield',
    latitude: 44.312002,
    longitude: -75.90034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TNC',
    icao: 'PATC',
    airport: 'Tin City LRRS Airport',
    latitude: 65.56310272,
    longitude: -167.9219971
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'FMY',
    icao: 'KFMY',
    airport: 'Page Field',
    latitude: 26.58659935,
    longitude: -81.86329651
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'FMU',
    icao: '',
    airport: 'Florence Municipal Airport',
    latitude: 43.98279953,
    longitude: -124.1110001
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'FMS',
    icao: 'KFSW',
    airport: 'Fort Madison Municipal Airport',
    latitude: 40.65930176,
    longitude: -91.32679749
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'AXG',
    icao: 'KAXA',
    airport: 'Algona Municipal Airport',
    latitude: 43.07789993,
    longitude: -94.27200317
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'FMN',
    icao: 'KFMN',
    airport: 'Four Corners Regional Airport',
    latitude: 36.74119949,
    longitude: -108.2300034
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'FMH',
    icao: 'KFMH',
    airport: 'Otis Air National Guard Base',
    latitude: 41.65840149,
    longitude: -70.52140045
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'FME',
    icao: 'KFME',
    airport: 'Tipton Airport',
    latitude: 39.08539963,
    longitude: -76.75939941
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TNK',
    icao: '',
    airport: 'Tununak Airport',
    latitude: 60.57550049,
    longitude: -165.2720032
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'AXN',
    icao: 'KAXN',
    airport: 'Alexandria Municipal Airport (Chandler Field)',
    latitude: 45.86629868,
    longitude: -95.3946991
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'FLX',
    icao: 'KFLX',
    airport: 'Fallon Municipal Airport',
    latitude: 39.49909973,
    longitude: -118.7490005
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'MGW',
    icao: 'KMGW',
    airport: 'Morgantown Municipal Airport (Walter L. Bill Hart Field)',
    latitude: 39.64289856,
    longitude: -79.91629791
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'MGY',
    icao: 'KMGY',
    airport: 'Dayton-Wright Brothers Airport',
    latitude: 39.5890007,
    longitude: -84.22489929
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TNP',
    icao: 'KTNP',
    airport: 'Twentynine Palms Airport',
    latitude: 34.13159943,
    longitude: -115.9459991
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MFI',
    icao: 'KMFI',
    airport: 'Marshfield Municipal Airport',
    latitude: 44.63690186,
    longitude: -90.18930054
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'MFH',
    icao: '',
    airport: 'Mesquite Airport',
    latitude: 36.83499908,
    longitude: -114.0550003
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'FLV',
    icao: 'KFLV',
    airport: 'Sherman Army Airfield',
    latitude: 39.36830139,
    longitude: -94.91470337
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TNT',
    icao: 'KTNT',
    airport: 'Dade-Collier Training and Transition Airport',
    latitude: 25.86179924,
    longitude: -80.89700317
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'TNU',
    icao: 'KTNU',
    airport: 'Newton Municipal Airport',
    latitude: 41.67440033,
    longitude: -93.021698
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'MHE',
    icao: 'KMHE',
    airport: 'Mitchell Municipal Airport',
    latitude: 43.77479935,
    longitude: -98.03859711
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FLT',
    icao: '',
    airport: 'Flat Airport',
    latitude: 62.45259857,
    longitude: -157.9889984
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MFE',
    icao: 'KMFE',
    airport: 'McAllen Miller International Airport',
    latitude: 26.17580032,
    longitude: -98.23860168
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'MFD',
    icao: 'KMFD',
    airport: 'Mansfield Lahm Regional Airport',
    latitude: 40.82139969,
    longitude: -82.51660156
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TOA',
    icao: 'KTOA',
    airport: 'Zamperini Field',
    latitude: 33.80339813,
    longitude: -118.3399963
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'MHK',
    icao: 'KMHK',
    airport: 'Manhattan Regional Airport',
    latitude: 39.14099884,
    longitude: -96.67079926
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'TOC',
    icao: 'KTOC',
    airport: 'Toccoa Airport (R.G. LeTourneau Field)',
    latitude: 34.59379959,
    longitude: -83.29579926
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'MHL',
    icao: 'KMHL',
    airport: 'Marshall Memorial Municipal Airport',
    latitude: 39.09579849,
    longitude: -93.20290375
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'MHN',
    icao: 'KMHN',
    airport: 'Hooker County Airport',
    latitude: 42.042155,
    longitude: -101.059113
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MHR',
    icao: 'KMHR',
    airport: 'Sacramento Mather Airport',
    latitude: 38.55390167,
    longitude: -121.2979965
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TOG',
    icao: 'PATG',
    airport: 'Togiak Airport',
    latitude: 59.05279922,
    longitude: -160.3970032
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'TOI',
    icao: 'KTOI',
    airport: 'Troy Municipal Airport',
    latitude: 31.860399,
    longitude: -86.012101
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'FLP',
    icao: 'KFLP',
    airport: 'Marion County Regional Airport',
    latitude: 36.29090118,
    longitude: -92.59030151
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'TOL',
    icao: 'KTOL',
    airport: 'Toledo Express Airport',
    latitude: 41.58679962,
    longitude: -83.80780029
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MHS',
    icao: '',
    airport: 'Dunsmuir Municipal-Mott Airport',
    latitude: 41.263199,
    longitude: -122.272003
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'FLO',
    icao: 'KFLO',
    airport: 'Florence Regional Airport',
    latitude: 34.1853981,
    longitude: -79.72389984
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'TOP',
    icao: 'KTOP',
    airport: 'Philip Billard Municipal Airport',
    latitude: 39.06869888,
    longitude: -95.62249756
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'MHT',
    icao: 'KMHT',
    airport: 'Manchester-Boston Regional Airport',
    latitude: 42.932598,
    longitude: -71.435699
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'TOR',
    icao: 'KTOR',
    airport: 'Torrington Municipal Airport',
    latitude: 42.0644989,
    longitude: -104.1529999
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MHV',
    icao: 'KMHV',
    airport: 'Mojave Air and Space Port',
    latitude: 35.05939865,
    longitude: -118.1520004
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'MEV',
    icao: 'KMEV',
    airport: 'Minden-Tahoe Airport',
    latitude: 39.00030136,
    longitude: -119.7509995
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MER',
    icao: 'KMER',
    airport: 'Castle Airport',
    latitude: 37.38050079,
    longitude: -120.5680008
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'FLL',
    icao: 'KFLL',
    airport: 'Fort Lauderdale-Hollywood International Airport',
    latitude: 26.072599,
    longitude: -80.152702
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MIA',
    icao: 'KMIA',
    airport: 'Miami International Airport',
    latitude: 25.79319954,
    longitude: -80.29060364
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'FLG',
    icao: 'KFLG',
    airport: 'Flagstaff Pulliam Airport',
    latitude: 35.13850021,
    longitude: -111.6709976
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'FLD',
    icao: 'KFLD',
    airport: 'Fond du Lac County Airport',
    latitude: 43.77119827,
    longitude: -88.48840332
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TPA',
    icao: 'KTPA',
    airport: 'Tampa International Airport',
    latitude: 27.97550011,
    longitude: -82.53320313
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'FKN',
    icao: 'KFKN',
    airport: 'Franklin Municipal-John Beverly Rose Airport',
    latitude: 36.698101,
    longitude: -76.903801
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'MIB',
    icao: 'KMIB',
    airport: 'Minot Air Force Base',
    latitude: 48.4156,
    longitude: -101.358002
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'TPF',
    icao: 'KTPF',
    airport: 'Peter O. Knight Airport',
    latitude: 27.91559982,
    longitude: -82.44930267
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MIC',
    icao: 'KMIC',
    airport: 'Crystal Airport',
    latitude: 45.06200027,
    longitude: -93.35389709
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'TPH',
    icao: 'KTPH',
    airport: 'Tonopah Airport',
    latitude: 38.06019974,
    longitude: -117.086998
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'MEO',
    icao: 'KMQI',
    airport: 'Dare County Regional Airport',
    latitude: 35.91899872,
    longitude: -75.69550323
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MIF',
    icao: '',
    airport: 'Roy Hurd Memorial Airport',
    latitude: 31.58250046,
    longitude: -102.9089966
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'FKL',
    icao: 'KFKL',
    airport: 'Venango Regional Airport (Chess Lamberton Field)',
    latitude: 41.37789917,
    longitude: -79.86039734
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'TPL',
    icao: 'KTPL',
    airport: 'Draughon-Miller Central Texas Regional Airport',
    latitude: 31.15250015,
    longitude: -97.40779877
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MEM',
    icao: 'KMEM',
    airport: 'Memphis International Airport',
    latitude: 35.04240036,
    longitude: -89.97669983
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'MEJ',
    icao: 'KGKJ',
    airport: 'Port Meadville Airport',
    latitude: 41.62649918,
    longitude: -80.21469879
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'MEI',
    icao: 'KMEI',
    airport: 'Meridian Regional Airport (Key Field)',
    latitude: 32.33259964,
    longitude: -88.75189972
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'FIL',
    icao: 'KFOM',
    airport: 'Fillmore Municipal Airport',
    latitude: 38.95830154,
    longitude: -112.362999
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'FID',
    icao: '',
    airport: 'Elizabeth Field',
    latitude: 41.25130081,
    longitude: -72.03160095
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'MIO',
    icao: 'KMIO',
    airport: 'Miami Municipal Airport',
    latitude: 36.909168,
    longitude: -94.887497
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'MIQ',
    icao: 'KMLE',
    airport: 'Millard Airport',
    latitude: 41.195004,
    longitude: -96.114765
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MIT',
    icao: 'KMIT',
    airport: 'Shafter Airport (Minter Field)',
    latitude: 35.507401,
    longitude: -119.192002
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'MIV',
    icao: 'KMIV',
    airport: 'Millville Municipal Airport',
    latitude: 39.367802,
    longitude: -75.072197
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'FHU',
    icao: 'KFHU',
    airport: 'Sierra Vista Municipal Airport (Libby Army Airfield)',
    latitude: 31.58849907,
    longitude: -110.3440018
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'MIW',
    icao: 'KMIW',
    airport: 'Marshalltown Municipal Airport',
    latitude: 42.112778,
    longitude: -92.917778
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MDW',
    icao: 'KMDW',
    airport: 'Midway International Airport',
    latitude: 41.785999,
    longitude: -87.752403
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'FFT',
    icao: 'KFFT',
    airport: 'Capital City Airport',
    latitude: 38.18249893,
    longitude: -84.90470123
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'MDT',
    icao: 'KMDT',
    airport: 'Harrisburg International Airport',
    latitude: 40.19350052,
    longitude: -76.76339722
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MDO',
    icao: 'PAMD',
    airport: 'Middleton Island Airport',
    latitude: 59.44990158,
    longitude: -146.3070068
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'FFO',
    icao: 'KFFO',
    airport: 'Wright-Patterson Air Force Base',
    latitude: 39.8260994,
    longitude: -84.0483017
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'MDJ',
    icao: '',
    airport: 'Madras Municipal Airport',
    latitude: 44.67020035,
    longitude: -121.1549988
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MJQ',
    icao: 'KMJQ',
    airport: 'Jackson Municipal Airport',
    latitude: 43.650002,
    longitude: -94.98666
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TRH',
    icao: '',
    airport: 'Trona Airport',
    latitude: 35.8125,
    longitude: -117.3270035
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'TRI',
    icao: 'KTRI',
    airport: 'Tri-Cities Regional Airport',
    latitude: 36.475201,
    longitude: -82.407401
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'FFM',
    icao: 'KFFM',
    airport: 'Fergus Falls Municipal Airport (Einar Mickelson Field)',
    latitude: 46.28440094,
    longitude: -96.15670013
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'TRL',
    icao: 'KTRL',
    airport: 'Terrell Municipal Airport',
    latitude: 32.70920181,
    longitude: -96.26740265
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TRM',
    icao: 'KTRM',
    airport: 'Jacqueline Cochran Regional Airport',
    latitude: 33.62670135,
    longitude: -116.1600037
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'FFL',
    icao: 'KFFL',
    airport: 'Fairfield Municipal Airport',
    latitude: 41.05329895,
    longitude: -91.97889709
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'FFA',
    icao: 'KFFA',
    airport: 'First Flight Airport',
    latitude: 36.01819992,
    longitude: -75.6713028
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MDH',
    icao: 'KMDH',
    airport: 'Southern Illinois Airport',
    latitude: 37.77809906,
    longitude: -89.2519989
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MDF',
    icao: 'KMDZ',
    airport: 'Taylor County Airport',
    latitude: 45.10100174,
    longitude: -90.30329895
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'FET',
    icao: 'KFET',
    airport: 'Fremont Municipal Airport',
    latitude: 41.44910049,
    longitude: -96.52020264
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MDD',
    icao: 'KMDD',
    airport: 'Midland Airpark',
    latitude: 32.03649902,
    longitude: -102.1009979
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'FEP',
    icao: 'KFEP',
    airport: 'Albertus Airport',
    latitude: 42.24620056,
    longitude: -89.58200073
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'MJX',
    icao: 'KMJX',
    airport: 'Robert J. Miller Air Park (Ocean County Airport)',
    latitude: 39.92750168,
    longitude: -74.29239655
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'TRX',
    icao: 'KTRX',
    airport: 'Trenton Municipal Airport',
    latitude: 40.083611,
    longitude: -93.590836
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'MCW',
    icao: 'KMCW',
    airport: 'Mason City Municipal Airport',
    latitude: 43.15779877,
    longitude: -93.33129883
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'MKC',
    icao: 'KMKC',
    airport: 'Charles B. Wheeler Downtown Airport',
    latitude: 39.12319946,
    longitude: -94.59279633
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MKE',
    icao: 'KMKE',
    airport: 'General Mitchell International Airport',
    latitude: 42.94720078,
    longitude: -87.89659882
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MKG',
    icao: 'KMKG',
    airport: 'Muskegon County Airport',
    latitude: 43.169498,
    longitude: -86.238197
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MCO',
    icao: 'KMCO',
    airport: 'Orlando International Airport',
    latitude: 28.42939949,
    longitude: -81.30899811
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'FDY',
    icao: 'KFDY',
    airport: 'Findlay Airport',
    latitude: 41.01350021,
    longitude: -83.66870117
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TSG',
    icao: '',
    airport: 'Tanacross Airport',
    latitude: 63.37440109,
    longitude: -143.3359985
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'FDR',
    icao: 'KFDR',
    airport: 'Frederick Regional Airport',
    latitude: 34.35200119,
    longitude: -98.98390198
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'FDK',
    icao: 'KFDK',
    airport: 'Frederick Municipal Airport',
    latitude: 39.41759872,
    longitude: -77.3742981
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'MKK',
    icao: 'PHMK',
    airport: 'Molokai Airport',
    latitude: 21.1529007,
    longitude: -157.095993
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'TSM',
    icao: 'KSKX',
    airport: 'Taos Regional Airport',
    latitude: 36.45819855,
    longitude: -105.6719971
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MKL',
    icao: 'KMKL',
    airport: 'McKellar-Sipes Regional Airport',
    latitude: 35.599899,
    longitude: -88.915604
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TSP',
    icao: 'KTSP',
    airport: 'Tehachapi Municipal Airport',
    latitude: 35.13499832,
    longitude: -118.439003
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'MKO',
    icao: 'KMKO',
    airport: 'Davis Field',
    latitude: 35.65650177,
    longitude: -95.36669922
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MCN',
    icao: 'KMCN',
    airport: 'Middle Georgia Regional Airport',
    latitude: 32.69279861,
    longitude: -83.64920044
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MCL',
    icao: 'PAIN',
    airport: 'McKinley National Park Airport',
    latitude: 63.73260117,
    longitude: -148.9109955
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'MCK',
    icao: 'KMCK',
    airport: 'McCook Ben Nelson Regional Airport',
    latitude: 40.20629883,
    longitude: -100.5920029
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'FCY',
    icao: 'KFCY',
    airport: 'Forrest City Municipal Airport',
    latitude: 34.94200134,
    longitude: -90.77500153
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'FCS',
    icao: 'KFCS',
    airport: 'Butts Army Airfield (Fort Carson)',
    latitude: 38.67839813,
    longitude: -104.7570038
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MKT',
    icao: 'KMKT',
    airport: 'Mankato Regional Airport',
    latitude: 44.22159958,
    longitude: -93.91870117
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'MCI',
    icao: 'KMCI',
    airport: 'Kansas City International Airport',
    latitude: 39.2976,
    longitude: -94.713898
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'FCM',
    icao: 'KFCM',
    airport: 'Flying Cloud Airport',
    latitude: 44.82720184,
    longitude: -93.45709991
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'FCH',
    icao: 'KFCH',
    airport: 'Fresno Chandler Executive Airport',
    latitude: 36.73239899,
    longitude: -119.8199997
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'TTD',
    icao: 'KTTD',
    airport: 'Portland-Troutdale Airport',
    latitude: 45.54940033,
    longitude: -122.401001
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'FCA',
    icao: 'KGPI',
    airport: 'Glacier Park International Airport',
    latitude: 48.3105011,
    longitude: -114.2559967
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MCG',
    icao: 'PAMC',
    airport: 'McGrath Airport',
    latitude: 62.95289993,
    longitude: -155.6060028
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MCF',
    icao: 'KMCF',
    airport: 'MacDill Air Force Base',
    latitude: 27.84930038,
    longitude: -82.52120209
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'FBY',
    icao: 'KFBY',
    airport: 'Fairbury Municipal Airport',
    latitude: 40.18299866,
    longitude: -97.16929626
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'FBS',
    icao: '',
    airport: 'Friday Harbor Seaplane Base',
    latitude: 48.53730011,
    longitude: -123.0100021
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'FBR',
    icao: 'KFBR',
    airport: 'Fort Bridger Airport',
    latitude: 41.39189911,
    longitude: -110.4069977
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'TTN',
    icao: 'KTTN',
    airport: 'Trenton-Mercer Airport',
    latitude: 40.27669907,
    longitude: -74.81349945
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'TTO',
    icao: 'KBTN',
    airport: 'Britton Municipal Airport',
    latitude: 45.81520081,
    longitude: -97.74310303
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'FBL',
    icao: 'KFBL',
    airport: 'Faribault Municipal Airport',
    latitude: 44.32844,
    longitude: -93.312534
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MCE',
    icao: 'KMCE',
    airport: 'Merced Regional Airport (MacReady Field)',
    latitude: 37.28469849,
    longitude: -120.5139999
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MLB',
    icao: 'KMLB',
    airport: 'Orlando Melbourne International Airport',
    latitude: 28.10280037,
    longitude: -80.64530182
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'MLC',
    icao: 'KMLC',
    airport: 'McAlester Regional Airport',
    latitude: 34.882401,
    longitude: -95.783501
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'MLD',
    icao: 'KMLD',
    airport: 'Malad City Airport',
    latitude: 42.16659927,
    longitude: -112.2969971
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FBK',
    icao: 'PAFB',
    airport: 'Ladd Army Airfield',
    latitude: 64.83750153,
    longitude: -147.6139984
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'FBG',
    icao: 'KFBG',
    airport: 'Simmons Army Airfield',
    latitude: 35.13180161,
    longitude: -78.93669891
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'MLF',
    icao: 'KMLF',
    airport: 'Milford Municipal Airport (Ben and Judy Briscoe Field)',
    latitude: 38.609707,
    longitude: -112.985949
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'FAY',
    icao: 'KFAY',
    airport: 'Fayetteville Regional Airport (Grannis Field)',
    latitude: 34.99119949,
    longitude: -78.88030243
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MCD',
    icao: 'KMCD',
    airport: 'Mackinac Island Airport',
    latitude: 45.86489868,
    longitude: -84.63729858
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MCC',
    icao: 'KMCC',
    airport: 'McClellan Airfield',
    latitude: 38.66759872,
    longitude: -121.401001
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MLI',
    icao: 'KMLI',
    airport: 'Quad City International Airport',
    latitude: 41.44850159,
    longitude: -90.50749969
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MLJ',
    icao: 'KMLJ',
    airport: 'Baldwin County Airport',
    latitude: 33.15420151,
    longitude: -83.24069977
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'FAT',
    icao: 'KFAT',
    airport: 'Fresno Yosemite International Airport',
    latitude: 36.77619934,
    longitude: -119.7180023
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'MLK',
    icao: '',
    airport: 'Malta Airport',
    latitude: 48.3669014,
    longitude: -107.9189987
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'TUL',
    icao: 'KTUL',
    airport: 'Tulsa International Airport',
    latitude: 36.19839859,
    longitude: -95.88809967
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'FAR',
    icao: 'KFAR',
    airport: 'Hector International Airport',
    latitude: 46.92070007,
    longitude: -96.81580353
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MLL',
    icao: 'PADM',
    airport: 'Marshall Don Hunter Sr. Airport',
    latitude: 61.86429977,
    longitude: -162.026001
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'MCB',
    icao: 'KMCB',
    airport: 'McComb-Pike County Airport (John E. Lewis Field)',
    latitude: 31.17849922,
    longitude: -90.47190094
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'TUP',
    icao: 'KTUP',
    airport: 'Tupelo Regional Airport',
    latitude: 34.26810074,
    longitude: -88.76989746
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'MBY',
    icao: 'KMBY',
    airport: 'Omar N. Bradley Airport',
    latitude: 39.46390152,
    longitude: -92.42700195
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'FAM',
    icao: 'KFAM',
    airport: 'Farmington Regional Airport',
    latitude: 37.76110077,
    longitude: -90.4285965
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'TUS',
    icao: 'KTUS',
    airport: 'Tucson International Airport',
    latitude: 32.11610031,
    longitude: -110.9410019
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'MLS',
    icao: 'KMLS',
    airport: 'Miles City Airport (Frank Wiley Field)',
    latitude: 46.4280014,
    longitude: -105.8860016
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'MLT',
    icao: 'KMLT',
    airport: 'Millinocket Municipal Airport',
    latitude: 45.64780045,
    longitude: -68.68560028
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FAK',
    icao: '',
    airport: 'False Island Seaplane Base',
    latitude: 57.53219986,
    longitude: -135.2129974
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'MLU',
    icao: 'KMLU',
    airport: 'Monroe Regional Airport',
    latitude: 32.51089859,
    longitude: -92.03769684
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'FAJ',
    icao: 'TJFA',
    airport: 'Diego Jimenez Torres Airport',
    latitude: 18.30890083,
    longitude: -65.66190338
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MLY',
    icao: 'PAML',
    airport: 'Manley Hot Springs Airport',
    latitude: 64.99759674,
    longitude: -150.6439972
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'TVC',
    icao: 'KTVC',
    airport: 'Cherry Capital Airport',
    latitude: 44.74140167,
    longitude: -85.5821991
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'TVF',
    icao: 'KTVF',
    airport: 'Thief River Falls Regional Airport',
    latitude: 48.06570053,
    longitude: -96.18499756
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'TVI',
    icao: 'KTVI',
    airport: 'Thomasville Regional Airport',
    latitude: 30.90159988,
    longitude: -83.88130188
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'TVL',
    icao: 'KTVL',
    airport: 'Lake Tahoe Airport',
    latitude: 38.89390182,
    longitude: -119.9950027
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'FAI',
    icao: 'PAFA',
    airport: 'Fairbanks International Airport',
    latitude: 64.81510162,
    longitude: -147.8560028
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'FAF',
    icao: 'KFAF',
    airport: 'Felker Army Airfield',
    latitude: 37.13249969,
    longitude: -76.6088028
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MBS',
    icao: 'KMBS',
    airport: 'MBS International Airport',
    latitude: 43.53290176,
    longitude: -84.07959747
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TWA',
    icao: '',
    airport: 'Twin Hills Airport',
    latitude: 59.07559967,
    longitude: -160.272995
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MMH',
    icao: 'KMMH',
    airport: 'Mammoth Yosemite Airport',
    latitude: 37.62409973,
    longitude: -118.8379974
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'TWD',
    icao: '',
    airport: 'Jefferson County International Airport',
    latitude: 48.05379868,
    longitude: -122.810997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TWE',
    icao: '',
    airport: 'Taylor Airport',
    latitude: 65.6792984,
    longitude: -164.798996
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'TWF',
    icao: 'KTWF',
    airport: 'Magic Valley Regional Airport (Joslin Field)',
    latitude: 42.4818,
    longitude: -114.487999
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MMI',
    icao: 'KMMI',
    airport: 'McMinn County Airport',
    latitude: 35.39730072,
    longitude: -84.56259918
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MBL',
    icao: 'KMBL',
    airport: 'Manistee County Blacker Airport',
    latitude: 44.2723999,
    longitude: -86.24690247
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MML',
    icao: 'KMML',
    airport: 'Southwest Minnesota Regional Airport (Marshall/Ryan Field)',
    latitude: 44.45050049,
    longitude: -95.82189941
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'MMN',
    icao: '',
    airport: 'Minute Man Air Field',
    latitude: 42.4618,
    longitude: -71.5184
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'MBG',
    icao: 'KMBG',
    airport: 'Mobridge Municipal Airport',
    latitude: 45.54650116,
    longitude: -100.4079971
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'EYW',
    icao: 'KEYW',
    airport: 'Key West International Airport',
    latitude: 24.55610085,
    longitude: -81.75959778
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'TXK',
    icao: 'KTXK',
    airport: 'Texarkana Regional Airport (Webb Field)',
    latitude: 33.45370102,
    longitude: -93.99099731
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'EYR',
    icao: '',
    airport: 'Yerington Municipal Airport',
    latitude: 39.0041008,
    longitude: -119.1579971
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'MMS',
    icao: 'KMMS',
    airport: 'Selfs Airport',
    latitude: 34.23149872,
    longitude: -90.28959656
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'MMT',
    icao: 'KMMT',
    airport: 'McEntire Joint National Guard Base',
    latitude: 33.92079926,
    longitude: -80.80130005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EXI',
    icao: '',
    airport: 'Excursion Inlet Seaplane Base',
    latitude: 58.420502,
    longitude: -135.449005
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'MMU',
    icao: 'KMMU',
    airport: 'Morristown Municipal Airport',
    latitude: 40.79940033,
    longitude: -74.41490173
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'EWR',
    icao: 'KEWR',
    airport: 'Newark Liberty International Airport',
    latitude: 40.69250107,
    longitude: -74.16870117
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'MAZ',
    icao: 'TJMZ',
    airport: 'Eugenio Maria de Hostos Airport',
    latitude: 18.25569916,
    longitude: -67.14849854
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'TYE',
    icao: '',
    airport: 'Tyonek Airport',
    latitude: 61.0766983,
    longitude: -151.1380005
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'MAW',
    icao: 'KMAW',
    airport: 'Malden Regional Airport',
    latitude: 36.6006012,
    longitude: -89.99220276
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'EWN',
    icao: 'KEWN',
    airport: 'Coastal Carolina Regional Airport',
    latitude: 35.07300186,
    longitude: -77.04290009
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MNM',
    icao: 'KMNM',
    airport: 'Menominee-Marinette Twin County Airport',
    latitude: 45.126701,
    longitude: -87.638397
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'EWK',
    icao: 'KEWK',
    airport: 'Newton City/County Airport',
    latitude: 38.05820084,
    longitude: -97.27449799
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'EWB',
    icao: 'KEWB',
    airport: 'New Bedford Regional Airport',
    latitude: 41.67610168,
    longitude: -70.95690155
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'EVW',
    icao: 'KEVW',
    airport: 'Evanston-Uinta County Burns Field',
    latitude: 41.27479935,
    longitude: -111.0350037
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'EVM',
    icao: 'KEVM',
    airport: 'Eveleth-Virginia Municipal Airport',
    latitude: 47.42509842,
    longitude: -92.49849701
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'TYR',
    icao: 'KTYR',
    airport: 'Tyler Pounds Regional Airport',
    latitude: 32.35409927,
    longitude: -95.40239716
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'TYS',
    icao: 'KTYS',
    airport: 'McGhee Tyson Airport',
    latitude: 35.81100082,
    longitude: -83.9940033
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'TYZ',
    icao: 'KTYL',
    airport: 'Taylor Airport',
    latitude: 34.45280075,
    longitude: -110.1149979
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'MNN',
    icao: 'KMNN',
    airport: 'Marion Municipal Airport',
    latitude: 40.61619949,
    longitude: -83.06349945
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'TZC',
    icao: 'KCFS',
    airport: 'Tuscola Area Airport',
    latitude: 43.45880127,
    longitude: -83.44550323
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MNT',
    icao: '',
    airport: 'Minto Al Wright Airport',
    latitude: 65.1437,
    longitude: -149.369995
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'MNZ',
    icao: 'KHEF',
    airport: 'Manassas Regional Airport',
    latitude: 38.72140121,
    longitude: -77.51540375
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'EVA',
    icao: '',
    airport: 'Ben Bruce Memorial Airpark',
    latitude: 30.32099915,
    longitude: -94.07350159
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'MOB',
    icao: 'KMOB',
    airport: 'Mobile Regional Airport',
    latitude: 30.69120026,
    longitude: -88.24279785
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MAF',
    icao: 'KMAF',
    airport: 'Midland International Air and Space Port',
    latitude: 31.94249916,
    longitude: -102.2020035
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MOD',
    icao: 'KMOD',
    airport: 'Modesto City-County Airport (Harry Sham Field)',
    latitude: 37.62580109,
    longitude: -120.9540024
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MAE',
    icao: 'KMAE',
    airport: 'Madera Municipal Airport',
    latitude: 36.98860168,
    longitude: -120.1119995
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MAC',
    icao: 'KMAC',
    airport: 'Macon Downtown Airport',
    latitude: 32.82210159,
    longitude: -83.56199646
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'LZU',
    icao: 'KLZU',
    airport: 'Gwinnett County Airport (Briscoe Field)',
    latitude: 33.97809982,
    longitude: -83.96240234
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'EUG',
    icao: 'KEUG',
    airport: 'Eugene Airport (Mahlon Sweet Airport)',
    latitude: 44.12459946,
    longitude: -123.211998
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'EUF',
    icao: 'KEUF',
    airport: 'Weedon Field',
    latitude: 31.95129967,
    longitude: -85.12889862
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MOP',
    icao: 'KMOP',
    airport: 'Mount Pleasant Municipal Airport',
    latitude: 43.621666,
    longitude: -84.73748
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MGR',
    icao: 'KMGR',
    airport: 'Moultrie Municipal Airport',
    latitude: 31.0848999,
    longitude: -83.80329895
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'EUE',
    icao: '',
    airport: 'Eureka Airport',
    latitude: 39.60419846,
    longitude: -116.0049973
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MOR',
    icao: 'KMOR',
    airport: 'Morristown Regional Airport (Moore-Murrell Airport)',
    latitude: 36.179548,
    longitude: -83.375212
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'ETS',
    icao: 'KEDN',
    airport: 'Enterprise Municipal Airport',
    latitude: 31.29969978,
    longitude: -85.89990234
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ETN',
    icao: 'KETN',
    airport: 'Eastland Municipal Airport',
    latitude: 32.41350174,
    longitude: -98.80979919
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MOS',
    icao: '',
    airport: 'Moses Point Airport',
    latitude: 47.777,
    longitude: 10.623
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'UBS',
    icao: 'KUBS',
    airport: 'Columbus-Lowndes County Airport',
    latitude: 33.4654007,
    longitude: -88.38030243
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ETB',
    icao: 'KETB',
    airport: 'West Bend Municipal Airport',
    latitude: 43.42219925,
    longitude: -88.12789917
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'ESW',
    icao: 'KESW',
    airport: 'Easton State Airport',
    latitude: 47.25419998,
    longitude: -121.185997
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'MOT',
    icao: 'KMOT',
    airport: 'Minot International Airport',
    latitude: 48.25939941,
    longitude: -101.2799988
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'UCC',
    icao: 'KUCC',
    airport: 'Yucca Airstrip',
    latitude: 36.94580078,
    longitude: -116.038002
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'UCE',
    icao: '',
    airport: 'Eunice Airport',
    latitude: 30.46629906,
    longitude: -92.42379761
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MOU',
    icao: 'PAMO',
    airport: 'Mountain Village Airport',
    latitude: 62.09540176,
    longitude: -163.6820068
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MOX',
    icao: 'KMOX',
    airport: 'Morris Municipal Airport',
    latitude: 45.570358,
    longitude: -95.968421
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MPB',
    icao: '',
    airport: 'Miami Seaplane Base',
    latitude: 25.77829933,
    longitude: -80.17030334
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'UCY',
    icao: 'KUCY',
    airport: 'Everett-Stewart Regional Airport',
    latitude: 36.38180161,
    longitude: -88.98539734
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'EST',
    icao: 'KEST',
    airport: 'Estherville Municipal Airport',
    latitude: 43.40739822,
    longitude: -94.74639893
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'UDD',
    icao: 'KUDD',
    airport: 'Bermuda Dunes Airport',
    latitude: 33.74840164,
    longitude: -116.2750015
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'MPJ',
    icao: 'KMPJ',
    airport: 'Petit Jean Park Airport',
    latitude: 35.138901,
    longitude: -92.909202
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'ESP',
    icao: '',
    airport: 'StroudsburgPocono Airport',
    latitude: 41.03580093,
    longitude: -75.16059875
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'LYU',
    icao: 'KELO',
    airport: 'Ely Municipal Airport',
    latitude: 47.82450104,
    longitude: -91.83070374
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ESO',
    icao: '',
    airport: 'Ohkay Owingeh Airport',
    latitude: 36.02999878,
    longitude: -106.0459976
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'ESN',
    icao: 'KESN',
    airport: 'Easton Airport (Newnam Field)',
    latitude: 38.80419922,
    longitude: -76.06900024
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'MPO',
    icao: 'KMPO',
    airport: 'Pocono Mountains Municipal Airport',
    latitude: 41.137503,
    longitude: -75.378897
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'MPR',
    icao: 'KMPR',
    airport: 'McPherson Airport',
    latitude: 38.35240173,
    longitude: -97.69129944
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MPS',
    icao: 'KOSA',
    airport: 'Mount Pleasant Regional Airport',
    latitude: 32.8981,
    longitude: -79.7828
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'MPV',
    icao: 'KMPV',
    airport: 'Edward F. Knapp State Airport',
    latitude: 44.20349884,
    longitude: -72.56230164
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'UES',
    icao: 'KUES',
    airport: 'Waukesha County Airport (Crites Field)',
    latitude: 43.04100037,
    longitude: -88.23709869
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'MPZ',
    icao: 'KMPZ',
    airport: 'Mount Pleasant Municipal Airport',
    latitude: 40.94660187,
    longitude: -91.51110077
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'LYO',
    icao: 'KLYO',
    airport: 'Lyons-Rice County Municipal Airport',
    latitude: 38.34280014,
    longitude: -98.22689819
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MQB',
    icao: 'KMQB',
    airport: 'Macomb Municipal Airport',
    latitude: 40.52009964,
    longitude: -90.65239716
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UGB',
    icao: '',
    airport: 'Ugashik Bay Airport',
    latitude: 57.42539978,
    longitude: -157.7400055
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UGI',
    icao: '',
    airport: 'San Juan (Uganik) Seaplane Base',
    latitude: 57.7304,
    longitude: -153.320999
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'UGN',
    icao: 'KUGN',
    airport: 'Waukegan National Airport',
    latitude: 42.42219925,
    longitude: -87.86789703
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'LYH',
    icao: 'KLYH',
    airport: 'Lynchburg Regional Airport (Preston Glenn Field)',
    latitude: 37.3266983,
    longitude: -79.20040131
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UGS',
    icao: '',
    airport: 'Ugashik Airport',
    latitude: 57.5279007,
    longitude: -157.3990021
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'ESF',
    icao: 'KESF',
    airport: 'Esler Airfield (Esler Regional Airport)',
    latitude: 31.39489937,
    longitude: -92.29579926
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'LXV',
    icao: 'KLXV',
    airport: 'Lake County Airport',
    latitude: 39.22029877,
    longitude: -106.3170013
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'ESD',
    icao: 'KORS',
    airport: 'Orcas Island Airport',
    latitude: 48.70819855,
    longitude: -122.9100037
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MQT',
    icao: 'KSAW',
    airport: 'Sawyer International Airport',
    latitude: 46.35359955,
    longitude: -87.395401
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'UIL',
    icao: 'KUIL',
    airport: 'Quillayute Airport',
    latitude: 47.93659973,
    longitude: -124.5630035
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'UIN',
    icao: 'KUIN',
    airport: 'Quincy Regional Airport (Baldwin Field)',
    latitude: 39.94269943,
    longitude: -91.19460297
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ESC',
    icao: 'KESC',
    airport: 'Delta County Airport',
    latitude: 45.72269821,
    longitude: -87.09369659
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'LXN',
    icao: 'KLXN',
    airport: 'Jim Kelly Field',
    latitude: 40.79100037,
    longitude: -99.77729797
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MQW',
    icao: 'KMQW',
    airport: 'Telfair-Wheeler Airport',
    latitude: 32.094617,
    longitude: -82.882248
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MQY',
    icao: 'KMQY',
    airport: 'Smyrna Airport',
    latitude: 36.00899887,
    longitude: -86.52010345
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'LWV',
    icao: 'KLWV',
    airport: 'Lawrenceville-Vincennes International Airport',
    latitude: 38.7643013,
    longitude: -87.60549927
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'MRB',
    icao: 'KMRB',
    airport: 'Eastern WV Regional Airport (Shepherd Field)',
    latitude: 39.40190125,
    longitude: -77.98459625
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'MRC',
    icao: 'KMRC',
    airport: 'Maury County Airport',
    latitude: 35.55410004,
    longitude: -87.17890167
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'MFR',
    icao: 'KMFR',
    airport: 'Rogue Valley International-Medford Airport',
    latitude: 42.37419891,
    longitude: -122.8730011
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ERV',
    icao: 'KERV',
    airport: 'Kerrville Municipal Airport (Louis Schreiner Field)',
    latitude: 29.97669983,
    longitude: -99.08570099
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MRF',
    icao: 'KMRF',
    airport: 'Marfa Municipal Airport',
    latitude: 30.371099,
    longitude: -104.017997
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'UKI',
    icao: 'KUKI',
    airport: 'Ukiah Municipal Airport',
    latitude: 39.12599945,
    longitude: -123.2009964
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'LWT',
    icao: 'KLWT',
    airport: 'Lewistown Municipal Airport',
    latitude: 47.04930115,
    longitude: -109.4670029
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'UKN',
    icao: '',
    airport: 'Waukon Municipal Airport',
    latitude: 43.2804985,
    longitude: -91.46949768
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MRI',
    icao: 'PAMR',
    airport: 'Merrill Field',
    latitude: 61.21350098,
    longitude: -149.8439941
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'UKT',
    icao: 'KUKT',
    airport: 'Quakertown Airport',
    latitude: 40.43519974,
    longitude: -75.38189697
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'LWS',
    icao: 'KLWS',
    airport: 'Lewiston-Nez Perce County Airport',
    latitude: 46.37450027,
    longitude: -117.0149994
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MRK',
    icao: 'KMKY',
    airport: 'Marco Island Airport',
    latitude: 25.995001,
    longitude: -81.672501
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'MRN',
    icao: 'KMRN',
    airport: 'Foothills Regional Airport (was Morganton-Lenoir Airport)',
    latitude: 35.820202,
    longitude: -81.611397
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'LWM',
    icao: 'KLWM',
    airport: 'Lawrence Municipal Airport',
    latitude: 42.71720123,
    longitude: -71.12339783
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'LWL',
    icao: 'KLWL',
    airport: 'Wells Municipal Airport (Harriet Field)',
    latitude: 41.11709976,
    longitude: -114.9219971
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'ULM',
    icao: 'KULM',
    airport: 'New Ulm Municipal Airport',
    latitude: 44.31959915,
    longitude: -94.50229645
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'LWC',
    icao: 'KLWC',
    airport: 'Lawrence Municipal Airport',
    latitude: 39.01119995,
    longitude: -95.21659851
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'LWB',
    icao: 'KLWB',
    airport: 'Greenbrier Valley Airport',
    latitude: 37.85829926,
    longitude: -80.39949799
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MRY',
    icao: 'KMRY',
    airport: 'Monterey Regional Airport',
    latitude: 36.5870018,
    longitude: -121.8430023
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'ERR',
    icao: 'KERR',
    airport: 'Errol Airport',
    latitude: 44.79249954,
    longitude: -71.16419983
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'LVS',
    icao: 'KLVS',
    airport: 'Las Vegas Municipal Airport',
    latitude: 35.65420151,
    longitude: -105.1419983
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'LVM',
    icao: 'KLVM',
    airport: 'Mission Field',
    latitude: 45.69940186,
    longitude: -110.447998
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'MSC',
    icao: 'KFFZ',
    airport: 'Falcon Field Airport',
    latitude: 33.46080017,
    longitude: -111.7279968
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'MSD',
    icao: '',
    airport: 'Mount Pleasant Airport',
    latitude: 39.526651,
    longitude: -111.475978
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'ERI',
    icao: 'KERI',
    airport: 'Erie International Airport (Tom Ridge Field)',
    latitude: 42.08312701,
    longitude: -80.17386675
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'LVL',
    icao: 'KLVL',
    airport: 'Lawrenceville/Brunswick Municipal Airport',
    latitude: 36.77280045,
    longitude: -77.79429626
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'MSL',
    icao: 'KMSL',
    airport: 'Northwest Alabama Regional Airport',
    latitude: 34.74530029,
    longitude: -87.61019897
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'LVK',
    icao: 'KLVK',
    airport: 'Livermore Municipal Airport',
    latitude: 37.69340134,
    longitude: -121.8199997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UMM',
    icao: 'PAST',
    airport: 'Summit Airport',
    latitude: 63.33150101,
    longitude: -149.1269989
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MSN',
    icao: 'KMSN',
    airport: 'Dane County Regional Airport (Truax Field)',
    latitude: 43.13990021,
    longitude: -89.33750153
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'MSO',
    icao: 'KMSO',
    airport: 'Missoula International Airport',
    latitude: 46.91630173,
    longitude: -114.0910034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UMT',
    icao: 'PAUM',
    airport: 'Umiat Airport',
    latitude: 69.37110138,
    longitude: -152.1360016
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MSP',
    icao: 'KMSP',
    airport: 'Minneapolis-Saint Paul International Airport (Wold-Chamberlain Field)',
    latitude: 44.882,
    longitude: -93.221802
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'MSS',
    icao: 'KMSS',
    airport: 'Massena International Airport (Richards Field)',
    latitude: 44.93579865,
    longitude: -74.84559631
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'MSV',
    icao: 'KMSV',
    airport: 'Sullivan County International Airport',
    latitude: 41.701596,
    longitude: -74.794997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LVD',
    icao: '',
    airport: 'Lime Village Airport',
    latitude: 61.35910034,
    longitude: -155.4400024
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'MSY',
    icao: 'KMSY',
    airport: 'Louis Armstrong New Orleans International Airport',
    latitude: 29.99340057,
    longitude: -90.25800323
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LUR',
    icao: 'PALU',
    airport: 'Cape Lisburne LRRS Airport',
    latitude: 68.87509918,
    longitude: -166.1100006
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UNK',
    icao: 'PAUN',
    airport: 'Unalakleet Airport',
    latitude: 63.88840103,
    longitude: -160.798996
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'MTC',
    icao: 'KMTC',
    airport: 'Selfridge Air National Guard Base',
    latitude: 42.613463,
    longitude: -82.836919
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'LUP',
    icao: 'PHLU',
    airport: 'Kalaupapa Airport',
    latitude: 21.21100044,
    longitude: -156.973999
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'UNU',
    icao: 'KUNU',
    airport: 'Dodge County Airport',
    latitude: 43.42660141,
    longitude: -88.70320129
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'UOS',
    icao: 'KUOS',
    airport: 'Franklin County Airport',
    latitude: 35.20510101,
    longitude: -85.89810181
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'UOX',
    icao: 'KUOX',
    airport: 'University-Oxford Airport',
    latitude: 34.38430023,
    longitude: -89.53679657
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'EPH',
    icao: 'KEPH',
    airport: 'Ephrata Municipal Airport',
    latitude: 47.30759811,
    longitude: -119.5159988
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'EPG',
    icao: '',
    airport: 'Browns Airport',
    latitude: 40.86750031,
    longitude: -96.11000061
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'LUL',
    icao: 'KLUL',
    airport: 'Hesler-Noble Field',
    latitude: 31.67259979,
    longitude: -89.17220306
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'UPP',
    icao: 'PHUP',
    airport: 'Upolu Airport',
    latitude: 20.26530075,
    longitude: -155.8600006
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'EOS',
    icao: 'KEOS',
    airport: 'Neosho Hugh Robinson Airport',
    latitude: 36.806491,
    longitude: -94.391042
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'LUK',
    icao: 'KLUK',
    airport: 'Cincinnati Municipal Airport (Lunken Field)',
    latitude: 39.10329819,
    longitude: -84.41860199
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'EOK',
    icao: 'KEOK',
    airport: 'Keokuk Municipal Airport',
    latitude: 40.4598999,
    longitude: -91.42849731
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ENW',
    icao: 'KENW',
    airport: 'Kenosha Regional Airport',
    latitude: 42.59569931,
    longitude: -87.92780304
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'ENV',
    icao: 'KENV',
    airport: 'Wendover Airport',
    latitude: 40.71870041,
    longitude: -114.0309982
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'MTH',
    icao: 'KMTH',
    airport: 'Florida Keys Marathon Airport',
    latitude: 24.726101,
    longitude: -81.051399
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'LUF',
    icao: 'KLUF',
    airport: 'Luke Air Force Base',
    latitude: 33.53499985,
    longitude: -112.3830032
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'MTJ',
    icao: 'KMTJ',
    airport: 'Montrose Regional Airport',
    latitude: 38.50979996,
    longitude: -107.8939972
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MTM',
    icao: 'PAMM',
    airport: 'Metlakatla Seaplane Base',
    latitude: 55.131001,
    longitude: -131.578003
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'MTN',
    icao: 'KMTN',
    airport: 'Martin State Airport',
    latitude: 39.325699,
    longitude: -76.413803
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ENN',
    icao: 'PANN',
    airport: 'Nenana Municipal Airport',
    latitude: 64.54730225,
    longitude: -149.0740051
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MTO',
    icao: 'KMTO',
    airport: 'Coles County Memorial Airport',
    latitude: 39.477901,
    longitude: -88.279198
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'MTP',
    icao: 'KMTP',
    airport: 'Montauk Airport',
    latitude: 41.0765,
    longitude: -71.920797
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MTW',
    icao: 'KMTW',
    airport: 'Manitowoc County Airport',
    latitude: 44.128799,
    longitude: -87.680602
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'ENL',
    icao: 'KENL',
    airport: 'Centralia Municipal Airport',
    latitude: 38.51509857,
    longitude: -89.0911026
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'USA',
    icao: 'KJQF',
    airport: 'Concord Regional Airport',
    latitude: 35.387798,
    longitude: -80.709099
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'USC',
    icao: '',
    airport: 'Union County Airport/Troy Shelton Field',
    latitude: 40.2249,
    longitude: -83.3519
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MTX',
    icao: 'PABK',
    airport: 'Metro Field',
    latitude: 64.80680084,
    longitude: -147.7619934
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'END',
    icao: 'KEND',
    airport: 'Vance Air Force Base',
    latitude: 36.33919907,
    longitude: -97.91649628
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'LTW',
    icao: '',
    airport: 'St. Marys County Regional Airport(Captain Walter Francis Duke Regional Airport)',
    latitude: 38.31539917,
    longitude: -76.55010223
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ENA',
    icao: 'PAEN',
    airport: 'Kenai Municipal Airport',
    latitude: 60.57310104,
    longitude: -151.2449951
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'LTS',
    icao: 'KLTS',
    airport: 'Altus Air Force Base',
    latitude: 34.667099,
    longitude: -99.26670074
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'MUE',
    icao: 'PHMU',
    airport: 'Waimea-Kohala Airport',
    latitude: 20.00130081,
    longitude: -155.6679993
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'MUI',
    icao: 'KMUI',
    airport: 'Muir Army Airfield',
    latitude: 40.434799,
    longitude: -76.569397
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MUL',
    icao: 'KMUL',
    airport: 'Spence Airport',
    latitude: 31.137777,
    longitude: -83.70417
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'EMT',
    icao: 'KEMT',
    airport: 'San Gabriel Valley Airport',
    latitude: 34.086102,
    longitude: -118.035004
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'UST',
    icao: 'KSGJ',
    airport: 'Northeast Florida Regional Airport',
    latitude: 29.9592,
    longitude: -81.339798
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'MUO',
    icao: 'KMUO',
    airport: 'Mountain Home Air Force Base',
    latitude: 43.043598,
    longitude: -115.872002
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'EMP',
    icao: 'KEMP',
    airport: 'Emporia Municipal Airport',
    latitude: 38.33209991,
    longitude: -96.19120026
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'MUT',
    icao: 'KMUT',
    airport: 'Muscatine Municipal Airport',
    latitude: 41.367803,
    longitude: -91.148201
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'LSV',
    icao: 'KLSV',
    airport: 'Nellis Air Force Base',
    latitude: 36.23619843,
    longitude: -115.0339966
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'LSN',
    icao: 'KLSN',
    airport: 'Los Banos Municipal Airport',
    latitude: 37.06290054,
    longitude: -120.8690033
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'MVC',
    icao: 'KMVC',
    airport: 'Monroe County Airport',
    latitude: 31.458,
    longitude: -87.350996
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'EMM',
    icao: 'KEMM',
    airport: 'Kemmerer Municipal Airport',
    latitude: 41.82410049,
    longitude: -110.5569992
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MVE',
    icao: 'KMVE',
    airport: 'Montevideo-Chippewa County Airport',
    latitude: 44.969101,
    longitude: -95.710297
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'UTM',
    icao: 'KUTA',
    airport: 'Tunica Municipal Airport',
    latitude: 34.68099976,
    longitude: -90.34670258
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UTO',
    icao: 'PAIM',
    airport: 'Indian Mountain LRRS Airport',
    latitude: 65.99279785,
    longitude: -153.7039948
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'LSK',
    icao: 'KLSK',
    airport: 'Lusk Municipal Airport',
    latitude: 42.75379944,
    longitude: -104.4049988
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'LSF',
    icao: 'KLSF',
    airport: 'Lawson Army Airfield',
    latitude: 32.33729935,
    longitude: -84.99130249
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'MVL',
    icao: 'KMVL',
    airport: 'Morrisville-Stowe State Airport',
    latitude: 44.5345993,
    longitude: -72.61399841
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'MVM',
    icao: '',
    airport: 'Kayenta Airport',
    latitude: 36.716444,
    longitude: -110.228444
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MVN',
    icao: 'KMVN',
    airport: 'Mount Vernon Airport',
    latitude: 38.321935,
    longitude: -88.853496
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'LSE',
    icao: 'KLSE',
    airport: 'La Crosse Regional Airport',
    latitude: 43.879002,
    longitude: -91.256699
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'UUK',
    icao: 'PAKU',
    airport: 'Ugnu-Kuparuk Airport',
    latitude: 70.33080292,
    longitude: -149.5980072
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'LSB',
    icao: 'KLSB',
    airport: 'Lordsburg Municipal Airport',
    latitude: 32.33349991,
    longitude: -108.6920013
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'LRU',
    icao: 'KLRU',
    airport: 'Las Cruces International Airport',
    latitude: 32.28939819,
    longitude: -106.9219971
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'UVA',
    icao: 'KUVA',
    airport: 'Garner Field',
    latitude: 29.2112999,
    longitude: -99.74359894
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'MVW',
    icao: 'KBVS',
    airport: 'Skagit Regional Airport',
    latitude: 48.47090149,
    longitude: -122.4209976
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'MVY',
    icao: 'KMVY',
    airport: 'Marthas Vineyard Airport',
    latitude: 41.39310074,
    longitude: -70.61430359
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EMK',
    icao: 'PAEM',
    airport: 'Emmonak Airport',
    latitude: 62.78609848,
    longitude: -164.4909973
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'UWA',
    icao: '',
    airport: 'Ware Airport',
    latitude: 42.2820015,
    longitude: -72.21479797
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'MWA',
    icao: 'KMWA',
    airport: 'Williamson County Regional Airport',
    latitude: 37.75500107,
    longitude: -89.01110077
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ELZ',
    icao: 'KELZ',
    airport: 'Wellsville Municipal Airport (Tarantine Field)',
    latitude: 42.10950089,
    longitude: -77.98999786
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'LRJ',
    icao: 'KLRJ',
    airport: 'Le Mars Municipal Airport',
    latitude: 42.77799988,
    longitude: -96.1937027
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'ELY',
    icao: 'KELY',
    airport: 'Ely Airport',
    latitude: 39.29970169,
    longitude: -114.8420029
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'MWC',
    icao: 'KMWC',
    airport: 'Lawrence J. Timmerman Airport',
    latitude: 43.110401,
    longitude: -88.034401
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ELW',
    icao: '',
    airport: 'Ellamar Seaplane Base',
    latitude: 60.893818,
    longitude: -146.704038
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ELV',
    icao: 'PAEL',
    airport: 'Elfin Cove Seaplane Base',
    latitude: 58.19520187,
    longitude: -136.3470001
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'VAD',
    icao: 'KVAD',
    airport: 'Moody Air Force Base',
    latitude: 30.96780014,
    longitude: -83.19300079
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'MWH',
    icao: 'KMWH',
    airport: 'Grant County International Airport',
    latitude: 47.20769882,
    longitude: -119.3199997
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ELP',
    icao: 'KELP',
    airport: 'El Paso International Airport',
    latitude: 31.80719948,
    longitude: -106.3779984
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MWL',
    icao: 'KMWL',
    airport: 'Mineral Wells Airport',
    latitude: 32.78160095,
    longitude: -98.06020355
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'VAK',
    icao: 'PAVA',
    airport: 'Chevak Airport',
    latitude: 61.5409,
    longitude: -165.6005
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'ELN',
    icao: 'KELN',
    airport: 'Bowers Field',
    latitude: 47.03300095,
    longitude: -120.5309982
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'MWM',
    icao: 'KMWM',
    airport: 'Windom Municipal Airport',
    latitude: 43.91339874,
    longitude: -95.10939789
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'MWO',
    icao: 'KMWO',
    airport: 'Middletown Regional Airport (Hook Field)',
    latitude: 39.530998,
    longitude: -84.395302
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'LRF',
    icao: 'KLRF',
    airport: 'Little Rock Air Force Base',
    latitude: 34.91690063,
    longitude: -92.14969635
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ELM',
    icao: 'KELM',
    airport: 'Elmira/Corning Regional Airport',
    latitude: 42.15990067,
    longitude: -76.89160156
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'LRD',
    icao: 'KLRD',
    airport: 'Laredo International Airport',
    latitude: 27.54380035,
    longitude: -99.46160126
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'MXA',
    icao: 'KMXA',
    airport: 'Manila Municipal Airport',
    latitude: 35.894402,
    longitude: -90.154602
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'ELK',
    icao: 'KELK',
    airport: 'Elk City Regional Business Airport',
    latitude: 35.43080139,
    longitude: -99.39430237
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'MXC',
    icao: '',
    airport: 'Monticello Airport',
    latitude: 37.93243,
    longitude: -109.341225
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'LQK',
    icao: 'KLQK',
    airport: 'Pickens County Airport',
    latitude: 34.81000137,
    longitude: -82.70290375
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'MXE',
    icao: 'KMEB',
    airport: 'Laurinburg-Maxton Airport',
    latitude: 34.791901,
    longitude: -79.365799
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'VBG',
    icao: 'KVBG',
    airport: 'Vandenberg Air Force Base',
    latitude: 34.73730087,
    longitude: -120.5839996
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'MXF',
    icao: 'KMXF',
    airport: 'Maxwell Air Force Base',
    latitude: 32.3829,
    longitude: -86.365799
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ELI',
    icao: 'PFEL',
    airport: 'Elim Airport',
    latitude: 64.61470032,
    longitude: -162.2720032
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'MXG',
    icao: '',
    airport: 'Marlboro Airport',
    latitude: 42.343201,
    longitude: -71.509002
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'MXO',
    icao: 'KMXO',
    airport: 'Monticello Regional Airport',
    latitude: 42.226275,
    longitude: -91.163524
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'LPS',
    icao: '',
    airport: 'Fishermans Bay/LPS Seaplane Base',
    latitude: 48.48389816,
    longitude: -122.9380035
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'ELD',
    icao: 'KELD',
    airport: 'South Arkansas Regional Airport at Goodwin Field',
    latitude: 33.22100067,
    longitude: -92.81330109
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ELA',
    icao: 'KELA',
    airport: 'Eagle Lake Airport',
    latitude: 29.60059929,
    longitude: -96.32189941
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'EKX',
    icao: 'KEKX',
    airport: 'Elizabethtown Regional Airport (Addington Field)',
    latitude: 37.68600082,
    longitude: -85.92500305
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'VCT',
    icao: 'KVCT',
    airport: 'Victoria Regional Airport',
    latitude: 28.8526001,
    longitude: -96.91850281
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'VCV',
    icao: 'KVCV',
    airport: 'Southern California Logistics Airport',
    latitude: 34.59749985,
    longitude: -117.3830032
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MXY',
    icao: 'PAMX',
    airport: 'McCarthy Airport',
    latitude: 61.43709946,
    longitude: -142.904007
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MYF',
    icao: 'KMYF',
    airport: 'Montgomery Field Airport',
    latitude: 32.8157,
    longitude: -117.139999
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'LPC',
    icao: 'KLPC',
    airport: 'Lompoc Airport',
    latitude: 34.66559982,
    longitude: -120.4680023
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'EKO',
    icao: 'KEKO',
    airport: 'Elko Regional Airport',
    latitude: 40.82490158,
    longitude: -115.7919998
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'VDI',
    icao: 'KVDI',
    airport: 'Vidalia Regional Airport',
    latitude: 32.19269943,
    longitude: -82.37120056
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'EKN',
    icao: 'KEKN',
    airport: 'Elkins-Randolph County Airport',
    latitude: 38.88940048,
    longitude: -79.85710144
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'MYH',
    icao: '',
    airport: 'Marble Canyon Airport',
    latitude: 36.8116,
    longitude: -111.6421
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'LOZ',
    icao: 'KLOZ',
    airport: 'London-Corbin Airport (Magee Field)',
    latitude: 37.0821991,
    longitude: -84.0848999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'VDZ',
    icao: 'PAVD',
    airport: 'Valdez Airport (Pioneer Field)',
    latitude: 61.13389969,
    longitude: -146.2480011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'VEE',
    icao: 'PAVE',
    airport: 'Venetie Airport',
    latitude: 67.00869751,
    longitude: -146.3659973
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'VEL',
    icao: 'KVEL',
    airport: 'Vernal Regional Airport',
    latitude: 40.4408989,
    longitude: -109.5100021
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'LOW',
    icao: 'KLKU',
    airport: 'Louisa County Airport (Freeman Field)',
    latitude: 38.00979996,
    longitude: -77.9701004
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MYK',
    icao: '',
    airport: 'May Creek Airport',
    latitude: 61.33570099,
    longitude: -142.6869965
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'VEX',
    icao: '',
    airport: 'Tioga Municipal Airport',
    latitude: 48.38050079,
    longitude: -102.8980026
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'EKA',
    icao: 'KEKA',
    airport: 'Murray Field',
    latitude: 40.80339813,
    longitude: -124.112999
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'MYL',
    icao: 'KMYL',
    airport: 'McCall Municipal Airport',
    latitude: 44.88970184,
    longitude: -116.1009979
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'LOU',
    icao: 'KLOU',
    airport: 'Bowman Field',
    latitude: 38.22800064,
    longitude: -85.66369629
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'LOT',
    icao: 'KLOT',
    airport: 'Lewis University Airport',
    latitude: 41.6072998,
    longitude: -88.09619904
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'VGT',
    icao: 'KVGT',
    airport: 'North Las Vegas Airport',
    latitude: 36.21070099,
    longitude: -115.1940002
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'MYR',
    icao: 'KMYR',
    airport: 'Myrtle Beach International Airport',
    latitude: 33.67969894,
    longitude: -78.92829895
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EIL',
    icao: 'PAEI',
    airport: 'Eielson Air Force Base',
    latitude: 64.66570282,
    longitude: -147.102005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'MYU',
    icao: 'PAMY',
    airport: 'Mekoryuk Airport',
    latitude: 60.37139893,
    longitude: -166.2709961
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'VHN',
    icao: 'KVHN',
    airport: 'Culberson County Airport',
    latitude: 31.05780029,
    longitude: -104.7839966
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'MYV',
    icao: 'KMYV',
    airport: 'Yuba County Airport',
    latitude: 39.09780121,
    longitude: -121.5699997
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'MZJ',
    icao: 'KMZJ',
    airport: 'Pinal Airpark',
    latitude: 32.51060104,
    longitude: -111.3280029
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'LOL',
    icao: 'KLOL',
    airport: 'Derby Field',
    latitude: 40.06639862,
    longitude: -118.5650024
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'LNY',
    icao: 'PHNY',
    airport: 'Lanai Airport',
    latitude: 20.78560066,
    longitude: -156.951004
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'LNS',
    icao: 'KLNS',
    airport: 'Lancaster Airport',
    latitude: 40.12170029,
    longitude: -76.2960968
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EHM',
    icao: 'PAEH',
    airport: 'Cape Newenham LRRS Airport',
    latitude: 58.64640045,
    longitude: -162.0630035
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EGX',
    icao: 'PAII',
    airport: 'Egegik Airport',
    latitude: 58.1855011,
    longitude: -157.375
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'VIH',
    icao: 'KVIH',
    airport: 'Rolla National Airport',
    latitude: 38.12739944,
    longitude: -91.76950073
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'LNR',
    icao: 'KLNR',
    airport: 'Tri-County Regional Airport',
    latitude: 43.21170044,
    longitude: -90.18160248
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'LNP',
    icao: 'KLNP',
    airport: 'Lonesome Pine Airport',
    latitude: 36.98749924,
    longitude: -82.52999878
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'LNN',
    icao: 'KLNN',
    airport: 'Lost Nation Airport',
    latitude: 41.68399811,
    longitude: -81.38970184
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'VIS',
    icao: 'KVIS',
    airport: 'Visalia Municipal Airport',
    latitude: 36.31869888,
    longitude: -119.3929977
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'EGV',
    icao: 'KEGV',
    airport: 'Eagle River Union Airport',
    latitude: 45.93230057,
    longitude: -89.26830292
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'LNK',
    icao: 'KLNK',
    airport: 'Lincoln Airport',
    latitude: 40.85100174,
    longitude: -96.75920105
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LNI',
    icao: 'PALN',
    airport: 'Point Lonely Short Range Radar Site',
    latitude: 70.91069794,
    longitude: -153.2420044
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'EGP',
    icao: '',
    airport: 'Maverick County Memorial International Airport',
    latitude: 28.85720062,
    longitude: -100.512001
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'LND',
    icao: 'KLND',
    airport: 'Hunt Field',
    latitude: 42.81520081,
    longitude: -108.7300034
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'LNA',
    icao: 'KLNA',
    airport: 'Palm Beach County Park Airport',
    latitude: 26.59300041,
    longitude: -80.08509827
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'VJI',
    icao: 'KVJI',
    airport: 'Virginia Highlands Airport',
    latitude: 36.68709946,
    longitude: -82.03330231
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'LMT',
    icao: 'KLMT',
    airport: 'Klamath Falls Airport',
    latitude: 42.156101,
    longitude: -121.733002
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'LMS',
    icao: 'KLMS',
    airport: 'Louisville Winston County Airport',
    latitude: 33.14619827,
    longitude: -89.0625
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'VKS',
    icao: 'KVKS',
    airport: 'Vicksburg Municipal Airport',
    latitude: 32.23929977,
    longitude: -90.92839813
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'NBG',
    icao: 'KNBG',
    airport: 'NAS JRB New Orleans (Alvin Callender Field)',
    latitude: 29.82530022,
    longitude: -90.03500366
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'VLA',
    icao: 'KVLA',
    airport: 'Vandalia Municipal Airport',
    latitude: 38.99150085,
    longitude: -89.16619873
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'MGI',
    icao: '',
    airport: 'Aransas National Wildlife Refuge Airport',
    latitude: 28.323,
    longitude: -96.464
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'VLD',
    icao: 'KVLD',
    airport: 'Valdosta Regional Airport',
    latitude: 30.78249931,
    longitude: -83.27670288
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'VLE',
    icao: '',
    airport: 'Valle Airport',
    latitude: 35.65060043,
    longitude: -112.1480026
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LMA',
    icao: 'PAMH',
    airport: 'Lake Minchumina Airport',
    latitude: 63.886002,
    longitude: -152.302002
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'LLY',
    icao: 'KVAY',
    airport: 'South Jersey Regional Airport',
    latitude: 39.94290161,
    longitude: -74.84570313
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'EGI',
    icao: 'KEGI',
    airport: 'Duke Field (Eglin Auxiliary Field 3)',
    latitude: 30.65040016,
    longitude: -86.52290344
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'EGE',
    icao: 'KEGE',
    airport: 'Eagle County Regional Airport',
    latitude: 39.64260101,
    longitude: -106.9179993
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'EFW',
    icao: 'KEFW',
    airport: 'Jefferson Municipal Airport',
    latitude: 42.0102005,
    longitude: -94.34259796
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'EFK',
    icao: 'KEFK',
    airport: 'Newport State Airport',
    latitude: 44.888802,
    longitude: -72.229202
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'LLX',
    icao: 'KCDA',
    airport: 'Caledonia County Airport',
    latitude: 44.56909943,
    longitude: -72.01799774
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NCN',
    icao: 'PFCB',
    airport: 'Chenega Bay Airport',
    latitude: 60.07730103,
    longitude: -147.9920044
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'EFD',
    icao: 'KEFD',
    airport: 'Ellington Field',
    latitude: 29.6072998,
    longitude: -95.15879822
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'NCO',
    icao: 'KOQU',
    airport: 'Quonset State Airport',
    latitude: 41.5970993,
    longitude: -71.41210175
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'LKV',
    icao: 'KLKV',
    airport: 'Lake County Airport',
    latitude: 42.16109848,
    longitude: -120.3990021
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'LKP',
    icao: 'KLKP',
    airport: 'Lake Placid Airport',
    latitude: 44.26449966,
    longitude: -73.9618988
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'VNC',
    icao: 'KVNC',
    airport: 'Venice Municipal Airport',
    latitude: 27.07159996,
    longitude: -82.44029999
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'EEN',
    icao: 'KEEN',
    airport: 'Dillant-Hopkins Airport',
    latitude: 42.89839935,
    longitude: -72.27079773
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'MGJ',
    icao: 'KMGJ',
    airport: 'Orange County Airport',
    latitude: 41.50999832,
    longitude: -74.26460266
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EEK',
    icao: 'PAEE',
    airport: 'Eek Airport',
    latitude: 60.21367264,
    longitude: -162.0438843
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'EED',
    icao: 'KEED',
    airport: 'Needles Airport',
    latitude: 34.7663002,
    longitude: -114.6230011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LKK',
    icao: 'PAKL',
    airport: 'Kulik Lake Airport',
    latitude: 58.98210144,
    longitude: -155.1210022
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'LKE',
    icao: '',
    airport: 'Kenmore Air Harbor Seaplane Base (Seattle Lake Union SPB)',
    latitude: 47.62900162,
    longitude: -122.3389969
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'VNY',
    icao: 'KVNY',
    airport: 'Van Nuys Airport',
    latitude: 34.20980072,
    longitude: -118.4899979
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'EDW',
    icao: 'KEDW',
    airport: 'Edwards Air Force Base',
    latitude: 34.905399,
    longitude: -117.884003
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'LJN',
    icao: 'KLBX',
    airport: 'Texas Gulf Coast Regional Airport',
    latitude: 29.10860062,
    longitude: -95.46209717
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'LIZ',
    icao: '',
    airport: 'Loring International Airport',
    latitude: 46.950401,
    longitude: -67.885902
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'LIY',
    icao: 'KLHW',
    airport: 'MidCoast Regional Airport at Wright Army Airfield',
    latitude: 31.889099,
    longitude: -81.562303
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'VOK',
    icao: 'KVOK',
    airport: 'Volk Field Air National Guard Base',
    latitude: 43.93899918,
    longitude: -90.25340271
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'EDK',
    icao: 'KEQA',
    airport: 'Captain Jack Thomas/El Dorado Airport',
    latitude: 37.77410126,
    longitude: -96.81759644
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EDF',
    icao: 'PAED',
    airport: 'Elmendorf Air Force Base',
    latitude: 61.25099945,
    longitude: -149.8070068
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'NEL',
    icao: 'KNEL',
    airport: 'NAES Lakehurst (Maxfield Field)',
    latitude: 40.03329849,
    longitude: -74.353302
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'EDE',
    icao: 'KEDE',
    airport: 'Northeastern Regional Airport',
    latitude: 36.02769852,
    longitude: -76.56710052
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NEN',
    icao: 'KNEN',
    airport: 'NOLF Whitehouse',
    latitude: 30.35390091,
    longitude: -81.87190247
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'VPS',
    icao: 'KVPS',
    airport: 'Destin-Fort Walton Beach Airport / Eglin Air Force Base',
    latitude: 30.4832,
    longitude: -86.525398
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'NEW',
    icao: 'KNEW',
    airport: 'Lakefront Airport',
    latitude: 30.04240036,
    longitude: -90.02829742
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EDA',
    icao: '',
    airport: 'Edna Bay Seaplane Base',
    latitude: 55.949653,
    longitude: -133.661012
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'VQQ',
    icao: 'KVQQ',
    airport: 'Cecil Airport',
    latitude: 30.21870041,
    longitude: -81.87670136
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'VQS',
    icao: 'TJVQ',
    airport: 'Antonio Rivera Rodriguez Airport',
    latitude: 18.13479996,
    longitude: -65.49359894
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'ECS',
    icao: 'KECS',
    airport: 'Mondell Field',
    latitude: 43.885399,
    longitude: -104.318001
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'VRB',
    icao: 'KVRB',
    airport: 'Vero Beach Regional Airport',
    latitude: 27.6556,
    longitude: -80.417901
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'NFL',
    icao: 'KNFL',
    airport: 'NAS Fallon (Van Voorhis Field)',
    latitude: 39.41659927,
    longitude: -118.7009964
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'LIV',
    icao: '',
    airport: 'Livengood Camp Airport',
    latitude: 65.467,
    longitude: -148.6534
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'ECP',
    icao: 'KECP',
    airport: 'Northwest Florida Beaches International Airport',
    latitude: 30.357106,
    longitude: -85.795414
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'LIT',
    icao: 'KLIT',
    airport: 'Clinton National Airport (Adams Field)',
    latitude: 34.72940063,
    longitude: -92.22429657
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'NGF',
    icao: 'PHNG',
    airport: 'MCAS Kaneohe Bay',
    latitude: 21.45050049,
    longitude: -157.7680054
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'ECG',
    icao: 'KECG',
    airport: 'Elizabeth City Regional Airport',
    latitude: 36.26060104,
    longitude: -76.17459869
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'VRS',
    icao: '',
    airport: 'Roy Otten Memorial Airfield',
    latitude: 38.42779922,
    longitude: -92.87519836
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'NGP',
    icao: 'KNGP',
    airport: 'NAS Corpus Christi (Truax Field)',
    latitude: 27.69260025,
    longitude: -97.29109955
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'LIH',
    icao: 'PHLI',
    airport: 'Lihue Airport',
    latitude: 21.97599983,
    longitude: -159.3390045
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'VSF',
    icao: 'KVSF',
    airport: 'Hartness State Airport',
    latitude: 43.34360123,
    longitude: -72.51730347
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'NGU',
    icao: 'KNGU',
    airport: 'NS Norfolk (Chambers Field)',
    latitude: 36.937599,
    longitude: -76.289299
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'NGW',
    icao: 'KNGW',
    airport: 'NOLF Cabaniss Field',
    latitude: 27.702712,
    longitude: -97.4389
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ECA',
    icao: '',
    airport: 'Iosco County Airport',
    latitude: 44.312801,
    longitude: -83.422302
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'LIC',
    icao: 'KLIC',
    airport: 'Limon Municipal Airport',
    latitude: 39.27479935,
    longitude: -103.6660004
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'EBS',
    icao: 'KEBS',
    airport: 'Webster City Municipal Airport',
    latitude: 42.43659973,
    longitude: -93.86889648
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'NHK',
    icao: 'KNHK',
    airport: 'NAS Patuxent River (Trapnell Field)',
    latitude: 38.285999,
    longitude: -76.411797
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'LHV',
    icao: 'KLHV',
    airport: 'William T. Piper Memorial Airport',
    latitude: 41.13560104,
    longitude: -77.42230225
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'VTN',
    icao: 'KVTN',
    airport: 'Miller Field',
    latitude: 42.85779953,
    longitude: -100.5479965
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'NHX',
    icao: 'KNBJ',
    airport: 'NOLF Barin',
    latitude: 30.38909912,
    longitude: -87.63529968
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'NHZ',
    icao: 'KBXM',
    airport: 'Brunswick Executive Airport',
    latitude: 43.89220047,
    longitude: -69.93859863
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NIB',
    icao: 'PAFS',
    airport: 'Nikolai Airport',
    latitude: 63.0186,
    longitude: -154.358002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NIN',
    icao: '',
    airport: 'Ninilchik Airport',
    latitude: 60.020667,
    longitude: -151.590893
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NIP',
    icao: 'KNIP',
    airport: 'NAS Jacksonville (Towers Field)',
    latitude: 30.2358,
    longitude: -81.680603
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'NIR',
    icao: '',
    airport: 'Chase Field Industrial Complex',
    latitude: 28.362444,
    longitude: -97.661917
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'EAU',
    icao: 'KEAU',
    airport: 'Chippewa Valley Regional Airport',
    latitude: 44.86579895,
    longitude: -91.48429871
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'EAT',
    icao: 'KEAT',
    airport: 'Pangborn Memorial Airport',
    latitude: 47.39889908,
    longitude: -120.2070007
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'LGU',
    icao: 'KLGU',
    airport: 'Logan-Cache Airport',
    latitude: 41.79119873,
    longitude: -111.8519974
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NJK',
    icao: 'KNJK',
    airport: 'NAF El Centro',
    latitude: 32.829201,
    longitude: -115.671996
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'LGF',
    icao: 'KLGF',
    airport: 'Laguna Army Airfield',
    latitude: 32.86000061,
    longitude: -114.3970032
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'EAR',
    icao: 'KEAR',
    airport: 'Kearney Regional Airport',
    latitude: 40.72700119,
    longitude: -99.00679779
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'LGD',
    icao: 'KLGD',
    airport: 'La Grande/Union County Airport',
    latitude: 45.29019928,
    longitude: -118.0070038
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'EAN',
    icao: 'KEAN',
    airport: 'Phifer Airfield',
    latitude: 42.0555,
    longitude: -104.929001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NKI',
    icao: '',
    airport: 'Naukati Bay Seaplane Base',
    latitude: 55.849602,
    longitude: -133.227994
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'LGC',
    icao: 'KLGC',
    airport: 'LaGrange Callaway Airport',
    latitude: 33.0089,
    longitude: -85.072601
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'VYS',
    icao: 'KVYS',
    airport: 'Illinois Valley Regional Airport (Walter A. Duncan Field)',
    latitude: 41.351898,
    longitude: -89.153099
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WAA',
    icao: 'PAIW',
    airport: 'Wales Airport',
    latitude: 65.622593,
    longitude: -168.095
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'LGB',
    icao: 'KLGB',
    airport: 'Long Beach Airport',
    latitude: 33.81769943,
    longitude: -118.1520004
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'LGA',
    icao: 'KLGA',
    airport: 'LaGuardia Airport',
    latitude: 40.77719879,
    longitude: -73.87259674
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NKX',
    icao: 'KNKX',
    airport: 'MCAS Miramar',
    latitude: 32.86840057,
    longitude: -117.1429977
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NLC',
    icao: 'KNLC',
    airport: 'NAS Lemoore (Reeves Field)',
    latitude: 36.33300018,
    longitude: -119.9520035
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'WAH',
    icao: 'KBWP',
    airport: 'Harry Stern Airport',
    latitude: 46.24409866,
    longitude: -96.60739899
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'NLE',
    icao: '',
    airport: 'Jerry Tyler Memorial Airport',
    latitude: 41.83589935,
    longitude: -86.22519684
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'LFT',
    icao: 'KLFT',
    airport: 'Lafayette Regional Airport',
    latitude: 30.20529938,
    longitude: -91.98760223
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'WAL',
    icao: 'KWAL',
    airport: 'Wallops Flight Facility',
    latitude: 37.94020081,
    longitude: -75.46640015
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NLG',
    icao: 'PAOU',
    airport: 'Nelson Lagoon Airport',
    latitude: 56.00749969,
    longitude: -161.1600037
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'LFN',
    icao: 'KLHZ',
    airport: 'Triangle North Executive Airport (Franklin County Airport)',
    latitude: 36.0233,
    longitude: -78.330299
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NLN',
    icao: '',
    airport: 'Kneeland Airport',
    latitude: 40.71929932,
    longitude: -123.9280014
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'LFK',
    icao: 'KLFK',
    airport: 'Angelina County Airport',
    latitude: 31.23399925,
    longitude: -94.75
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'WAS',
    icao: '',
    airport: 'metropolitan area1',
    latitude: 38.889444,
    longitude: -77.035278
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'LFI',
    icao: 'KLFI',
    airport: 'Langley Air Force Base',
    latitude: 37.082901,
    longitude: -76.36049652
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'LEX',
    icao: 'KLEX',
    airport: 'Blue Grass Airport',
    latitude: 38.03649902,
    longitude: -84.60590363
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NME',
    icao: 'PAGT',
    airport: 'Nightmute Airport',
    latitude: 60.47100067,
    longitude: -164.701004
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'WAY',
    icao: 'KWAY',
    airport: 'Greene County Airport',
    latitude: 39.90010071,
    longitude: -80.13310242
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'LEW',
    icao: 'KLEW',
    airport: 'Auburn/Lewiston Municipal Airport',
    latitude: 44.04850006,
    longitude: -70.28350067
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WBB',
    icao: '',
    airport: 'Stebbins Airport',
    latitude: 63.51599884,
    longitude: -162.2779999
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'LEM',
    icao: 'KLEM',
    airport: 'Lemmon Municipal Airport',
    latitude: 45.91870117,
    longitude: -102.1060028
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NNK',
    icao: '',
    airport: 'Naknek Airport',
    latitude: 58.73289871,
    longitude: -157.0200043
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'WBK',
    icao: '',
    airport: 'West Branch Community Airport',
    latitude: 44.244801,
    longitude: -84.179802
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NNL',
    icao: 'PANO',
    airport: 'Nondalton Airport',
    latitude: 59.98020172,
    longitude: -154.8390045
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'LEE',
    icao: 'KLEE',
    airport: 'Leesburg International Airport',
    latitude: 28.82309914,
    longitude: -81.80870056
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WBQ',
    icao: 'PAWB',
    airport: 'Beaver Airport',
    latitude: 66.36219788,
    longitude: -147.4069977
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'WBR',
    icao: 'KRQB',
    airport: 'Roben-Hood Airport',
    latitude: 43.72259903,
    longitude: -85.50409698
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'WBU',
    icao: 'KBDU',
    airport: 'Boulder Municipal Airport',
    latitude: 40.03939819,
    longitude: -105.2259979
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'WBW',
    icao: 'KWBW',
    airport: 'Wilkes-Barre Wyoming Valley Airport',
    latitude: 41.29719925,
    longitude: -75.85119629
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'LEB',
    icao: 'KLEB',
    airport: 'Lebanon Municipal Airport',
    latitude: 43.62609863,
    longitude: -72.30419922
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DYS',
    icao: 'KDYS',
    airport: 'Dyess Air Force Base',
    latitude: 32.42079926,
    longitude: -99.854599
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WCR',
    icao: 'PALR',
    airport: 'Chandalar Lake Airport',
    latitude: 67.50450134,
    longitude: -148.4830017
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'WDG',
    icao: 'KWDG',
    airport: 'Enid Woodring Regional Airport',
    latitude: 36.37919998,
    longitude: -97.79109955
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'LDM',
    icao: 'KLDM',
    airport: 'Mason County Airport',
    latitude: 43.96250153,
    longitude: -86.40789795
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'LDJ',
    icao: 'KLDJ',
    airport: 'Linden Airport',
    latitude: 40.61740112,
    longitude: -74.24459839
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'WDN',
    icao: '',
    airport: 'Waldronaire Airport',
    latitude: 48.7118,
    longitude: -123.017998
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'WDR',
    icao: 'KWDR',
    airport: 'Barrow County Airport',
    latitude: 33.98289871,
    longitude: -83.66739655
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'DYL',
    icao: 'KDYL',
    airport: 'Doylestown Airport',
    latitude: 40.33300018,
    longitude: -75.12229919
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'WEA',
    icao: 'KWEA',
    airport: 'Parker County Airport',
    latitude: 32.74629974,
    longitude: -97.68240356
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'DXR',
    icao: 'KDXR',
    airport: 'Danbury Municipal Airport',
    latitude: 41.37149811,
    longitude: -73.48220062
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'DXE',
    icao: 'KMBO',
    airport: 'Bruce Campbell Field',
    latitude: 32.438702,
    longitude: -90.103104
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NOT',
    icao: 'KDVO',
    airport: 'Marin County Airport (Gnoss Field)',
    latitude: 38.14360046,
    longitude: -122.5559998
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DWH',
    icao: 'KDWH',
    airport: 'David Wayne Hooks Memorial Airport',
    latitude: 30.0618,
    longitude: -95.55280304
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WFB',
    icao: '',
    airport: 'Ketchikan Harbor Seaplane Base',
    latitude: 55.349899,
    longitude: -131.677002
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NPA',
    icao: 'KNPA',
    airport: 'NAS Pensacola (Forrest Sherman Field)',
    latitude: 30.35269928,
    longitude: -87.31860352
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'WFK',
    icao: 'KFVE',
    airport: 'Northern Aroostook Regional Airport',
    latitude: 47.28549957,
    longitude: -68.31279755
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'NPH',
    icao: '',
    airport: 'Nephi Municipal Airport',
    latitude: 39.73880005,
    longitude: -111.8720016
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'LCQ',
    icao: 'KLCQ',
    airport: 'Lake City Gateway Airport',
    latitude: 30.18199921,
    longitude: -82.57689667
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'LCK',
    icao: 'KLCK',
    airport: 'Rickenbacker International Airport',
    latitude: 39.813801,
    longitude: -82.927803
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'DVT',
    icao: 'KDVT',
    airport: 'Phoenix Deer Valley Airport',
    latitude: 33.68830109,
    longitude: -112.0830002
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'WGO',
    icao: 'KOKV',
    airport: 'Winchester Regional Airport',
    latitude: 39.14350128,
    longitude: -78.14440155
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'NPT',
    icao: 'KUUU',
    airport: 'Newport State Airport',
    latitude: 41.53239822,
    longitude: -71.28150177
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'DVN',
    icao: 'KDVN',
    airport: 'Davenport Municipal Airport',
    latitude: 41.61029816,
    longitude: -90.58830261
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WHD',
    icao: '',
    airport: 'Hyder Seaplane Base',
    latitude: 55.903324,
    longitude: -130.009975
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'NQA',
    icao: 'KNQA',
    airport: 'Millington Regional Jetport',
    latitude: 35.356701,
    longitude: -89.8703
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'NQI',
    icao: 'KNQI',
    airport: 'NAS Kingsville',
    latitude: 27.50720024,
    longitude: -97.80970001
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'DVL',
    icao: 'KDVL',
    airport: 'Devils Lake Regional Airport (Devils Lake Municipal Airport)',
    latitude: 48.11420059,
    longitude: -98.90879822
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'LCI',
    icao: 'KLCI',
    airport: 'Laconia Municipal Airport',
    latitude: 43.5727005,
    longitude: -71.41889954
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'WHP',
    icao: 'KWHP',
    airport: 'Whiteman Airport',
    latitude: 34.25930023,
    longitude: -118.413002
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'LCH',
    icao: 'KLCH',
    airport: 'Lake Charles Regional Airport',
    latitude: 30.12610054,
    longitude: -93.22329712
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'WHT',
    icao: 'KARM',
    airport: 'Wharton Regional Airport',
    latitude: 29.25429916,
    longitude: -96.15440369
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DUT',
    icao: 'PADU',
    airport: 'Unalaska Airport',
    latitude: 53.90010071,
    longitude: -166.5440063
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NQX',
    icao: 'KNQX',
    airport: 'NAS Key West (Boca Chica Field)',
    latitude: 24.57579994,
    longitude: -81.68890381
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NRB',
    icao: 'KNRB',
    airport: 'NS Mayport (Admiral David L. McDonald Field)',
    latitude: 30.39109993,
    longitude: -81.42469788
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'DUJ',
    icao: 'KDUJ',
    airport: 'DuBois Regional Airport',
    latitude: 41.17829895,
    longitude: -78.8986969
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'DUG',
    icao: 'KDUG',
    airport: 'Bisbee Douglas International Airport',
    latitude: 31.46899986,
    longitude: -109.6039963
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NRC',
    icao: 'KNRC',
    airport: 'NASA Crows Landing Airport',
    latitude: 37.40800095,
    longitude: -121.1090012
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'DUF',
    icao: '',
    airport: 'Pine Island Airport',
    latitude: 36.25350189,
    longitude: -75.78849792
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'LBT',
    icao: 'KLBT',
    airport: 'Lumberton Municipal Airport',
    latitude: 34.60990143,
    longitude: -79.05940247
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'WJF',
    icao: 'KWJF',
    airport: 'General William J. Fox Airfield',
    latitude: 34.74110031,
    longitude: -118.2190018
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'LBL',
    icao: 'KLBL',
    airport: 'Liberal Mid-America Regional Airport',
    latitude: 37.0442009,
    longitude: -100.9599991
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'NRI',
    icao: '',
    airport: 'Grand Lake Regional Airport',
    latitude: 36.57759857,
    longitude: -94.86190033
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'LBF',
    icao: 'KLBF',
    airport: 'North Platte Regional Airport (Lee Bird Field)',
    latitude: 41.12620163,
    longitude: -100.6839981
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'LBE',
    icao: 'KLBE',
    airport: 'Arnold Palmer Regional Airport',
    latitude: 40.27590179,
    longitude: -79.40480042
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'DUC',
    icao: 'KDUC',
    airport: 'Halliburton Field',
    latitude: 34.47090149,
    longitude: -97.9598999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WKK',
    icao: '',
    airport: 'Aleknagik Airport',
    latitude: 59.2826004,
    longitude: -158.6179962
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'WKL',
    icao: '',
    airport: 'Waikoloa Heliport',
    latitude: 19.9205,
    longitude: -155.8607
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'DUA',
    icao: 'KDUA',
    airport: 'Durant Regional Airport-Eaker Field',
    latitude: 33.94229889,
    longitude: -96.39450073
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'DTW',
    icao: 'KDTW',
    airport: 'Detroit Metropolitan Wayne County Airport',
    latitude: 42.21239853,
    longitude: -83.35340118
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'DTT',
    icao: '',
    airport: 'metropolitan area1',
    latitude: 42.331427,
    longitude: -83.045754
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'WLD',
    icao: 'KWLD',
    airport: 'Strother Field',
    latitude: 37.16859818,
    longitude: -97.03759766
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'DTR',
    icao: '',
    airport: 'Decatur Shores Airport',
    latitude: 48.49980164,
    longitude: -122.814003
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'NRR',
    icao: 'TJRV',
    airport: 'Jose Aponte de la Torre Airport',
    latitude: 18.24530029,
    longitude: -65.6434021
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WLK',
    icao: 'PASK',
    airport: 'Selawik Airport',
    latitude: 66.60009766,
    longitude: -159.9859924
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'DTN',
    icao: 'KDTN',
    airport: 'Shreveport Downtown Airport',
    latitude: 32.54019928,
    longitude: -93.74500275
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'DTL',
    icao: 'KDTL',
    airport: 'Detroit Lakes Airport (Wething Field)',
    latitude: 46.82519913,
    longitude: -95.88569641
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'DTH',
    icao: '',
    airport: 'Furnace Creek Airport',
    latitude: 36.463799,
    longitude: -116.880997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WLR',
    icao: '',
    airport: 'Loring Seaplane Base',
    latitude: 55.60129929,
    longitude: -131.6369934
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'WLW',
    icao: 'KWLW',
    airport: 'Willows-Glenn County Airport',
    latitude: 39.51639938,
    longitude: -122.2180023
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NRS',
    icao: 'KNRS',
    airport: 'NOLF Imperial Beach (Ream Field)',
    latitude: 32.56669998,
    longitude: -117.1169968
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'LBB',
    icao: 'KLBB',
    airport: 'Lubbock Preston Smith International Airport',
    latitude: 33.663601,
    longitude: -101.822998
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'WMC',
    icao: 'KWMC',
    airport: 'Winnemucca Municipal Airport',
    latitude: 40.89659882,
    longitude: -117.8059998
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NSE',
    icao: 'KNSE',
    airport: 'NAS Whiting Field - North',
    latitude: 30.7241993,
    longitude: -87.02189636
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'DTA',
    icao: 'KDTA',
    airport: 'Delta Municipal Airport',
    latitude: 39.38059998,
    longitude: -112.5080032
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'WMH',
    icao: 'KBPK',
    airport: 'Ozark Regional Airport',
    latitude: 36.3689003,
    longitude: -92.47049713
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'LAX',
    icao: 'KLAX',
    airport: 'Los Angeles International Airport',
    latitude: 33.94250107,
    longitude: -118.4079971
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WMK',
    icao: '',
    airport: 'Meyers Chuck Seaplane Base',
    latitude: 55.73960114,
    longitude: -132.2550049
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'LAW',
    icao: 'KLAW',
    airport: 'Lawton-Fort Sill Regional Airport',
    latitude: 34.56769943,
    longitude: -98.41660309
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'NSL',
    icao: 'KDVP',
    airport: 'Slayton Municipal Airport',
    latitude: 43.98680115,
    longitude: -95.7826004
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WMO',
    icao: 'PAWM',
    airport: 'White Mountain Airport',
    latitude: 64.68920136,
    longitude: -163.4129944
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'LAS',
    icao: 'KLAS',
    airport: 'McCarran International Airport',
    latitude: 36.08010101,
    longitude: -115.1520004
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'LAR',
    icao: 'KLAR',
    airport: 'Laramie Regional Airport',
    latitude: 41.31209946,
    longitude: -105.6750031
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NTD',
    icao: 'KNTD',
    airport: 'NAS Point Mugu (Naval Base Ventura County)',
    latitude: 34.12030029,
    longitude: -119.1210022
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WNA',
    icao: 'PANA',
    airport: 'Napakiak Airport',
    latitude: 60.69029999,
    longitude: -161.9790039
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'DSV',
    icao: 'KDSV',
    airport: 'Dansville Municipal Airport',
    latitude: 42.57089996,
    longitude: -77.71309662
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'LAN',
    icao: 'KLAN',
    airport: 'Capital Region International Airport',
    latitude: 42.77870178,
    longitude: -84.58740234
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'LAM',
    icao: 'KLAM',
    airport: 'Los Alamos County Airport',
    latitude: 35.87979889,
    longitude: -106.2689972
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'NTJ',
    icao: '',
    airport: 'Manti-Ephraim Airport',
    latitude: 39.32910156,
    longitude: -111.6149979
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'DSM',
    icao: 'KDSM',
    airport: 'Des Moines International Airport',
    latitude: 41.5340004,
    longitude: -93.6631012
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'LAL',
    icao: 'KLAL',
    airport: 'Lakeland Linder International Airport',
    latitude: 27.988899,
    longitude: -82.018602
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'LAA',
    icao: 'KLAA',
    airport: 'Lamar Municipal Airport',
    latitude: 38.06969833,
    longitude: -102.6880035
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'NTU',
    icao: 'KNTU',
    airport: 'NAS Oceana (Apollo Soucek Field)',
    latitude: 36.820702,
    longitude: -76.033501
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'DSI',
    icao: 'KDTS',
    airport: 'Destin Executive Airport',
    latitude: 30.40010071,
    longitude: -86.47149658
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NUI',
    icao: 'PAQT',
    airport: 'Nuiqsut Airport',
    latitude: 70.20999908,
    longitude: -151.0059967
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NUL',
    icao: 'PANU',
    airport: 'Nulato Airport',
    latitude: 64.729301,
    longitude: -158.074005
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'NUN',
    icao: 'KNUN',
    airport: 'NOLF Saufley Field',
    latitude: 30.4694,
    longitude: -87.338097
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WOW',
    icao: 'PAUO',
    airport: 'Willow Airport',
    latitude: 61.75419998,
    longitude: -150.052002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'NUP',
    icao: '',
    airport: 'Nunapitchuk Airport',
    latitude: 60.905591,
    longitude: -162.440454
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NUQ',
    icao: 'KNUQ',
    airport: 'Moffett Federal Airfield',
    latitude: 37.4161,
    longitude: -122.049004
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'DRU',
    icao: '',
    airport: 'Drummond Airport',
    latitude: 46.6208,
    longitude: -113.205002
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DRT',
    icao: 'KDRT',
    airport: 'Del Rio International Airport',
    latitude: 29.37420082,
    longitude: -100.927002
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'DRO',
    icao: 'KDRO',
    airport: 'Durango-La Plata County Airport',
    latitude: 37.1515007,
    longitude: -107.7539978
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KZB',
    icao: '',
    airport: 'Zachar Bay Seaplane Base',
    latitude: 57.553001,
    longitude: -153.746052
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'WPO',
    icao: '',
    airport: 'North Fork Valley Airport',
    latitude: 38.83169937,
    longitude: -107.6460037
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'NUW',
    icao: 'KNUW',
    airport: 'NAS Whidbey Island (Ault Field)',
    latitude: 48.351799,
    longitude: -122.655998
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'DRI',
    icao: 'KDRI',
    airport: 'Beauregard Regional Airport',
    latitude: 30.83169937,
    longitude: -93.33989716
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DRG',
    icao: 'PADE',
    airport: 'Deering Airport',
    latitude: 66.06960297,
    longitude: -162.7660065
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'WRB',
    icao: 'KWRB',
    airport: 'Robins Air Force Base',
    latitude: 32.64009857,
    longitude: -83.59190369
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'NVD',
    icao: 'KNVD',
    airport: 'Nevada Municipal Airport',
    latitude: 37.852993,
    longitude: -94.304513
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WRG',
    icao: 'PAWG',
    airport: 'Wrangell Airport',
    latitude: 56.48429871,
    longitude: -132.3699951
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'WRI',
    icao: 'KWRI',
    airport: 'McGuire Air Force Base',
    latitude: 40.0155983,
    longitude: -74.59169769
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'WRL',
    icao: 'KWRL',
    airport: 'Worland Municipal Airport',
    latitude: 43.96569824,
    longitude: -107.9509964
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DRF',
    icao: '',
    airport: 'Drift River Airport',
    latitude: 60.58890152,
    longitude: -152.1620026
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NVN',
    icao: '',
    airport: 'Nervino Airport',
    latitude: 39.81850052,
    longitude: -120.3529968
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'DRE',
    icao: 'KDRM',
    airport: 'Drummond Island Airport',
    latitude: 46.00930023,
    longitude: -83.74389648
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'DRA',
    icao: 'KDRA',
    airport: 'Desert Rock Airport',
    latitude: 36.6194,
    longitude: -116.032997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KYU',
    icao: 'PFKU',
    airport: 'Koyukuk Airport',
    latitude: 64.87609863,
    longitude: -157.727005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WSB',
    icao: '',
    airport: 'Steamboat Bay Seaplane Base',
    latitude: 55.52959824,
    longitude: -133.6419983
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'WSD',
    icao: 'KWSD',
    airport: 'Condron Army Airfield',
    latitude: 32.34149933,
    longitude: -106.4029999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WSF',
    icao: 'PACS',
    airport: 'Cape Sarichef Airport',
    latitude: 61.1821,
    longitude: -149.863
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'WSG',
    icao: 'KAFJ',
    airport: 'Washington County Airport',
    latitude: 40.13650131,
    longitude: -80.29019928
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'WSH',
    icao: 'KHWV',
    airport: 'Brookhaven Airport',
    latitude: 40.82189941,
    longitude: -72.86940002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WSM',
    icao: '',
    airport: 'Wiseman Airport',
    latitude: 67.40460205,
    longitude: -150.1230011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WSN',
    icao: 'PFWS',
    airport: 'South Naknek Airport',
    latitude: 58.70339966,
    longitude: -157.0079956
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'NWH',
    icao: '',
    airport: 'Parlin Field',
    latitude: 40.462502,
    longitude: -74.330574
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'KYO',
    icao: '',
    airport: 'Tampa North Aero Park',
    latitude: 28.22130013,
    longitude: -82.37449646
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'WST',
    icao: 'KWST',
    airport: 'Westerly State Airport',
    latitude: 41.34960175,
    longitude: -71.80339813
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'WSX',
    icao: '',
    airport: 'Westsound Seaplane Base',
    latitude: 48.61790085,
    longitude: -122.9530029
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'NYC',
    icao: '',
    airport: 'metropolitan area2',
    latitude: 40.714167,
    longitude: -74.005833
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'MFV',
    icao: 'KMFV',
    airport: 'Accomack County Airport',
    latitude: 37.64690018,
    longitude: -75.76110077
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'NYG',
    icao: 'KNYG',
    airport: 'MCAF Quantico (Turner Field)',
    latitude: 38.50170135,
    longitude: -77.30529785
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KYK',
    icao: 'PAKY',
    airport: 'Karluk Airport',
    latitude: 57.56710052,
    longitude: -154.4499969
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'DPG',
    icao: 'KDPG',
    airport: 'Michael Army Airfield',
    latitude: 40.19940186,
    longitude: -112.9369965
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'MGM',
    icao: 'KMGM',
    airport: 'Montgomery Regional Airport (Dannelly Field)',
    latitude: 32.30059814,
    longitude: -86.39399719
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WTK',
    icao: 'PAWN',
    airport: 'Noatak Airport',
    latitude: 67.56610107,
    longitude: -162.9750061
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WTL',
    icao: '',
    airport: 'Tuntutuliak Airport',
    latitude: 60.33530045,
    longitude: -162.6670074
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'DPA',
    icao: 'KDPA',
    airport: 'DuPage Airport',
    latitude: 41.90779877,
    longitude: -88.24859619
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'NZY',
    icao: 'KNZY',
    airport: 'NAS North Island (Halsey Field)',
    latitude: 32.69919968,
    longitude: -117.2149963
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KXA',
    icao: '',
    airport: 'Kasaan Seaplane Base',
    latitude: 55.53739929,
    longitude: -132.397995
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'WTR',
    icao: '',
    airport: 'Whiteriver Airport',
    latitude: 33.8125,
    longitude: -109.9869995
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KWT',
    icao: 'PFKW',
    airport: 'Kwethluk Airport',
    latitude: 60.79029846,
    longitude: -161.4440002
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'OAJ',
    icao: 'KOAJ',
    airport: 'Albert J. Ellis Airport',
    latitude: 34.82920074,
    longitude: -77.61209869
  },
  {
    country_code: 'US',
    region_name: 'Delaware',
    iata: 'DOV',
    icao: 'KDOV',
    airport: 'Dover Air Force Base',
    latitude: 39.12950134,
    longitude: -75.46600342
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'OAK',
    icao: 'KOAK',
    airport: 'Oakland International Airport',
    latitude: 37.721298,
    longitude: -122.221001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KWP',
    icao: '',
    airport: 'West Point Village Seaplane Base',
    latitude: 57.77009964,
    longitude: -153.548996
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'OAR',
    icao: 'KOAR',
    airport: 'Marina Municipal Airport',
    latitude: 36.68190002,
    longitude: -121.762001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KWN',
    icao: 'PAQH',
    airport: 'Quinhagak Airport',
    latitude: 59.7551,
    longitude: -161.845
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KWK',
    icao: 'PAGG',
    airport: 'Kwigillingok Airport',
    latitude: 59.876499,
    longitude: -163.169005
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'OBE',
    icao: 'KOBE',
    airport: 'Okeechobee County Airport',
    latitude: 27.26280022,
    longitude: -80.84980011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KWF',
    icao: '',
    airport: 'Waterfall Seaplane Base',
    latitude: 55.29629898,
    longitude: -133.2429962
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'OBU',
    icao: 'PAOB',
    airport: 'Kobuk Airport',
    latitude: 66.91230011,
    longitude: -156.8970032
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'OCA',
    icao: '',
    airport: 'Ocean Reef Club Airport',
    latitude: 25.3253994,
    longitude: -80.27480316
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KVL',
    icao: 'PAVL',
    airport: 'Kivalina Airport',
    latitude: 67.73619843,
    longitude: -164.5630035
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'WVI',
    icao: 'KWVI',
    airport: 'Watsonville Municipal Airport',
    latitude: 36.93569946,
    longitude: -121.7900009
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'OCE',
    icao: 'KOXB',
    airport: 'Ocean City Municipal Airport',
    latitude: 38.3103981,
    longitude: -75.12400055
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'WVL',
    icao: 'KWVL',
    airport: 'Waterville Robert LaFleur Airport',
    latitude: 44.53319931,
    longitude: -69.67549896
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'DNV',
    icao: 'KDNV',
    airport: 'Vermilion Regional Airport',
    latitude: 40.19919968,
    longitude: -87.59590149
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WWA',
    icao: 'PAWS',
    airport: 'Wasilla Airport',
    latitude: 61.57170105,
    longitude: -149.5399933
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'WWD',
    icao: 'KWWD',
    airport: 'Cape May Airport',
    latitude: 39.00849915,
    longitude: -74.90830231
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'DNS',
    icao: 'KDNS',
    airport: 'Denison Municipal Airport',
    latitude: 41.9864006,
    longitude: -95.38069916
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'OCF',
    icao: 'KOCF',
    airport: 'Ocala International Airport (Jim Taylor Field)',
    latitude: 29.17259979,
    longitude: -82.22419739
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WWP',
    icao: '',
    airport: 'North Whale Seaplane Base',
    latitude: 56.116299,
    longitude: -133.121994
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'WWR',
    icao: 'KWWR',
    airport: 'West Woodward Airport',
    latitude: 36.438,
    longitude: -99.5226667
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WWT',
    icao: 'PAEW',
    airport: 'Newtok Airport',
    latitude: 60.93909836,
    longitude: -164.6410065
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'OCH',
    icao: 'KOCH',
    airport: 'A.L. Mangham Jr. Regional Airport',
    latitude: 31.57799911,
    longitude: -94.70950317
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'DNN',
    icao: 'KDNN',
    airport: 'Dalton Municipal Airport',
    latitude: 34.72290039,
    longitude: -84.87020111
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'DNL',
    icao: 'KDNL',
    airport: 'Daniel Field',
    latitude: 33.46649933,
    longitude: -82.03939819
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'WYB',
    icao: '',
    airport: 'Yes Bay Lodge Seaplane Base',
    latitude: 55.91630173,
    longitude: -131.8009949
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'OCN',
    icao: 'KOKB',
    airport: 'Oceanside Municipal Airport',
    latitude: 33.21730042,
    longitude: -117.3539963
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KVC',
    icao: 'PAVC',
    airport: 'King Cove Airport',
    latitude: 55.11629868,
    longitude: -162.2660065
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'WYS',
    icao: 'KWYS',
    airport: 'Yellowstone Airport',
    latitude: 44.68840027,
    longitude: -111.1179962
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'OCW',
    icao: 'KOCW',
    airport: 'Washington-Warren Airport (Warren Field)',
    latitude: 35.57049942,
    longitude: -77.04979706
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'ODC',
    icao: '',
    airport: 'Oakdale Airport',
    latitude: 37.75630188,
    longitude: -120.8000031
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'DMO',
    icao: 'KDMO',
    airport: 'Sedalia Regional Airport',
    latitude: 38.70740128,
    longitude: -93.17590332
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'DMN',
    icao: 'KDMN',
    airport: 'Deming Municipal Airport',
    latitude: 32.26229858,
    longitude: -107.7210007
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KUK',
    icao: 'PFKA',
    airport: 'Kasigluk Airport',
    latitude: 60.87440109,
    longitude: -162.5240021
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'ODM',
    icao: '',
    airport: 'Garrett County Airport',
    latitude: 39.2808,
    longitude: -79.3374
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'ODW',
    icao: 'KOKH',
    airport: 'A.J. Eisenberg Airport',
    latitude: 48.25149918,
    longitude: -122.6740036
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'OEO',
    icao: 'KOEO',
    airport: 'L.O. Simenstad Municipal Airport',
    latitude: 45.31000137,
    longitude: -92.69190216
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'DMA',
    icao: 'KDMA',
    airport: 'Davis-Monthan Air Force Base',
    latitude: 32.16650009,
    longitude: -110.8830032
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'OFF',
    icao: 'KOFF',
    airport: 'Offutt Air Force Base',
    latitude: 41.11830139,
    longitude: -95.91249847
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'DLS',
    icao: 'KDLS',
    airport: 'Columbia Gorge Regional Airport (The Dalles Municipal Airport)',
    latitude: 45.61849976,
    longitude: -121.1669998
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'DLN',
    icao: 'KDLN',
    airport: 'Dillon Airport',
    latitude: 45.25540161,
    longitude: -112.5530014
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'OFK',
    icao: 'KOFK',
    airport: 'Norfolk Regional Airport (Karl Stefan Memorial Field)',
    latitude: 41.98550034,
    longitude: -97.43509674
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'OGA',
    icao: 'KOGA',
    airport: 'Searle Field',
    latitude: 41.11949921,
    longitude: -101.7699966
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'DLL',
    icao: 'KDLC',
    airport: 'Dillon County Airport',
    latitude: 34.44910049,
    longitude: -79.36859894
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'DLH',
    icao: 'KDLH',
    airport: 'Duluth International Airport',
    latitude: 46.84209824,
    longitude: -92.19360352
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DLG',
    icao: 'PADL',
    airport: 'Dillingham Airport',
    latitude: 59.04470062,
    longitude: -158.5050049
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DLF',
    icao: 'KDLF',
    airport: 'Laughlin Air Force Base',
    latitude: 29.359501,
    longitude: -100.778002
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'XES',
    icao: '',
    airport: 'Grand Geneva Resort Airport',
    latitude: 42.614899,
    longitude: -88.389603
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'OGB',
    icao: 'KOGB',
    airport: 'Orangeburg Municipal Airport',
    latitude: 33.45679855,
    longitude: -80.85949707
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'OGD',
    icao: 'KOGD',
    airport: 'Ogden-Hinckley Airport',
    latitude: 41.19589996,
    longitude: -112.012001
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'DKK',
    icao: 'KDKK',
    airport: 'Chautauqua County/Dunkirk Airport',
    latitude: 42.49330139,
    longitude: -79.27200317
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'OGG',
    icao: 'PHOG',
    airport: 'Kahului Airport',
    latitude: 20.8986,
    longitude: -156.429993
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DJN',
    icao: '',
    airport: 'Delta Junction Airport',
    latitude: 64.05039978,
    longitude: -145.7169952
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'OGS',
    icao: 'KOGS',
    airport: 'Ogdensburg International Airport',
    latitude: 44.68190002,
    longitude: -75.46549988
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KTS',
    icao: 'PFKT',
    airport: 'Brevig Mission Airport',
    latitude: 65.33129883,
    longitude: -166.4660034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KTN',
    icao: 'PAKT',
    airport: 'Ketchikan International Airport',
    latitude: 55.35559845,
    longitude: -131.7140045
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'OIC',
    icao: 'KOIC',
    airport: 'Lt. Warren Eaton Airport',
    latitude: 42.5666008,
    longitude: -75.52410126
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KTH',
    icao: '',
    airport: 'Tikchik Lodge Seaplane Base',
    latitude: 59.96319962,
    longitude: -158.477005
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'DIK',
    icao: 'KDIK',
    airport: 'Dickinson Theodore Roosevelt Regional Airport',
    latitude: 46.79740143,
    longitude: -102.802002
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DHT',
    icao: 'KDHT',
    airport: 'Dalhart Municipal Airport',
    latitude: 36.02259827,
    longitude: -102.5469971
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'OJC',
    icao: 'KOJC',
    airport: 'Johnson County Executive Airport',
    latitude: 38.84759903,
    longitude: -94.73760223
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KTB',
    icao: '',
    airport: 'Thorne Bay Seaplane Base',
    latitude: 55.68799973,
    longitude: -132.5370026
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'OKC',
    icao: 'KOKC',
    airport: 'Will Rogers World Airport',
    latitude: 35.39310074,
    longitude: -97.60070038
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'OKM',
    icao: 'KOKM',
    airport: 'Okmulgee Regional Airport',
    latitude: 35.66809845,
    longitude: -95.94869995
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'DHN',
    icao: 'KDHN',
    airport: 'Dothan Regional Airport',
    latitude: 31.32130051,
    longitude: -85.44960022
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KSM',
    icao: 'PASM',
    airport: 'St. Marys Airport',
    latitude: 62.0605011,
    longitude: -163.302002
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'OKS',
    icao: 'KOKS',
    airport: 'Garden County Airport',
    latitude: 41.401001,
    longitude: -102.355003
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'DHB',
    icao: '',
    airport: 'Deer Harbor Sea Plane Base',
    latitude: 48.61666667,
    longitude: -123.0027778
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'OLD',
    icao: 'KOLD',
    airport: 'Old Town Municipal Airport and Seaplane Base (Dewitt Field)',
    latitude: 44.95280075,
    longitude: -68.67430115
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'OLE',
    icao: 'KOLE',
    airport: 'Cattaraugus County-Olean Airport',
    latitude: 42.242231,
    longitude: -78.371638
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'DGW',
    icao: 'KDGW',
    airport: 'Converse County Airport',
    latitude: 42.79719925,
    longitude: -105.3860016
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'XMD',
    icao: 'KMDS',
    airport: 'Madison Municipal Airport',
    latitude: 44.01599884,
    longitude: -97.08589935
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'OLF',
    icao: 'KOLF',
    airport: 'L. M. Clayton Airport',
    latitude: 48.0945015,
    longitude: -105.5749969
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'OLH',
    icao: '',
    airport: 'Old Harbor Airport',
    latitude: 57.218056,
    longitude: -153.269722
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'OLM',
    icao: 'KOLM',
    airport: 'Olympia Regional Airport',
    latitude: 46.9693985,
    longitude: -122.9029999
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'OLS',
    icao: 'KOLS',
    airport: 'Nogales International Airport',
    latitude: 31.4177,
    longitude: -110.848
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'OLU',
    icao: 'KOLU',
    airport: 'Columbus Municipal Airport',
    latitude: 41.44800186,
    longitude: -97.34259796
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'OLV',
    icao: 'KOLV',
    airport: 'Olive Branch Airport',
    latitude: 34.97869873,
    longitude: -89.78690338
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'OLY',
    icao: 'KOLY',
    airport: 'Olney-Noble Airport',
    latitude: 38.720665,
    longitude: -88.174871
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'DGN',
    icao: 'KNDY',
    airport: 'Naval Surface Warfare Center Dahlgren Division',
    latitude: 38.33250046,
    longitude: -77.03720093
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'XNA',
    icao: 'KXNA',
    airport: 'Northwest Arkansas Regional Airport',
    latitude: 36.281898,
    longitude: -94.306801
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'OMA',
    icao: 'KOMA',
    airport: 'Eppley Airfield',
    latitude: 41.3032,
    longitude: -95.894096
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'DGL',
    icao: 'KDGL',
    airport: 'Douglas Municipal Airport',
    latitude: 31.34259987,
    longitude: -109.5059967
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DFW',
    icao: 'KDFW',
    airport: 'Dallas/Fort Worth International Airport',
    latitude: 32.896801,
    longitude: -97.038002
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'DFI',
    icao: 'KDFI',
    airport: 'Defiance Memorial Airport',
    latitude: 41.33750153,
    longitude: -84.42880249
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'OME',
    icao: 'PAOM',
    airport: 'Nome Airport',
    latitude: 64.5121994,
    longitude: -165.4450073
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'DET',
    icao: 'KDET',
    airport: 'Coleman A. Young International Airport',
    latitude: 42.40919876,
    longitude: -83.00990295
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'OMK',
    icao: 'KOMK',
    airport: 'Omak Airport',
    latitude: 48.46440125,
    longitude: -119.5179977
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'XPR',
    icao: 'KIEN',
    airport: 'Pine Ridge Airport',
    latitude: 43.02249908,
    longitude: -102.5110016
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'DEN',
    icao: 'KDEN',
    airport: 'Denver International Airport',
    latitude: 39.86169815,
    longitude: -104.6729965
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'ONA',
    icao: 'KONA',
    airport: 'Winona Municipal Airport (Max Conrad Field)',
    latitude: 44.077221,
    longitude: -91.708336
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'DEH',
    icao: 'KDEH',
    airport: 'Decorah Municipal Airport',
    latitude: 43.27550125,
    longitude: -91.73940277
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KQA',
    icao: '',
    airport: 'Akutan Seaplane Base',
    latitude: 54.13377044,
    longitude: -165.7788956
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'DEC',
    icao: 'KDEC',
    airport: 'Decatur Airport',
    latitude: 39.83459854,
    longitude: -88.86569977
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ONH',
    icao: '',
    airport: 'Oneonta Municipal Airport',
    latitude: 42.524722,
    longitude: -75.064444
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPY',
    icao: '',
    airport: 'Port Bailey Seaplane Base',
    latitude: 57.93009949,
    longitude: -153.0410004
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'XSD',
    icao: 'KTNX',
    airport: 'Tonopah Test Range Airport',
    latitude: 37.79880142,
    longitude: -116.7809982
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'ONL',
    icao: 'KONL',
    airport: 'O Neill Municipal Airport(John L.Baker Field) ',
    latitude: 42.469898,
    longitude: -98.688103
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'DDC',
    icao: 'KDDC',
    airport: 'Dodge City Regional Airport',
    latitude: 37.76340103,
    longitude: -99.96559906
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ONM',
    icao: 'KONM',
    airport: 'Socorro Municipal Airport',
    latitude: 34.023978,
    longitude: -106.897543
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'ONO',
    icao: 'KONO',
    airport: 'Ontario Municipal Airport',
    latitude: 44.02050018,
    longitude: -117.0139999
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'DCU',
    icao: 'KDCU',
    airport: 'Pryor Field Regional Airport',
    latitude: 34.65269852,
    longitude: -86.94539642
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'DCK',
    icao: '',
    airport: 'Dahl Creek Airport',
    latitude: 66.94329834,
    longitude: -156.9049988
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'DCA',
    icao: 'KDCA',
    airport: 'Ronald Reagan Washington National Airport',
    latitude: 38.8521,
    longitude: -77.037697
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'ONP',
    icao: 'KONP',
    airport: 'Newport Municipal Airport',
    latitude: 44.580399,
    longitude: -124.057999
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'DBS',
    icao: '',
    airport: 'Dubois Municipal Airport',
    latitude: 44.16659927,
    longitude: -112.2259979
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPV',
    icao: 'PAPE',
    airport: 'Perryville Airport',
    latitude: 55.905998,
    longitude: -159.162993
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'ONT',
    icao: 'KONT',
    airport: 'Ontario International Airport',
    latitude: 34.05599976,
    longitude: -117.6009979
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'DBQ',
    icao: 'KDBQ',
    airport: 'Dubuque Regional Airport',
    latitude: 42.40200043,
    longitude: -90.70950317
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'DBN',
    icao: 'KDBN',
    airport: 'W. H. Bud Barron Airport',
    latitude: 32.56439972,
    longitude: -82.98529816
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'KPT',
    icao: '',
    airport: 'Jackpot Airport (Hayden Field)',
    latitude: 41.97600174,
    longitude: -114.6579971
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ONY',
    icao: 'KONY',
    airport: 'Olney Municipal Airport',
    latitude: 33.352185,
    longitude: -98.791538
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'DAY',
    icao: 'KDAY',
    airport: 'Dayton International Airport',
    latitude: 39.90240097,
    longitude: -84.2193985
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'OOA',
    icao: 'KOOA',
    airport: 'Oskaloosa Municipal Airport',
    latitude: 41.004826,
    longitude: -93.309613
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'OOK',
    icao: 'PAOO',
    airport: 'Toksook Bay Airport',
    latitude: 60.54140091,
    longitude: -165.0870056
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPR',
    icao: '',
    airport: 'Port Williams Seaplane Base',
    latitude: 58.49010086,
    longitude: -152.5820007
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPN',
    icao: 'PAKI',
    airport: 'Kipnuk Airport',
    latitude: 59.93299866,
    longitude: -164.0310059
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'YAK',
    icao: 'PAYA',
    airport: 'Yakutat Airport',
    latitude: 59.50329971,
    longitude: -139.6600037
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'DAN',
    icao: 'KDAN',
    airport: 'Danville Regional Airport',
    latitude: 36.57289886,
    longitude: -79.33609772
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'OPF',
    icao: 'KOPF',
    airport: 'Miami-Opa Locka Executive Airport',
    latitude: 25.907,
    longitude: -80.278397
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'DAL',
    icao: 'KDAL',
    airport: 'Dallas Love Field',
    latitude: 32.847099,
    longitude: -96.851799
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'DAG',
    icao: 'KDAG',
    airport: 'Barstow-Daggett Airport',
    latitude: 34.85369873,
    longitude: -116.7870026
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'DAB',
    icao: 'KDAB',
    airport: 'Daytona Beach International Airport',
    latitude: 29.179899,
    longitude: -81.058098
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'DAA',
    icao: 'KDAA',
    airport: 'Davison Army Airfield',
    latitude: 38.71500015,
    longitude: -77.18099976
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPC',
    icao: 'PAPC',
    airport: 'Port Clarence Coast Guard Station',
    latitude: 65.25370026,
    longitude: -166.8589935
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CZT',
    icao: 'KCZT',
    airport: 'Dimmit County Airport',
    latitude: 28.52219963,
    longitude: -99.82360077
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CZP',
    icao: '',
    airport: 'Cape Pole Seaplane Base',
    latitude: 55.96630096,
    longitude: -133.7969971
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CZO',
    icao: '',
    airport: 'Chistochina Airport',
    latitude: 62.56349945,
    longitude: -144.6690063
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CZN',
    icao: '',
    airport: 'Chisana Airport',
    latitude: 62.07120132,
    longitude: -142.0480042
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'OPL',
    icao: 'KOPL',
    airport: 'St. Landry Parish Airport (Ahart Field)',
    latitude: 30.558405,
    longitude: -92.099373
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'CZK',
    icao: 'KCZK',
    airport: 'Cascade Locks State Airport',
    latitude: 45.67689896,
    longitude: -121.8789978
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KPB',
    icao: '',
    airport: 'Point Baker Seaplane Base',
    latitude: 56.35189819,
    longitude: -133.6230011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CZF',
    icao: 'PACZ',
    airport: 'Cape Romanzof LRRS Airport',
    latitude: 61.78030014,
    longitude: -166.0390015
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CZC',
    icao: '',
    airport: 'Copper Center 2 Airport',
    latitude: 61.94120026,
    longitude: -145.2940063
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KOZ',
    icao: '',
    airport: 'Ouzinkie Airport',
    latitude: 57.925362,
    longitude: -152.496715
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KOY',
    icao: '',
    airport: 'Olga Bay Seaplane Base',
    latitude: 57.16149902,
    longitude: -154.2299957
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'ORD',
    icao: 'KORD',
    airport: 'O Hare International Airport',
    latitude: 41.9786,
    longitude: -87.9048
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'ORF',
    icao: 'KORF',
    airport: 'Norfolk International Airport',
    latitude: 36.89459991,
    longitude: -76.20120239
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'ORH',
    icao: 'KORH',
    airport: 'Worcester Regional Airport',
    latitude: 42.26729965,
    longitude: -71.8757019
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CYT',
    icao: 'PACY',
    airport: 'Yakataga Airport',
    latitude: 60.080974,
    longitude: -142.494541
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'CYS',
    icao: 'KCYS',
    airport: 'Cheyenne Regional Airport (Jerry Olson Field)',
    latitude: 41.15570068,
    longitude: -104.8119965
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ORI',
    icao: 'KORI',
    airport: 'Port Lions Airport',
    latitude: 57.885278,
    longitude: -152.846111
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CYM',
    icao: '',
    airport: 'Chatham Seaplane Base',
    latitude: 57.5149,
    longitude: -134.945999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KOT',
    icao: 'PFKO',
    airport: 'Kotlik Airport',
    latitude: 63.0306015,
    longitude: -163.5330048
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CYF',
    icao: 'PACK',
    airport: 'Chefornak Airport',
    latitude: 60.14920044,
    longitude: -164.2859955
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'ORL',
    icao: 'KORL',
    airport: 'Orlando Executive Airport',
    latitude: 28.5455,
    longitude: -81.332901
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CXO',
    icao: 'KCXO',
    airport: 'Lone Star Executive Airport',
    latitude: 30.351801,
    longitude: -95.414497
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'KOA',
    icao: 'PHKO',
    airport: 'Kona International Airport at Keahole',
    latitude: 19.738783,
    longitude: -156.045603
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CXL',
    icao: 'KCXL',
    airport: 'Calexico International Airport',
    latitude: 32.66949844,
    longitude: -115.5130005
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ORT',
    icao: 'PAOR',
    airport: 'Northway Airport',
    latitude: 62.9612999,
    longitude: -141.9290009
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CXF',
    icao: 'PACX',
    airport: 'Coldfoot Airport',
    latitude: 67.25219727,
    longitude: -150.2039948
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CXC',
    icao: '',
    airport: 'Chitina Airport',
    latitude: 61.582901,
    longitude: -144.427002
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'CWX',
    icao: '',
    airport: 'Cochise County Airport',
    latitude: 32.24539948,
    longitude: -109.8949966
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'CWS',
    icao: '',
    airport: 'Center Island Airport',
    latitude: 48.49010086,
    longitude: -122.8320007
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CWI',
    icao: 'KCWI',
    airport: 'Clinton Municipal Airport',
    latitude: 41.83110046,
    longitude: -90.32910156
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'CWF',
    icao: 'KCWF',
    airport: 'Chennault International Airport',
    latitude: 30.2105999,
    longitude: -93.14320374
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ORV',
    icao: 'PFNO',
    airport: 'Robert (Bob) Curtis Memorial Airport',
    latitude: 66.81790161,
    longitude: -161.0189972
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'CWA',
    icao: 'KCWA',
    airport: 'Central Wisconsin Airport',
    latitude: 44.77759933,
    longitude: -89.66680145
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KNW',
    icao: 'PANW',
    airport: 'New Stuyahok Airport',
    latitude: 59.44990158,
    longitude: -157.3280029
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'CVS',
    icao: 'KCVS',
    airport: 'Cannon Air Force Base',
    latitude: 34.38280106,
    longitude: -103.3219986
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'CVO',
    icao: 'KCVO',
    airport: 'Corvallis Municipal Airport',
    latitude: 44.49720001,
    longitude: -123.2900009
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'CVN',
    icao: 'KCVN',
    airport: 'Clovis Municipal Airport',
    latitude: 34.42509842,
    longitude: -103.0790024
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'KNT',
    icao: 'KTKX',
    airport: 'Kennett Memorial Airport',
    latitude: 36.22589874,
    longitude: -90.03659821
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'KNK',
    icao: 'PFKK',
    airport: 'Kokhanok Airport',
    latitude: 59.43320084,
    longitude: -154.8040009
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'CVG',
    icao: 'KCVG',
    airport: 'Cincinnati/Northern Kentucky International Airport',
    latitude: 39.04880142,
    longitude: -84.6678009
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'OSB',
    icao: '',
    airport: 'Grand Glaize-Osage Beach Airport',
    latitude: 36.30580139,
    longitude: 43.1473999
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CUX',
    icao: '',
    airport: 'Cuddihy Field',
    latitude: 27.72179,
    longitude: -97.512135
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'OSC',
    icao: 'KOSC',
    airport: 'Oscoda-Wurtsmith Airport',
    latitude: 44.451599,
    longitude: -83.394096
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'CUS',
    icao: '',
    airport: 'Columbus Municipal Airport',
    latitude: 39.2557,
    longitude: -85.8971
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'OSH',
    icao: 'KOSH',
    airport: 'Wittman Regional Airport',
    latitude: 43.9844017,
    longitude: -88.55699921
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'KNB',
    icao: 'KKNB',
    airport: 'Kanab Municipal Airport',
    latitude: 37.010607,
    longitude: -112.530866
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KMY',
    icao: '',
    airport: 'Moser Bay Seaplane Base',
    latitude: 57.025556,
    longitude: -154.145833
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'CUH',
    icao: 'KCUH',
    airport: 'Cushing Municipal Airport',
    latitude: 35.94990158,
    longitude: -96.77310181
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CUB',
    icao: 'KCUB',
    airport: 'Jim Hamilton-L.B. Owens Airport',
    latitude: 33.97050095,
    longitude: -80.99520111
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'OSU',
    icao: 'KOSU',
    airport: 'Ohio State University Airport',
    latitude: 40.0798,
    longitude: -83.072998
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'CTZ',
    icao: 'KCTZ',
    airport: 'Clinton-Sampson County Airport',
    latitude: 34.9756012,
    longitude: -78.36460114
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'CTY',
    icao: 'KCTY',
    airport: 'Cross City Airport',
    latitude: 29.63549995,
    longitude: -83.10479736
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'CTX',
    icao: '',
    airport: 'Cortland County Airport (Chase Field',
    latitude: 42.59260178,
    longitude: -76.21489716
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'CTW',
    icao: '',
    airport: 'Cottonwood Airport',
    latitude: 34.730018,
    longitude: -112.035395
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'CTO',
    icao: '',
    airport: 'Calverton Executive Airpark',
    latitude: 40.9151001,
    longitude: -72.79190063
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'OSX',
    icao: 'KOSX',
    airport: 'Kosciusko-Attala County Airport',
    latitude: 33.090016,
    longitude: -89.540918
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'CTK',
    icao: '',
    airport: 'Canton Municipal Airport',
    latitude: 43.308899,
    longitude: -96.570999
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'CTH',
    icao: 'KMQS',
    airport: 'Chester County G. O. Carlson Airport',
    latitude: 39.97900009,
    longitude: -75.8655014
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'OTG',
    icao: 'KOTG',
    airport: 'Worthington Municipal Airport',
    latitude: 43.655905,
    longitude: -95.584047
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'OTH',
    icao: 'KOTH',
    airport: 'Southwest Oregon Regional Airport',
    latitude: 43.417099,
    longitude: -124.2460022
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'OTK',
    icao: 'KTMK',
    airport: 'Tillamook Airport',
    latitude: 45.41820145,
    longitude: -123.814003
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'OTM',
    icao: 'KOTM',
    airport: 'Ottumwa Regional Airport',
    latitude: 41.10660172,
    longitude: -92.44789886
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'CTB',
    icao: 'KCTB',
    airport: 'Cut Bank Municipal Airport',
    latitude: 48.60839844,
    longitude: -112.3759995
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'OTS',
    icao: '',
    airport: 'Anacortes Airport',
    latitude: 48.499,
    longitude: -122.662003
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'CSV',
    icao: 'KCSV',
    airport: 'Crossville Memorial-Whitson Field',
    latitude: 35.95130157,
    longitude: -85.08499908
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CSQ',
    icao: 'KCSQ',
    airport: 'Creston Municipal Airport',
    latitude: 41.02140045,
    longitude: -94.36329651
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'CSN',
    icao: 'KCXP',
    airport: 'Carson Airport',
    latitude: 39.19219971,
    longitude: -119.7340012
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'CSM',
    icao: 'KCSM',
    airport: 'Clinton-Sherman Airport',
    latitude: 35.33980179,
    longitude: -99.20050049
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'OTZ',
    icao: 'PAOT',
    airport: 'Ralph Wien Memorial Airport',
    latitude: 66.88469696,
    longitude: -162.598999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KMO',
    icao: 'PAMB',
    airport: 'Manokotak Airport',
    latitude: 58.99020004,
    longitude: -159.0500031
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'CSG',
    icao: 'KCSG',
    airport: 'Columbus Airport',
    latitude: 32.5163002,
    longitude: -84.93890381
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'CSE',
    icao: '',
    airport: 'Buckhorn Ranch Airport',
    latitude: 38.851918,
    longitude: -106.928341
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'OUN',
    icao: 'KOUN',
    airport: 'University of Oklahoma Westheimer Airport (Max Westheimer Airport)',
    latitude: 35.2456,
    longitude: -97.472099
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KLW',
    icao: 'PAKW',
    airport: 'Klawock Airport',
    latitude: 55.57920074,
    longitude: -133.076004
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'CRX',
    icao: 'KCRX',
    airport: 'Roscoe Turner Airport',
    latitude: 34.91500092,
    longitude: -88.60350037
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'CRW',
    icao: 'KCRW',
    airport: 'Yeager Airport',
    latitude: 38.37310028,
    longitude: -81.59320068
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'CRT',
    icao: 'KCRT',
    airport: 'Z. M. Jack Stell Field',
    latitude: 33.17829895,
    longitude: -91.88020325
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CRS',
    icao: 'KCRS',
    airport: 'C. David Campbell Field (Corsicana Municipal Airport)',
    latitude: 32.02809906,
    longitude: -96.40059662
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CRP',
    icao: 'KCRP',
    airport: 'Corpus Christi International Airport',
    latitude: 27.77039909,
    longitude: -97.50119781
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CRO',
    icao: 'KCRO',
    airport: 'Corcoran Airport',
    latitude: 36.102502,
    longitude: -119.595001
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'OVE',
    icao: 'KOVE',
    airport: 'Oroville Municipal Airport',
    latitude: 39.4878006,
    longitude: -121.6220016
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'KLS',
    icao: 'KKLS',
    airport: 'Southwest Washington Regional Airport',
    latitude: 46.11800003,
    longitude: -122.8980026
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'CRG',
    icao: 'KCRG',
    airport: 'Jacksonville Executive at Craig Airport',
    latitude: 30.3362999,
    longitude: -81.51439667
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CRE',
    icao: 'KCRE',
    airport: 'Grand Strand Airport',
    latitude: 33.81169891,
    longitude: -78.72389984
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'OWA',
    icao: 'KOWA',
    airport: 'Owatonna Degner Regional Airport',
    latitude: 44.12340164,
    longitude: -93.26059723
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'CPX',
    icao: 'TJCP',
    airport: 'Benjamin Rivera Noriega Airport',
    latitude: 18.313289,
    longitude: -65.304324
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'CPS',
    icao: 'KCPS',
    airport: 'St. Louis Downtown Airport',
    latitude: 38.5707016,
    longitude: -90.15619659
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'CPR',
    icao: 'KCPR',
    airport: 'Casper-Natrona County International Airport',
    latitude: 42.908001,
    longitude: -106.463997
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CPM',
    icao: 'KCPM',
    airport: 'Compton/Woodley Airport',
    latitude: 33.88999939,
    longitude: -118.2440033
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'OWB',
    icao: 'KOWB',
    airport: 'Owensboro-Daviess County Airport',
    latitude: 37.74010086,
    longitude: -87.16680145
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'OWD',
    icao: 'KOWD',
    airport: 'Norwood Memorial Airport',
    latitude: 42.19049835,
    longitude: -71.17289734
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'COU',
    icao: 'KCOU',
    airport: 'Columbia Regional Airport',
    latitude: 38.8181,
    longitude: -92.219597
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'COT',
    icao: 'KCOT',
    airport: 'Cotulla-La Salle County Airport',
    latitude: 28.45669937,
    longitude: -99.22029877
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'COS',
    icao: 'KCOS',
    airport: 'Colorado Springs Airport',
    latitude: 38.805801,
    longitude: -104.700996
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'OWK',
    icao: 'KOWK',
    airport: 'Central Maine Airport of Norridgewock',
    latitude: 44.71549988,
    longitude: -69.86650085
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'COP',
    icao: '',
    airport: 'Cooperstown-Westville Airport',
    latitude: 42.62919998,
    longitude: -74.89099884
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'CON',
    icao: 'KCON',
    airport: 'Concord Municipal Airport',
    latitude: 43.20270157,
    longitude: -71.50229645
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'COM',
    icao: 'KCOM',
    airport: 'Coleman Municipal Airport',
    latitude: 31.84110069,
    longitude: -99.4036026
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'COI',
    icao: 'KCOI',
    airport: 'Merritt Island Airport',
    latitude: 28.34160042,
    longitude: -80.6855011
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'COF',
    icao: 'KCOF',
    airport: 'Patrick Air Force Base',
    latitude: 28.23489952,
    longitude: -80.61009979
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'COE',
    icao: 'KCOE',
    airport: 'Coeur d Alene Airport',
    latitude: 47.77429962,
    longitude: -116.8199997
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'COD',
    icao: 'KCOD',
    airport: 'Yellowstone Regional Airport',
    latitude: 44.52019882,
    longitude: -109.0240021
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'COA',
    icao: '',
    airport: 'Columbia Airport',
    latitude: 38.03039932,
    longitude: -120.4150009
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'CNY',
    icao: 'KCNY',
    airport: 'Canyonlands Field',
    latitude: 38.75500107,
    longitude: -109.7549973
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KLN',
    icao: 'PALB',
    airport: 'Larsen Bay Airport',
    latitude: 57.53509903,
    longitude: -153.9779968
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CNW',
    icao: 'KCNW',
    airport: 'TSTC Waco Airport',
    latitude: 31.63780022,
    longitude: -97.07409668
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'CNU',
    icao: 'KCNU',
    airport: 'Chanute Martin Johnson Airport',
    latitude: 37.66880035,
    longitude: -95.48509979
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CNO',
    icao: 'KCNO',
    airport: 'Chino Airport',
    latitude: 33.97470093,
    longitude: -117.637001
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'CNM',
    icao: 'KCNM',
    airport: 'Cavern City Air Terminal',
    latitude: 32.33750153,
    longitude: -104.2630005
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'CNK',
    icao: 'KCNK',
    airport: 'Blosser Municipal Airport',
    latitude: 39.54930115,
    longitude: -97.65229797
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'CNH',
    icao: 'KCNH',
    airport: 'Claremont Municipal Airport',
    latitude: 43.37039948,
    longitude: -72.36869812
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'CNE',
    icao: '',
    airport: 'Fremont County Airport',
    latitude: 38.4280014,
    longitude: -105.1060028
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'OXC',
    icao: 'KOXC',
    airport: 'Waterbury-Oxford Airport',
    latitude: 41.47859955,
    longitude: -73.1352005
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'OXD',
    icao: 'KOXD',
    airport: 'Miami University Airport',
    latitude: 39.50230026,
    longitude: -84.78440094
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KLL',
    icao: '',
    airport: 'Levelock Airport',
    latitude: 59.12810135,
    longitude: -156.8589935
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'CMY',
    icao: 'KCMY',
    airport: 'Sparta/Fort McCoy Airport',
    latitude: 43.958302,
    longitude: -90.7379
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'CMX',
    icao: 'KCMX',
    airport: 'Houghton County Memorial Airport',
    latitude: 47.16839981,
    longitude: -88.4890976
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KLG',
    icao: 'PALG',
    airport: 'Kalskag Airport',
    latitude: 61.53630066,
    longitude: -160.3410034
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'OXR',
    icao: 'KOXR',
    airport: 'Oxnard Airport',
    latitude: 34.20080185,
    longitude: -119.2070007
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKU',
    icao: '',
    airport: 'Ekuk Airport',
    latitude: 58.81119919,
    longitude: -158.5590057
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'OZA',
    icao: 'KOZA',
    airport: 'Ozona Municipal Airport',
    latitude: 30.73530006,
    longitude: -101.2030029
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'OZR',
    icao: 'KOZR',
    airport: 'Cairns Army Airfield',
    latitude: 31.27569962,
    longitude: -85.71340179
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'PAE',
    icao: 'KPAE',
    airport: 'Paine Field (Snohomish County Airport)',
    latitude: 47.90629959,
    longitude: -122.2819977
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'PAH',
    icao: 'KPAH',
    airport: 'Barkley Regional Airport',
    latitude: 37.06079865,
    longitude: -88.77380371
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'CMI',
    icao: 'KCMI',
    airport: 'University of Illinois Willard Airport',
    latitude: 40.03919983,
    longitude: -88.27809906
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'CMH',
    icao: 'KCMH',
    airport: 'John Glenn Columbus International Airport',
    latitude: 39.998001,
    longitude: -82.891899
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'PAK',
    icao: 'PHPA',
    airport: 'Port Allen Airport',
    latitude: 21.89690018,
    longitude: -159.6029968
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PAM',
    icao: 'KPAM',
    airport: 'Tyndall Air Force Base',
    latitude: 30.06959915,
    longitude: -85.57540131
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'CLW',
    icao: 'KCLW',
    airport: 'Clearwater Air Park',
    latitude: 27.97669983,
    longitude: -82.75869751
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'CLT',
    icao: 'KCLT',
    airport: 'Charlotte Douglas International Airport',
    latitude: 35.2140007,
    longitude: -80.94309998
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'CLS',
    icao: 'KCLS',
    airport: 'Chehalis-Centralia Airport',
    latitude: 46.67699814,
    longitude: -122.9830017
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'YIP',
    icao: 'KYIP',
    airport: 'Willow Run Airport',
    latitude: 42.23789978,
    longitude: -83.53040314
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CLR',
    icao: 'KCLR',
    airport: 'Cliff Hatfield Memorial Airport',
    latitude: 33.13150024,
    longitude: -115.5210037
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PAO',
    icao: 'KPAO',
    airport: 'Palo Alto Airport (Santa Clara County Airport)',
    latitude: 37.46110153,
    longitude: -122.1149979
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CLP',
    icao: 'PFCL',
    airport: 'Clarks Point Airport',
    latitude: 58.83369827,
    longitude: -158.529007
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'CLM',
    icao: 'KCLM',
    airport: 'William R. Fairchild International Airport',
    latitude: 48.12020111,
    longitude: -123.5
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CLL',
    icao: 'KCLL',
    airport: 'Easterwood Airport (Easterwood Field)',
    latitude: 30.58860016,
    longitude: -96.36380005
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'CLK',
    icao: 'KCLK',
    airport: 'Clinton Regional Airport',
    latitude: 35.53829956,
    longitude: -98.93270111
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKL',
    icao: '',
    airport: 'Karluk Lake Seaplane Base',
    latitude: 57.36700058,
    longitude: -154.0279999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PAQ',
    icao: 'PAAQ',
    airport: 'Palmer Municipal Airport',
    latitude: 61.594898,
    longitude: -149.08901
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'CLI',
    icao: 'KCLI',
    airport: 'Clintonville Municipal Airport',
    latitude: 44.61380005,
    longitude: -88.73130035
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CLG',
    icao: '',
    airport: 'New Coalinga Municipal Airport',
    latitude: 36.1631012,
    longitude: -120.2939987
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'CLE',
    icao: 'KCLE',
    airport: 'Cleveland Hopkins International Airport',
    latitude: 41.4117012,
    longitude: -81.84980011
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CLD',
    icao: 'KCRQ',
    airport: 'McClellan-Palomar Airport',
    latitude: 33.12829971,
    longitude: -117.2799988
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKK',
    icao: '',
    airport: 'Kalakaket Creek Air Station',
    latitude: 64.4166257,
    longitude: -156.8203926
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CKX',
    icao: '',
    airport: 'Chicken Airport',
    latitude: 64.07129669,
    longitude: -141.9519959
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'CKV',
    icao: 'KCKV',
    airport: 'Clarksville-Montgomery County Regional Airport (Outlaw Field)',
    latitude: 36.62189865,
    longitude: -87.41500092
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CKU',
    icao: '',
    airport: 'Cordova Municipal Airport',
    latitude: 60.54389954,
    longitude: -145.727005
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'CKR',
    icao: '',
    airport: 'Crane Island Airstrip',
    latitude: 48.5978,
    longitude: -122.9979
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'CKN',
    icao: 'KCKN',
    airport: 'Crookston Municipal Airport (Kirkwood Field)',
    latitude: 47.84170151,
    longitude: -96.62159729
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'YKM',
    icao: 'KYKM',
    airport: 'Yakima Air Terminal (McAllister Field)',
    latitude: 46.56819916,
    longitude: -120.5439987
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'YKN',
    icao: 'KYKN',
    airport: 'Chan Gurney Municipal Airport',
    latitude: 42.91669846,
    longitude: -97.3859024
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKI',
    icao: '',
    airport: 'Akiachak Airport',
    latitude: 60.90480042,
    longitude: -161.4219971
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'CKM',
    icao: 'KCKM',
    airport: 'Fletcher Field',
    latitude: 34.29970169,
    longitude: -90.51229858
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKH',
    icao: 'PADY',
    airport: 'Kongiganak Airport',
    latitude: 59.96080017,
    longitude: -162.8809967
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKB',
    icao: '',
    airport: 'Kitoi Bay Seaplane Base',
    latitude: 58.1908989,
    longitude: -152.3699951
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'CKK',
    icao: 'KCVK',
    airport: 'Sharp County Regional Airport',
    latitude: 36.26490021,
    longitude: -91.56259918
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KKA',
    icao: 'PAKK',
    airport: 'Koyuk Alfred Adams Airport',
    latitude: 64.9394989,
    longitude: -161.154007
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CKE',
    icao: '',
    airport: 'Lampson Field',
    latitude: 38.99060059,
    longitude: -122.901001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CKD',
    icao: '',
    airport: 'Crooked Creek Airport',
    latitude: 61.86790085,
    longitude: -158.1349945
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'PBF',
    icao: 'KPBF',
    airport: 'Grider Field',
    latitude: 34.1731,
    longitude: -91.9356
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'CKB',
    icao: 'KCKB',
    airport: 'North Central West Virginia Airport',
    latitude: 39.29660034,
    longitude: -80.22810364
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'CKA',
    icao: 'KCKA',
    airport: 'Kegelman Air Force Auxiliary Field',
    latitude: 36.7439003,
    longitude: -98.12310028
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'PBG',
    icao: 'KPBG',
    airport: 'Plattsburgh International Airport',
    latitude: 44.65090179,
    longitude: -73.4681015
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PBI',
    icao: 'KPBI',
    airport: 'Palm Beach International Airport',
    latitude: 26.68320084,
    longitude: -80.09559631
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'KIP',
    icao: 'KCWC',
    airport: 'Kickapoo Downtown Airport',
    latitude: 33.85779953,
    longitude: -98.49040222
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PCA',
    icao: 'PAOC',
    airport: 'Portage Creek Airport',
    latitude: 58.9065,
    longitude: -157.714
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'PCD',
    icao: 'KPDC',
    airport: 'Prairie du Chien Municipal Airport',
    latitude: 43.01929855,
    longitude: -91.123703
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'KIC',
    icao: 'KKIC',
    airport: 'Mesa Del Rey Airport',
    latitude: 36.22800064,
    longitude: -121.1220016
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KIB',
    icao: '',
    airport: 'Ivanof Bay Seaplane Base',
    latitude: 55.89749908,
    longitude: -159.4889984
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'PCT',
    icao: '',
    airport: 'Princeton Airport',
    latitude: 40.39920044,
    longitude: -74.6588974
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'CIU',
    icao: 'KCIU',
    airport: 'Chippewa County International Airport',
    latitude: 46.25080109,
    longitude: -84.47239685
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'PCU',
    icao: '',
    airport: 'Poplarville-Pearl River County Airport',
    latitude: 30.7859993,
    longitude: -89.50450134
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'CIR',
    icao: 'KCIR',
    airport: 'Cairo Regional Airport',
    latitude: 37.0644989,
    longitude: -89.21959686
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'MGE',
    icao: 'KMGE',
    airport: 'Dobbins Air Reserve Base',
    latitude: 33.91540146,
    longitude: -84.51629639
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CIN',
    icao: 'KCIN',
    airport: 'Arthur N. Neu Airport',
    latitude: 42.0461998,
    longitude: -94.78900146
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CIL',
    icao: '',
    airport: 'Council Airport',
    latitude: 64.89790344,
    longitude: -163.7030029
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CIK',
    icao: 'PACI',
    airport: 'Chalkyitsik Airport',
    latitude: 66.64499664,
    longitude: -143.7400055
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PDB',
    icao: '',
    airport: 'Pedro Bay Airport',
    latitude: 59.78960037,
    longitude: -154.1239929
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'CIG',
    icao: 'KCAG',
    airport: 'Craig-Moffat Airport',
    latitude: 40.49520111,
    longitude: -107.5220032
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CID',
    icao: 'KCID',
    airport: 'The Eastern Iowa Airport',
    latitude: 41.88470078,
    longitude: -91.71080017
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CIC',
    icao: 'KCIC',
    airport: 'Chico Municipal Airport',
    latitude: 39.79539871,
    longitude: -121.8580017
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'CHZ',
    icao: '',
    airport: 'Chiloquin State Airport',
    latitude: 42.57944049,
    longitude: -121.8790627
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'PDK',
    icao: 'KPDK',
    airport: 'DeKalb-Peachtree Airport',
    latitude: 33.87559891,
    longitude: -84.30200195
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'PDT',
    icao: 'KPDT',
    airport: 'Eastern Oregon Regional Airport',
    latitude: 45.69509888,
    longitude: -118.8410034
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'PDX',
    icao: 'KPDX',
    airport: 'Portland International Airport',
    latitude: 45.58869934,
    longitude: -122.5979996
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PEC',
    icao: '',
    airport: 'Pelican Seaplane Base',
    latitude: 57.9552002,
    longitude: -136.2359924
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CHU',
    icao: '',
    airport: 'Chuathbaluk Airport',
    latitude: 61.579102,
    longitude: -159.216003
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KGZ',
    icao: '',
    airport: 'Glacier Creek Airport',
    latitude: 61.45510101,
    longitude: -142.3809967
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CHS',
    icao: 'KCHS',
    airport: 'Charleston International Airport / Charleston Air Force Base',
    latitude: 32.89860153,
    longitude: -80.04049683
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CHP',
    icao: '',
    airport: 'Circle Hot Springs Airport',
    latitude: 65.48549652,
    longitude: -144.6109924
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'CHO',
    icao: 'KCHO',
    airport: 'Charlottesville-Albemarle Airport',
    latitude: 38.1385994,
    longitude: -78.45290375
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KGX',
    icao: '',
    airport: 'Grayling Airport',
    latitude: 62.895187,
    longitude: -160.066289
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PEQ',
    icao: 'KPEQ',
    airport: 'Pecos Municipal Airport',
    latitude: 31.38240051,
    longitude: -103.5110016
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KGK',
    icao: 'PAJZ',
    airport: 'Koliganek Airport',
    latitude: 59.72660065,
    longitude: -157.2590027
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'CHL',
    icao: 'KLLJ',
    airport: 'Challis Airport',
    latitude: 44.522999,
    longitude: -114.218002
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'CHK',
    icao: 'KCHK',
    airport: 'Chickasha Municipal Airport',
    latitude: 35.09740067,
    longitude: -97.96769714
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'CHI',
    icao: '',
    airport: 'metropolitan area2',
    latitude: 41.883611,
    longitude: -87.631667
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'PFC',
    icao: 'KPFC',
    airport: 'Pacific City State Airport',
    latitude: 45.19979858,
    longitude: -123.961998
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PGA',
    icao: 'KPGA',
    airport: 'Page Municipal Airport',
    latitude: 36.92610168,
    longitude: -111.447998
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'PGC',
    icao: '',
    airport: 'Grant County Airport',
    latitude: 38.99489975,
    longitude: -79.14589691
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PGD',
    icao: 'KPGD',
    airport: 'Punta Gorda Airport',
    latitude: 26.92020035,
    longitude: -81.9905014
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KFP',
    icao: 'PAKF',
    airport: 'False Pass Airport',
    latitude: 54.84740067,
    longitude: -163.4100037
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'YNG',
    icao: 'KYNG',
    airport: 'Youngstown-Warren Regional Airport',
    latitude: 41.26070023,
    longitude: -80.67910004
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'CHA',
    icao: 'KCHA',
    airport: 'Chattanooga Metropolitan Airport (Lovell Field)',
    latitude: 35.03530121,
    longitude: -85.20379639
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'CGZ',
    icao: 'KCGZ',
    airport: 'Casa Grande Municipal Airport',
    latitude: 32.954899,
    longitude: -111.766998
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'PGL',
    icao: 'KPQL',
    airport: 'Trent Lott International Airport',
    latitude: 30.46279907,
    longitude: -88.52919769
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'CGS',
    icao: 'KCGS',
    airport: 'College Park Airport',
    latitude: 38.98059845,
    longitude: -76.92230225
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PGM',
    icao: '',
    airport: 'Port Graham Airport',
    latitude: 59.34830093,
    longitude: -151.8320007
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'CGI',
    icao: 'KCGI',
    airport: 'Cape Girardeau Regional Airport',
    latitude: 37.22529984,
    longitude: -89.57080078
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'PGO',
    icao: 'KPSO',
    airport: 'Stevens Field',
    latitude: 37.28630066,
    longitude: -107.0559998
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'CGF',
    icao: 'KCGF',
    airport: 'Cuyahoga County Airport',
    latitude: 41.56510162,
    longitude: -81.48639679
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'CGE',
    icao: 'KCGE',
    airport: 'Cambridge-Dorchester Airport',
    latitude: 38.53929901,
    longitude: -76.03040314
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'PGR',
    icao: 'KPGR',
    airport: 'Kirk Field',
    latitude: 36.06290054,
    longitude: -90.50779724
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PGS',
    icao: '',
    airport: 'Grand Canyon Caverns Airport',
    latitude: 35.571266,
    longitude: -113.293008
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CGA',
    icao: '',
    airport: 'Craig Seaplane Base',
    latitude: 55.47880173,
    longitude: -133.147995
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'CFV',
    icao: 'KCFV',
    airport: 'Coffeyville Municipal Airport',
    latitude: 37.09400177,
    longitude: -95.57189941
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'CFT',
    icao: 'KCFT',
    airport: 'Greenlee County Airport',
    latitude: 32.95280075,
    longitude: -109.2099991
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CFD',
    icao: 'KCFD',
    airport: 'Coulter Field',
    latitude: 30.71570015,
    longitude: -96.33139801
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'CEZ',
    icao: 'KCEZ',
    airport: 'Cortez Municipal Airport',
    latitude: 37.3030014,
    longitude: -108.6279984
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'CEY',
    icao: 'KCEY',
    airport: 'Murray-Calloway County Airport',
    latitude: 36.66460037,
    longitude: -88.37280273
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CEX',
    icao: '',
    airport: 'Chena Hot Springs Airport',
    latitude: 65.05180359,
    longitude: -146.0469971
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'CEW',
    icao: 'KCEW',
    airport: 'Bob Sikes Airport',
    latitude: 30.77879906,
    longitude: -86.52210236
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'PGV',
    icao: 'KPGV',
    airport: 'Pitt-Greenville Airport',
    latitude: 35.6352005,
    longitude: -77.38529968
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CEU',
    icao: 'KCEU',
    airport: 'Oconee County Regional Airport',
    latitude: 34.6719017,
    longitude: -82.8864975
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KEK',
    icao: '',
    airport: 'Ekwok Airport',
    latitude: 59.35680008,
    longitude: -157.470993
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CEM',
    icao: 'PARL',
    airport: 'Central Airport',
    latitude: 65.57379913,
    longitude: -144.7830048
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'PHD',
    icao: 'KPHD',
    airport: 'Harry Clever Field',
    latitude: 40.47090149,
    longitude: -81.41970062
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'PHF',
    icao: 'KPHF',
    airport: 'Newport News/Williamsburg International Airport',
    latitude: 37.13190079,
    longitude: -76.49299622
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'KEH',
    icao: '',
    airport: 'Kenmore Air Harbor',
    latitude: 47.75479889,
    longitude: -122.2590027
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'CEF',
    icao: 'KCEF',
    airport: 'Westover Metropolitan Airport / Westover Air Reserve Base',
    latitude: 42.19400024,
    longitude: -72.53479767
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PHK',
    icao: 'KPHK',
    airport: 'Palm Beach County Glades Airport',
    latitude: 26.78499985,
    longitude: -80.69339752
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CEC',
    icao: 'KCEC',
    airport: 'Del Norte County Airport (Jack McNamara Field)',
    latitude: 41.78020096,
    longitude: -124.2369995
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PHL',
    icao: 'KPHL',
    airport: 'Philadelphia International Airport',
    latitude: 39.87189865,
    longitude: -75.2410965
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'CEA',
    icao: 'KCEA',
    airport: 'Cessna Aircraft Field',
    latitude: 37.64860153,
    longitude: -97.25060272
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'PHN',
    icao: 'KPHN',
    airport: 'St. Clair County International Airport',
    latitude: 42.9109993,
    longitude: -82.52890015
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'CDW',
    icao: 'KCDW',
    airport: 'Essex County Airport',
    latitude: 40.87519836,
    longitude: -74.28140259
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CDV',
    icao: 'PACV',
    airport: 'Merle K. (Mudhole) Smith Airport',
    latitude: 60.4917984,
    longitude: -145.4779968
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CDS',
    icao: 'KCDS',
    airport: 'Childress Municipal Airport',
    latitude: 34.43379974,
    longitude: -100.288002
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'CDR',
    icao: 'KCDR',
    airport: 'Chadron Municipal Airport',
    latitude: 42.83760071,
    longitude: -103.0950012
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CDN',
    icao: 'KCDN',
    airport: 'Woodward Field',
    latitude: 34.28359985,
    longitude: -80.56490326
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CDL',
    icao: '',
    airport: 'Candle 2 Airport',
    latitude: 65.90769959,
    longitude: -161.9259949
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'CDK',
    icao: 'KCDK',
    airport: 'George T. Lewis Airport',
    latitude: 29.1342222,
    longitude: -83.0504722
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'CDH',
    icao: 'KCDH',
    airport: 'Harrell Field',
    latitude: 33.62279892,
    longitude: -92.76339722
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'CDC',
    icao: 'KCDC',
    airport: 'Cedar City Regional Airport',
    latitude: 37.70100021,
    longitude: -113.098999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'CDB',
    icao: 'PACD',
    airport: 'Cold Bay Airport',
    latitude: 55.20610046,
    longitude: -162.7250061
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CCY',
    icao: 'KCCY',
    airport: 'Northeast Iowa Regional Airport',
    latitude: 43.07260132,
    longitude: -92.6108017
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CCR',
    icao: 'KCCR',
    airport: 'Buchanan Field Airport',
    latitude: 37.98970032,
    longitude: -122.0569992
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'CCG',
    icao: '',
    airport: 'Crane County Airport',
    latitude: 31.4151001,
    longitude: -102.362999
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'CCB',
    icao: 'KCCB',
    airport: 'Cable Airport',
    latitude: 34.11159897,
    longitude: -117.6880035
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PHO',
    icao: 'PAPO',
    airport: 'Point Hope Airport',
    latitude: 68.34880066,
    longitude: -166.798996
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'PHP',
    icao: 'KPHP',
    airport: 'Philip Airport',
    latitude: 44.04859924,
    longitude: -101.598999
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'PHT',
    icao: 'KPHT',
    airport: 'Henry County Airport',
    latitude: 36.33819962,
    longitude: -88.38289642
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'CBM',
    icao: 'KCBM',
    airport: 'Columbus Air Force Base',
    latitude: 33.64379883,
    longitude: -88.44380188
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'CBK',
    icao: 'KCBK',
    airport: 'Colby Municipal Airport (Shalz Field)',
    latitude: 39.42750168,
    longitude: -101.0469971
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'CBF',
    icao: 'KCBF',
    airport: 'Council Bluffs Municipal Airport',
    latitude: 41.25920105,
    longitude: -95.76059723
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'CBE',
    icao: 'KCBE',
    airport: 'Greater Cumberland Regional Airport',
    latitude: 39.61539841,
    longitude: -78.7609024
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PHX',
    icao: 'KPHX',
    airport: 'Phoenix Sky Harbor International Airport',
    latitude: 33.43429947,
    longitude: -112.012001
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'PIA',
    icao: 'KPIA',
    airport: 'General Wayne A. Downing Peoria International Airport',
    latitude: 40.66419983,
    longitude: -89.69329834
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'CAR',
    icao: 'KCAR',
    airport: 'Caribou Municipal Airport',
    latitude: 46.87149811,
    longitude: -68.01789856
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'CAO',
    icao: 'KCAO',
    airport: 'Clayton Municipal Airpark',
    latitude: 36.44620132,
    longitude: -103.1669998
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'CAK',
    icao: 'KCAK',
    airport: 'Akron-Canton Airport',
    latitude: 40.91609955,
    longitude: -81.44219971
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'EAA',
    icao: 'PAEG',
    airport: 'Eagle Airport',
    latitude: 64.77639771,
    longitude: -141.151001
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'CAE',
    icao: 'KCAE',
    airport: 'Columbia Metropolitan Airport',
    latitude: 33.93880081,
    longitude: -81.11949921
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'CAD',
    icao: 'KCAD',
    airport: 'Wexford County Airport',
    latitude: 44.27529907,
    longitude: -85.41889954
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'PIB',
    icao: 'KPIB',
    airport: 'Hattiesburg-Laurel Regional Airport',
    latitude: 31.46710014,
    longitude: -89.33709717
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BZT',
    icao: '',
    airport: 'Eagle Air Park',
    latitude: 28.98220062,
    longitude: -95.57969666
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'BZN',
    icao: 'KBZN',
    airport: 'Bozeman Yellowstone International Airport (Gallatin Field)',
    latitude: 45.77750015,
    longitude: -111.1529999
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PIE',
    icao: 'KPIE',
    airport: 'St. Pete-Clearwater International Airport',
    latitude: 27.91020012,
    longitude: -82.68740082
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'PIH',
    icao: 'KPIH',
    airport: 'Pocatello Regional Airport',
    latitude: 42.90980148,
    longitude: -112.5960007
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KEB',
    icao: '',
    airport: 'Nanwalek Airport',
    latitude: 59.35210037,
    longitude: -151.9250031
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BZF',
    icao: '',
    airport: 'Benton Field',
    latitude: 40.57490158,
    longitude: -122.4079971
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'PIM',
    icao: 'KPIM',
    airport: 'Harris County Airport',
    latitude: 32.84069824,
    longitude: -84.88240051
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PIP',
    icao: 'PAPN',
    airport: 'Pilot Point Airport',
    latitude: 57.58039856,
    longitude: -157.5720062
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'BYW',
    icao: '',
    airport: 'Blakely Island Airport',
    latitude: 48.57899857,
    longitude: -122.8259964
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'PIR',
    icao: 'KPIR',
    airport: 'Pierre Regional Airport',
    latitude: 44.38270187,
    longitude: -100.2860031
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BYS',
    icao: 'KBYS',
    airport: 'Bicycle Lake Army Airfield (Fort Irwin)',
    latitude: 35.2804985,
    longitude: -116.6299973
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PIT',
    icao: 'KPIT',
    airport: 'Pittsburgh International Airport',
    latitude: 40.49150085,
    longitude: -80.23290253
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PIZ',
    icao: 'PPIZ',
    airport: 'Point Lay LRRS Airport',
    latitude: 69.73290253,
    longitude: -163.0050049
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'BYI',
    icao: 'KBYI',
    airport: 'Burley Municipal Airport',
    latitude: 42.54259872,
    longitude: -113.7720032
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'BYH',
    icao: 'KBYH',
    airport: 'Arkansas International Airport',
    latitude: 35.96429825,
    longitude: -89.94400024
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'BYG',
    icao: 'KBYG',
    airport: 'Johnson County Airport',
    latitude: 44.3810997,
    longitude: -106.7220001
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PJB',
    icao: 'KPAN',
    airport: 'Payson Airport',
    latitude: 34.25680161,
    longitude: -111.3389969
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BYA',
    icao: '',
    airport: 'Boundary Airport',
    latitude: 64.07830048,
    longitude: -141.1130066
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PKA',
    icao: 'PAPK',
    airport: 'Napaskiak Airport',
    latitude: 60.70289993,
    longitude: -161.7779999
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'PKB',
    icao: 'KPKB',
    airport: 'Mid-Ohio Valley Regional Airport',
    latitude: 39.3451004,
    longitude: -81.43920135
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BXS',
    icao: '',
    airport: 'Borrego Valley Airport',
    latitude: 33.25899887,
    longitude: -116.3209991
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'PKD',
    icao: 'KPKD',
    airport: 'Park Rapids Municipal Airport (Konshok Field)',
    latitude: 46.9006,
    longitude: -95.073095
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'PKF',
    icao: 'KPKF',
    airport: 'Park Falls Municipal Airport',
    latitude: 45.95500183,
    longitude: -90.42440033
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'BXK',
    icao: 'KBXK',
    airport: 'Buckeye Municipal Airport',
    latitude: 33.42039871,
    longitude: -112.685997
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KDK',
    icao: 'PAKD',
    airport: 'Kodiak Municipal Airport',
    latitude: 57.80590057,
    longitude: -152.3739929
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KCR',
    icao: '',
    airport: 'Colorado Creek Airport',
    latitude: 63.56769943,
    longitude: -155.9889984
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KCQ',
    icao: '',
    airport: 'Chignik Lake Airport',
    latitude: 56.25500107,
    longitude: -158.7749939
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'BXA',
    icao: 'KBXA',
    airport: 'George R. Carr Memorial Air Field',
    latitude: 30.81369972,
    longitude: -89.86499786
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'PLK',
    icao: 'KPLK',
    airport: 'M. Graham Clark Downtown Airport',
    latitude: 36.62590027,
    longitude: -93.22889709
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'BWM',
    icao: 'KBPP',
    airport: 'Bowman Municipal Airport',
    latitude: 46.1655193,
    longitude: -103.30075
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'BWL',
    icao: 'KBKN',
    airport: 'Blackwell-Tonkawa Municipal Airport',
    latitude: 36.79589844,
    longitude: -97.31700134
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'BWI',
    icao: 'KBWI',
    airport: 'Baltimore/Washington International Thurgood Marshall Airport',
    latitude: 39.1754,
    longitude: -76.668297
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KCN',
    icao: '',
    airport: 'Chernofski Harbor Seaplane Base',
    latitude: 53.40289934,
    longitude: -167.5202715
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'BWG',
    icao: 'KBWG',
    airport: 'Bowling Green-Warren County Regional Airport',
    latitude: 36.96450043,
    longitude: -86.41970062
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BWD',
    icao: 'KBWD',
    airport: 'Brownwood Regional Airport',
    latitude: 31.79360008,
    longitude: -98.95649719
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BWC',
    icao: 'KBWC',
    airport: 'Brawley Municipal Airport',
    latitude: 32.99290085,
    longitude: -115.5169983
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'PLN',
    icao: 'KPLN',
    airport: 'Pellston Regional Airport (Emmet County)',
    latitude: 45.57089996,
    longitude: -84.79669952
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'BVY',
    icao: 'KBVY',
    airport: 'Beverly Municipal Airport',
    latitude: 42.58420181,
    longitude: -70.91649628
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'BVX',
    icao: 'KBVX',
    airport: 'Batesville Regional Airport',
    latitude: 35.7262001,
    longitude: -91.64730072
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'PLR',
    icao: 'KPLR',
    airport: 'St. Clair County Airport',
    latitude: 33.55879974,
    longitude: -86.24909973
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BVU',
    icao: 'PABG',
    airport: 'Beluga Airport',
    latitude: 61.17219925,
    longitude: -151.0440063
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'BVO',
    icao: 'KBVO',
    airport: 'Bartlesville Municipal Airport',
    latitude: 36.76250076,
    longitude: -96.01119995
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KCL',
    icao: '',
    airport: 'Chignik Lagoon Airport (Chignik Flats Airport)',
    latitude: 56.31119919,
    longitude: -158.5359955
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BUR',
    icao: 'KBUR',
    airport: 'Bob Hope Airport',
    latitude: 34.20069885,
    longitude: -118.3590012
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'PMB',
    icao: 'KPMB',
    airport: 'Pembina Municipal Airport',
    latitude: 48.94250107,
    longitude: -97.24079895
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'BUM',
    icao: 'KBUM',
    airport: 'Butler Memorial Airport',
    latitude: 38.28979874,
    longitude: -94.34010315
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PMD',
    icao: 'KPMD',
    airport: 'Palmdale Regional Airport',
    latitude: 34.62939835,
    longitude: -118.0849991
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KCC',
    icao: '',
    airport: 'Coffman Cove Seaplane Base',
    latitude: 56.00320053,
    longitude: -132.8419952
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'BUF',
    icao: 'KBUF',
    airport: 'Buffalo Niagara International Airport',
    latitude: 42.94049835,
    longitude: -78.73220062
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'BUB',
    icao: 'KBUB',
    airport: 'Cram Field',
    latitude: 41.77669907,
    longitude: -99.14969635
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'PMH',
    icao: 'KPMH',
    airport: 'Greater Portsmouth Regional Airport',
    latitude: 38.84049988,
    longitude: -82.84729767
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'BTY',
    icao: 'KBTY',
    airport: 'Beatty Airport',
    latitude: 36.86109924,
    longitude: -116.7870026
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'BTV',
    icao: 'KBTV',
    airport: 'Burlington International Airport',
    latitude: 44.47190094,
    longitude: -73.15329742
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KBW',
    icao: '',
    airport: 'Chignik Bay Seaplane Base',
    latitude: 56.29560089,
    longitude: -158.401001
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BTT',
    icao: 'PABT',
    airport: 'Bettles Airport',
    latitude: 66.91390228,
    longitude: -151.529007
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PML',
    icao: 'PAAL',
    airport: 'Port Moller Airport',
    latitude: 56.00600052,
    longitude: -160.5610046
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'BTR',
    icao: 'KBTR',
    airport: 'Baton Rouge Metropolitan Airport (Ryan Field)',
    latitude: 30.533199,
    longitude: -91.149597
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'YUM',
    icao: 'KNYL',
    airport: 'Yuma International Airport / MCAS Yuma',
    latitude: 32.65660095,
    longitude: -114.6060028
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'PMX',
    icao: '',
    airport: 'Metropolitan Airport',
    latitude: 42.22330093,
    longitude: -72.31140137
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'BTP',
    icao: 'KBTP',
    airport: 'Butler County Airport (K.W. Scholter Field)',
    latitude: 40.776901,
    longitude: -79.949699
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KBE',
    icao: '',
    airport: 'Bell Island Hot Springs Seaplane Base',
    latitude: 55.92910004,
    longitude: -131.5720062
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'BTN',
    icao: 'KBBP',
    airport: 'Marlboro County Jetport',
    latitude: 34.62170029,
    longitude: -79.73439789
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'BTM',
    icao: 'KBTM',
    airport: 'Bert Mooney Airport',
    latitude: 45.95479965,
    longitude: -112.4970016
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'BTL',
    icao: 'KBTL',
    airport: 'W. K. Kellogg Airport',
    latitude: 42.30730057,
    longitude: -85.25150299
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'PNC',
    icao: 'KPNC',
    airport: 'Ponca City Regional Airport',
    latitude: 36.73199844,
    longitude: -97.09980011
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BTI',
    icao: 'PABA',
    airport: 'Barter Island LRRS Airport',
    latitude: 70.13400269,
    longitude: -143.5820007
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'BTF',
    icao: 'KBTF',
    airport: 'Skypark Airport',
    latitude: 40.86940002,
    longitude: -111.927002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KBC',
    icao: '',
    airport: 'Birch Creek Airport',
    latitude: 66.27400208,
    longitude: -145.8240051
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PNE',
    icao: 'KPNE',
    airport: 'Northeast Philadelphia Airport',
    latitude: 40.081902,
    longitude: -75.010597
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'PNN',
    icao: 'KPNN',
    airport: 'Princeton Municipal Airport',
    latitude: 45.20069885,
    longitude: -67.56439972
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PNS',
    icao: 'KPNS',
    airport: 'Pensacola International Airport',
    latitude: 30.4734,
    longitude: -87.1866
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BSW',
    icao: '',
    airport: 'Boswell Bay Airport',
    latitude: 60.42309952,
    longitude: -146.1459961
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'BSQ',
    icao: '',
    airport: 'Bisbee Municipal Airport',
    latitude: 31.36400032,
    longitude: -109.8830032
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KAL',
    icao: 'PAKV',
    airport: 'Kaltag Airport',
    latitude: 64.31909943,
    longitude: -158.7409973
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'PNU',
    icao: '',
    airport: 'Panguitch Municipal Airport',
    latitude: 37.84519958,
    longitude: -112.3919983
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PNX',
    icao: 'KGYI',
    airport: 'North Texas Regional Airport',
    latitude: 33.71409988,
    longitude: -96.67369843
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'BSF',
    icao: 'PHSF',
    airport: 'Bradshaw Army Airfield',
    latitude: 19.76009941,
    longitude: -155.5540009
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'KAE',
    icao: 'PAFE',
    airport: 'Kake Airport',
    latitude: 56.973,
    longitude: -133.945999
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'POB',
    icao: 'KPOB',
    airport: 'Pope Field (Pope AFB)',
    latitude: 35.17089844,
    longitude: -79.01450348
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'BRY',
    icao: 'KBRY',
    airport: 'Samuels Field',
    latitude: 37.81430054,
    longitude: -85.49960327
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BRW',
    icao: 'PABR',
    airport: 'Wiley Post-Will Rogers Memorial Airport',
    latitude: 71.285402,
    longitude: -156.766008
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BRO',
    icao: 'KBRO',
    airport: 'Brownsville/South Padre Island International Airport',
    latitude: 25.90679932,
    longitude: -97.42590332
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'BRL',
    icao: 'KBRL',
    airport: 'Southeast Iowa Regional Airport',
    latitude: 40.78319931,
    longitude: -91.12550354
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'BRD',
    icao: 'KBRD',
    airport: 'Brainerd Lakes Regional Airport',
    latitude: 46.39830017,
    longitude: -94.13809967
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BQV',
    icao: '',
    airport: 'Bartlett Cove Seaplane Base',
    latitude: 58.4552002,
    longitude: -135.8849945
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'POC',
    icao: 'KPOC',
    airport: 'Brackett Field',
    latitude: 34.09159851,
    longitude: -117.7819977
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'BQN',
    icao: 'TJBQ',
    airport: 'Rafael Hernandez Airport',
    latitude: 18.49489975,
    longitude: -67.12940216
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'BQK',
    icao: 'KBQK',
    airport: 'Brunswick Golden Isles Airport',
    latitude: 31.25880051,
    longitude: -81.46649933
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'POE',
    icao: 'KPOE',
    airport: 'Polk Army Airfield',
    latitude: 31.0447998,
    longitude: -93.1917038
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'POF',
    icao: 'KPOF',
    airport: 'Poplar Bluff Municipal Airport',
    latitude: 36.77389908,
    longitude: -90.32489777
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'POH',
    icao: 'KPOH',
    airport: 'Pocahontas Municipal Airport',
    latitude: 36.245556,
    longitude: -90.955276
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'JXN',
    icao: 'KJXN',
    airport: 'Jackson County Airport (Reynolds Field)',
    latitude: 42.25979996,
    longitude: -84.45939636
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'JVL',
    icao: 'KJVL',
    airport: 'Southern Wisconsin Regional Airport',
    latitude: 42.62030029,
    longitude: -89.04160309
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BPT',
    icao: 'KBPT',
    airport: 'Jack Brooks Regional Airport',
    latitude: 29.95079994,
    longitude: -94.02069855
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'JVI',
    icao: '',
    airport: 'Central Jersey Regional Airport',
    latitude: 40.5243988,
    longitude: -74.5983963
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'BPI',
    icao: 'KBPI',
    airport: 'Miley Memorial Field',
    latitude: 42.58509827,
    longitude: -110.1110001
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'POU',
    icao: 'KPOU',
    airport: 'Dutchess County Airport',
    latitude: 41.62659836,
    longitude: -73.88420105
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'POY',
    icao: 'KPOY',
    airport: 'Powell Municipal Airport',
    latitude: 44.86719894,
    longitude: -108.7929993
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'BOW',
    icao: 'KBOW',
    airport: 'Bartow Municipal Airport',
    latitude: 27.943399,
    longitude: -81.783401
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PPA',
    icao: 'KPPA',
    airport: 'Perry Lefors Field',
    latitude: 35.61299896,
    longitude: -100.9960022
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'BOS',
    icao: 'KBOS',
    airport: 'Logan International Airport',
    latitude: 42.36429977,
    longitude: -71.00520325
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PPC',
    icao: 'PAPR',
    airport: 'Prospect Creek Airport',
    latitude: 66.81410217,
    longitude: -150.6439972
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'BOK',
    icao: 'KBOK',
    airport: 'Brookings Airport',
    latitude: 42.0746,
    longitude: -124.290001
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'BOI',
    icao: 'KBOI',
    airport: 'Boise Air Terminal (Gowen Field)',
    latitude: 43.5644,
    longitude: -116.223
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'PPF',
    icao: 'KPPF',
    airport: 'Tri-City Airport',
    latitude: 37.32989883,
    longitude: -95.5062027
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'JST',
    icao: 'KJST',
    airport: 'John Murtha Johnstown-Cambria County Airport',
    latitude: 40.31610107,
    longitude: -78.83390045
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'PPM',
    icao: 'KPMP',
    airport: 'Pompano Beach Airpark',
    latitude: 26.24710083,
    longitude: -80.11109924
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'BNW',
    icao: 'KBNW',
    airport: 'Boone Municipal Airport',
    latitude: 42.04959869,
    longitude: -93.84760284
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'JRF',
    icao: 'PHJR',
    airport: 'Kalaeloa Airport (John Rodgers Field)',
    latitude: 21.3074,
    longitude: -158.070009
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PPV',
    icao: '',
    airport: 'Port Protection Seaplane Base',
    latitude: 56.3288002,
    longitude: -133.6100006
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'BNO',
    icao: 'KBNO',
    airport: 'Burns Municipal Airport',
    latitude: 43.59189987,
    longitude: -118.9550018
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'JOT',
    icao: 'KJOT',
    airport: 'Joliet Regional Airport',
    latitude: 41.51779938,
    longitude: -88.17549896
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'BNL',
    icao: 'KBNL',
    airport: 'Barnwell Regional Airport',
    latitude: 33.25780106,
    longitude: -81.38829803
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'PQI',
    icao: 'KPQI',
    airport: 'Northern Maine Regional Airport at Presque Isle',
    latitude: 46.688999,
    longitude: -68.0448
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BNG',
    icao: 'KBNG',
    airport: 'Banning Municipal Airport',
    latitude: 33.92309952,
    longitude: -116.8509979
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BNF',
    icao: '',
    airport: 'Warm Springs Bay Seaplane Base',
    latitude: 57.088799,
    longitude: -134.833146
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'BNA',
    icao: 'KBNA',
    airport: 'Nashville International Airport',
    latitude: 36.12450027,
    longitude: -86.67819977
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PQS',
    icao: '',
    airport: 'Pilot Station Airport',
    latitude: 61.934601,
    longitude: -162.899994
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BMX',
    icao: 'PABM',
    airport: 'Big Mountain Air Force Station',
    latitude: 59.36119843,
    longitude: -155.2590027
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BMT',
    icao: 'KBMT',
    airport: 'Beaumont Municipal Airport',
    latitude: 30.07069969,
    longitude: -94.21579742
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PRB',
    icao: 'KPRB',
    airport: 'Paso Robles Municipal Airport',
    latitude: 35.67290115,
    longitude: -120.6269989
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'BML',
    icao: 'KBML',
    airport: 'Berlin Regional Airport',
    latitude: 44.57540131,
    longitude: -71.17590332
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'BMI',
    icao: 'KBMI',
    airport: 'Central Illinois Regional Airport',
    latitude: 40.47710037,
    longitude: -88.91590118
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PRC',
    icao: 'KPRC',
    airport: 'Ernest A. Love Field',
    latitude: 34.654499,
    longitude: -112.419998
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'BMC',
    icao: 'KBMC',
    airport: 'Brigham City Airport',
    latitude: 41.552399,
    longitude: -112.061996
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'JNU',
    icao: 'PAJN',
    airport: 'Juneau International Airport',
    latitude: 58.35499954,
    longitude: -134.576004
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'PRO',
    icao: 'KPRO',
    airport: 'Perry Municipal Airport',
    latitude: 41.82799911,
    longitude: -94.15989685
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'BLV',
    icao: 'KBLV',
    airport: 'MidAmerica St. Louis Airport / Scott Air Force Base',
    latitude: 38.5452,
    longitude: -89.835197
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BLU',
    icao: 'KBLU',
    airport: 'Blue Canyon-Nyack Airport',
    latitude: 39.27500153,
    longitude: -120.7099991
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'JMS',
    icao: 'KJMS',
    airport: 'Jamestown Regional Airport',
    latitude: 46.92969894,
    longitude: -98.67819977
  },
  {
    country_code: 'US',
    region_name: 'New Jersey',
    iata: 'BLM',
    icao: 'KBLM',
    airport: 'Monmouth Executive Airport',
    latitude: 40.18690109,
    longitude: -74.12490082
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'BLI',
    icao: 'KBLI',
    airport: 'Bellingham International Airport',
    latitude: 48.7928009,
    longitude: -122.538002
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BLH',
    icao: 'KBLH',
    airport: 'Blythe Airport',
    latitude: 33.61920166,
    longitude: -114.7170029
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'PRW',
    icao: '',
    airport: 'Prentice Airport',
    latitude: 45.542999,
    longitude: -90.279297
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'BLF',
    icao: 'KBLF',
    airport: 'Mercer County Airport',
    latitude: 37.29579926,
    longitude: -81.20770264
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PRX',
    icao: 'KPRX',
    airport: 'Cox Field',
    latitude: 33.63660049,
    longitude: -95.45079803
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'BLD',
    icao: '',
    airport: 'Boulder City Municipal Airport',
    latitude: 35.947498,
    longitude: -114.861
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'PRZ',
    icao: '',
    airport: 'Prineville Airport',
    latitude: 44.28699875,
    longitude: -120.9039993
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PSB',
    icao: '',
    airport: 'Bellefonte Airport',
    latitude: 40.883506,
    longitude: -78.086279
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'BKX',
    icao: 'KBKX',
    airport: 'Brookings Regional Airport',
    latitude: 44.304798,
    longitude: -96.816902
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'BKW',
    icao: 'KBKW',
    airport: 'Raleigh County Memorial Airport',
    latitude: 37.78730011,
    longitude: -81.12419891
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'PSC',
    icao: 'KPSC',
    airport: 'Tri-Cities Airport',
    latitude: 46.26470184,
    longitude: -119.1190033
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'JLN',
    icao: 'KJLN',
    airport: 'Joplin Regional Airport',
    latitude: 37.15179825,
    longitude: -94.49829865
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'PSF',
    icao: 'KPSF',
    airport: 'Pittsfield Municipal Airport',
    latitude: 42.4268,
    longitude: -73.2929
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'BKT',
    icao: 'KBKT',
    airport: 'Blackstone Army Airfield (Allen C. Perkinson Airport)',
    latitude: 37.07419968,
    longitude: -77.95749664
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PSG',
    icao: 'PAPG',
    airport: 'Petersburg James A. Johnson Airport',
    latitude: 56.80170059,
    longitude: -132.9450073
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'JLA',
    icao: '',
    airport: 'Quartz Creek Airport',
    latitude: 60.48270035,
    longitude: -149.7189941
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'JKV',
    icao: 'KJSO',
    airport: 'Cherokee County Airport',
    latitude: 31.86930084,
    longitude: -95.2173996
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'PSK',
    icao: 'KPSK',
    airport: 'New River Valley Airport',
    latitude: 37.13729858,
    longitude: -80.67849731
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'PSM',
    icao: 'KPSM',
    airport: 'Portsmouth International Airport at Pease',
    latitude: 43.07789993,
    longitude: -70.82330322
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'BKL',
    icao: 'KBKL',
    airport: 'Cleveland Burke Lakefront Airport',
    latitude: 41.51750183,
    longitude: -81.6832962
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PSN',
    icao: 'KPSN',
    airport: 'Palestine Municipal Airport',
    latitude: 31.77969933,
    longitude: -95.70629883
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PSP',
    icao: 'KPSP',
    airport: 'Palm Springs International Airport',
    latitude: 33.82970047,
    longitude: -116.5070038
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PSQ',
    icao: '',
    airport: 'Philadelphia Seaplane Base',
    latitude: 39.85900116,
    longitude: -75.29959869
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PSX',
    icao: 'KPSX',
    airport: 'Palacios Municipal Airport',
    latitude: 28.72750092,
    longitude: -96.25099945
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'BKH',
    icao: 'PHBK',
    airport: 'Barking Sands PMRF',
    latitude: 22.02280045,
    longitude: -159.7850037
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'BKG',
    icao: 'KBBG',
    airport: 'Branson Airport',
    latitude: 36.532082,
    longitude: -93.200544
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BKF',
    icao: '',
    airport: 'Lake Brooks Seaplane Base',
    latitude: 58.55479813,
    longitude: -155.7769928
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'BKE',
    icao: 'KBKE',
    airport: 'Baker City Municipal Airport',
    latitude: 44.83729935,
    longitude: -117.8089981
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BKD',
    icao: 'KBKD',
    airport: 'Stephens County Airport',
    latitude: 32.71900177,
    longitude: -98.89099884
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BKC',
    icao: 'PABL',
    airport: 'Buckland Airport',
    latitude: 65.9815979,
    longitude: -161.1490021
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'JHW',
    icao: 'KJHW',
    airport: 'Chautauqua County-Jamestown Airport',
    latitude: 42.15340042,
    longitude: -79.25800323
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'JHM',
    icao: 'PHJH',
    airport: 'Kapalua Airport',
    latitude: 20.96290016,
    longitude: -156.6730042
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PTA',
    icao: 'PALJ',
    airport: 'Port Alsworth Airport',
    latitude: 60.201681,
    longitude: -154.325863
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'PTB',
    icao: 'KPTB',
    airport: 'Dinwiddie County Airport',
    latitude: 37.18379974,
    longitude: -77.50740051
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'BJJ',
    icao: 'KBJJ',
    airport: 'Wayne County Airport',
    latitude: 40.87480164,
    longitude: -81.88829803
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'BJI',
    icao: 'KBJI',
    airport: 'Bemidji Regional Airport',
    latitude: 47.50939941,
    longitude: -94.93370056
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PTC',
    icao: '',
    airport: 'Port Alice Seaplane Base',
    latitude: 55.803,
    longitude: -133.597
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PTD',
    icao: 'PAAP',
    airport: 'Port Alexander Seaplane Base',
    latitude: 56.24679947,
    longitude: -134.647995
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'BJC',
    icao: 'KBJC',
    airport: 'Rocky Mountain Metropolitan Airport',
    latitude: 39.90879822,
    longitude: -105.1169968
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'BIX',
    icao: 'KBIX',
    airport: 'Keesler Air Force Base',
    latitude: 30.41040039,
    longitude: -88.92440033
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PTH',
    icao: 'PAPH',
    airport: 'Port Heiden Airport',
    latitude: 56.95909882,
    longitude: -158.6329956
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'BIS',
    icao: 'KBIS',
    airport: 'Bismarck Municipal Airport',
    latitude: 46.77270126,
    longitude: -100.7460022
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'JFN',
    icao: 'KHZY',
    airport: 'Northeast Ohio Regional Airport',
    latitude: 41.77799988,
    longitude: -80.69550323
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'PTK',
    icao: 'KPTK',
    airport: 'Oakland County International Airport',
    latitude: 42.66550064,
    longitude: -83.42009735
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'BIL',
    icao: 'KBIL',
    airport: 'Billings Logan International Airport',
    latitude: 45.80770111,
    longitude: -108.5429993
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'PTN',
    icao: 'KPTN',
    airport: 'Harry P. Williams Memorial Airport',
    latitude: 29.70949936,
    longitude: -91.33899689
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'JFK',
    icao: 'KJFK',
    airport: 'John F. Kennedy International Airport',
    latitude: 40.63980103,
    longitude: -73.77890015
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'JEF',
    icao: 'KJEF',
    airport: 'Jefferson City Memorial Airport',
    latitude: 38.59120178,
    longitude: -92.15609741
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'PTS',
    icao: 'KPTS',
    airport: 'Atkinson Municipal Airport',
    latitude: 37.447777,
    longitude: -94.73111
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'PTT',
    icao: 'KPTT',
    airport: 'Pratt Regional Airport',
    latitude: 37.70159912,
    longitude: -98.74690247
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BIH',
    icao: 'KBIH',
    airport: 'Eastern Sierra Regional Airport',
    latitude: 37.37310028,
    longitude: -118.3639984
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PTU',
    icao: 'PAPM',
    airport: 'Platinum Airport',
    latitude: 59.01139832,
    longitude: -161.8200073
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BIG',
    icao: 'PABI',
    airport: 'Allen Army Airfield',
    latitude: 63.99449921,
    longitude: -145.7220001
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BIF',
    icao: 'KBIF',
    airport: 'Biggs Army Airfield',
    latitude: 31.84950066,
    longitude: -106.3799973
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PTV',
    icao: 'KPTV',
    airport: 'Porterville Municipal Airport',
    latitude: 36.02959824,
    longitude: -119.0630035
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'PTW',
    icao: 'KPTW',
    airport: 'Heritage Field',
    latitude: 40.239601,
    longitude: -75.556702
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'BIE',
    icao: 'KBIE',
    airport: 'Beatrice Municipal Airport',
    latitude: 40.30130005,
    longitude: -96.75409698
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'JDN',
    icao: 'KJDN',
    airport: 'Jordan Airport',
    latitude: 47.3288002,
    longitude: -106.9530029
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'PUB',
    icao: 'KPUB',
    airport: 'Pueblo Memorial Airport',
    latitude: 38.28910065,
    longitude: -104.4970016
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'BID',
    icao: 'KBID',
    airport: 'Block Island State Airport',
    latitude: 41.16809845,
    longitude: -71.57779694
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'PUC',
    icao: 'KPUC',
    airport: 'Carbon County Regional Airport',
    latitude: 39.61389923,
    longitude: -110.7509995
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'JDA',
    icao: 'KGCD',
    airport: 'Grant County Regional Airport (Ogilvie Field)',
    latitude: 44.40420151,
    longitude: -118.9629974
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'JCY',
    icao: '',
    airport: 'LBJ Ranch Airport',
    latitude: 30.25180054,
    longitude: -98.62249756
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'JCT',
    icao: 'KJCT',
    airport: 'Kimble County Airport',
    latitude: 30.51129913,
    longitude: -99.7634964
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ZNC',
    icao: '',
    airport: 'Nyac Airport',
    latitude: 60.98070145,
    longitude: -159.9940033
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'PUL',
    icao: '',
    airport: 'Port of Poulsbo Marina Moorage Seaplane Base',
    latitude: 47.73400116,
    longitude: -122.6470032
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'JCI',
    icao: 'KIXD',
    airport: 'New Century AirCenter',
    latitude: 38.83089828,
    longitude: -94.89029694
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'JBT',
    icao: '',
    airport: 'Bethel Seaplane Base',
    latitude: 60.7820015,
    longitude: -161.7429962
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'JBR',
    icao: 'KJBR',
    airport: 'Jonesboro Municipal Airport',
    latitude: 35.83169937,
    longitude: -90.64640045
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'BHM',
    icao: 'KBHM',
    airport: 'Birmingham-Shuttlesworth International Airport',
    latitude: 33.56290054,
    longitude: -86.75350189
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'JAX',
    icao: 'KJAX',
    airport: 'Jacksonville International Airport',
    latitude: 30.49410057,
    longitude: -81.68789673
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'ZPH',
    icao: 'KZPH',
    airport: 'Zephyrhills Municipal Airport',
    latitude: 28.22820091,
    longitude: -82.15589905
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'PUW',
    icao: 'KPUW',
    airport: 'Pullman-Moscow Regional Airport',
    latitude: 46.7439,
    longitude: -117.110001
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'JAS',
    icao: 'KJAS',
    airport: 'Jasper County Airport (Bell Field)',
    latitude: 30.88570023,
    longitude: -94.03489685
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'JAN',
    icao: 'KJAN',
    airport: 'Jackson-Evers International Airport',
    latitude: 32.31119919,
    longitude: -90.07589722
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'BHB',
    icao: 'KBHB',
    airport: 'Hancock County-Bar Harbor Airport',
    latitude: 44.45000076,
    longitude: -68.3615036
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'PVC',
    icao: 'KPVC',
    airport: 'Provincetown Municipal Airport',
    latitude: 42.07189941,
    longitude: -70.2213974
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'BGT',
    icao: '',
    airport: 'Bagdad Airport',
    latitude: 34.59590149,
    longitude: -113.1699982
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'BGR',
    icao: 'KBGR',
    airport: 'Bangor International Airport',
    latitude: 44.80739975,
    longitude: -68.82810211
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BGQ',
    icao: 'PAGQ',
    airport: 'Big Lake Airport',
    latitude: 61.53609848,
    longitude: -149.8139954
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'PVD',
    icao: 'KPVD',
    airport: 'Theodore Francis Green State Airport',
    latitude: 41.732601,
    longitude: -71.420403
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PVF',
    icao: 'KPVF',
    airport: 'Placerville Airport',
    latitude: 38.7242012,
    longitude: -120.7529984
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'PVL',
    icao: 'KPBX',
    airport: 'Pike County Airport',
    latitude: 37.5617981,
    longitude: -82.56639862
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'BGM',
    icao: 'KBGM',
    airport: 'Greater Binghamton Airport (Edwin A. Link Field)',
    latitude: 42.20869827,
    longitude: -75.97979736
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'JAC',
    icao: 'KJAC',
    airport: 'Jackson Hole Airport',
    latitude: 43.6072998,
    longitude: -110.737999
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'PVU',
    icao: 'KPVU',
    airport: 'Provo Municipal Airport',
    latitude: 40.21920013,
    longitude: -111.7229996
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'PVW',
    icao: 'KPVW',
    airport: 'Hale County Airport',
    latitude: 34.16809845,
    longitude: -101.7170029
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'PWA',
    icao: 'KPWA',
    airport: 'Wiley Post Airport',
    latitude: 35.53419876,
    longitude: -97.64710236
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'BGE',
    icao: 'KBGE',
    airport: 'Decatur County Industrial Air Park',
    latitude: 30.9715004,
    longitude: -84.63739777
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'PWD',
    icao: 'KPWD',
    airport: 'Sher-Wood Airport',
    latitude: 48.79029846,
    longitude: -104.5339966
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BGD',
    icao: 'KBGD',
    airport: 'Hutchinson County Airport',
    latitude: 35.70090103,
    longitude: -101.3939972
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'PWK',
    icao: 'KPWK',
    airport: 'Chicago Executive Airport',
    latitude: 42.114222,
    longitude: -87.901494
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'PWM',
    icao: 'KPWM',
    airport: 'Portland International Jetport',
    latitude: 43.646198,
    longitude: -70.309303
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'BFT',
    icao: 'KARW',
    airport: 'Beaufort County Airport',
    latitude: 32.41220093,
    longitude: -80.63439941
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PWR',
    icao: '',
    airport: 'Port Walter Seaplane Base',
    latitude: 56.38100052,
    longitude: -134.651001
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'PWT',
    icao: 'KPWT',
    airport: 'Bremerton National Airport',
    latitude: 47.49020004,
    longitude: -122.7649994
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'BFP',
    icao: 'KBVI',
    airport: 'Beaver County Airport',
    latitude: 40.77249908,
    longitude: -80.3914032
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'PWY',
    icao: 'KPNA',
    airport: 'Ralph Wenz Field',
    latitude: 42.79550171,
    longitude: -109.8069992
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'IYK',
    icao: 'KIYK',
    airport: 'Inyokern Airport',
    latitude: 35.65879822,
    longitude: -117.8300018
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'BFM',
    icao: 'KBFM',
    airport: 'Mobile Downtown Airport',
    latitude: 30.62680054,
    longitude: -88.06809998
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BFL',
    icao: 'KBFL',
    airport: 'Meadows Field Airport',
    latitude: 35.43360138,
    longitude: -119.0569992
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'BFK',
    icao: 'KBKF',
    airport: 'Buckley Air Force Base',
    latitude: 39.7016983,
    longitude: -104.7519989
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'BFI',
    icao: 'KBFI',
    airport: 'Boeing Field/King County International Airport',
    latitude: 47.52999878,
    longitude: -122.302002
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'PXL',
    icao: '',
    airport: 'Polacca Airport',
    latitude: 35.79169846,
    longitude: -110.4229965
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'IWS',
    icao: 'KIWS',
    airport: 'West Houston Airport',
    latitude: 29.81819916,
    longitude: -95.67259979
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'ZZV',
    icao: 'KZZV',
    airport: 'Zanesville Municipal Airport',
    latitude: 39.94440079,
    longitude: -81.89209747
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'BFG',
    icao: '',
    airport: 'Bullfrog Basin Airport',
    latitude: 37.54579926,
    longitude: -110.7129974
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'BFF',
    icao: 'KBFF',
    airport: 'Western Nebraska Regional Airport (William B. Heilig Field)',
    latitude: 41.87400055,
    longitude: -103.5960007
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'BFD',
    icao: 'KBFD',
    airport: 'Bradford Regional Airport',
    latitude: 41.80310059,
    longitude: -78.64009857
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'IWD',
    icao: 'KIWD',
    airport: 'Gogebic-Iron County Airport',
    latitude: 46.52750015,
    longitude: -90.13140106
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'PYL',
    icao: '',
    airport: 'Perry Island Seaplane Base',
    latitude: 60.68529892,
    longitude: -147.9190063
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'PYM',
    icao: 'KPYM',
    airport: 'Plymouth Municipal Airport',
    latitude: 41.909,
    longitude: -70.728798
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'PYS',
    icao: '',
    airport: 'Paradise Skypark',
    latitude: -51.6867,
    longitude: -57.7785
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'ITO',
    icao: 'PHTO',
    airport: 'Hilo International Airport',
    latitude: 19.72139931,
    longitude: -155.0480042
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ITH',
    icao: 'KITH',
    airport: 'Ithaca Tompkins Regional Airport',
    latitude: 42.49100113,
    longitude: -76.45839691
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'ISW',
    icao: 'KISW',
    airport: 'South Wood County Airport (Alexander Field)',
    latitude: 44.36029816,
    longitude: -89.83899689
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'ISS',
    icao: 'KIWI',
    airport: 'Wiscasset Airport',
    latitude: 43.96139908,
    longitude: -69.71260071
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'ISQ',
    icao: 'KISQ',
    airport: 'Schoolcraft County Airport',
    latitude: 45.97460175,
    longitude: -86.17179871
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ISP',
    icao: 'KISP',
    airport: 'Long Island MacArthur Airport',
    latitude: 40.79520035,
    longitude: -73.10019684
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'ISO',
    icao: 'KISO',
    airport: 'Kinston Regional Jetport (Stallings Field)',
    latitude: 35.33140183,
    longitude: -77.6088028
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'ISN',
    icao: 'KISN',
    airport: 'Sloulin Field International Airport',
    latitude: 48.17789841,
    longitude: -103.6419983
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'ISM',
    icao: 'KISM',
    airport: 'Kissimmee Gateway Airport',
    latitude: 28.28980064,
    longitude: -81.43710327
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'QWG',
    icao: '',
    airport: 'Wilgrove Air Park',
    latitude: 35.21379852,
    longitude: -80.67009735
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'RAC',
    icao: 'KRAC',
    airport: 'John H. Batten Airport',
    latitude: 42.76060104,
    longitude: -87.81520081
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'IRS',
    icao: 'KIRS',
    airport: 'Kirsch Municipal Airport',
    latitude: 41.81330109,
    longitude: -85.43900299
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RAL',
    icao: 'KRAL',
    airport: 'Riverside Municipal Airport',
    latitude: 33.95190048,
    longitude: -117.4449997
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'IRK',
    icao: 'KIRK',
    airport: 'Kirksville Regional Airport',
    latitude: 40.09349823,
    longitude: -92.54489899
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'RAP',
    icao: 'KRAP',
    airport: 'Rapid City Regional Airport',
    latitude: 44.04529953,
    longitude: -103.0569992
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'IRC',
    icao: 'PACR',
    airport: 'Circle City Airport',
    latitude: 65.830498,
    longitude: -144.076008
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'IRB',
    icao: '',
    airport: 'Iraan Municipal Airport',
    latitude: 30.90570068,
    longitude: -101.8919983
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'IPT',
    icao: 'KIPT',
    airport: 'Williamsport Regional Airport',
    latitude: 41.2417984,
    longitude: -76.9210968
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RBD',
    icao: 'KRBD',
    airport: 'Dallas Executive Airport',
    latitude: 32.68090057,
    longitude: -96.86820221
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RBF',
    icao: '',
    airport: 'Big Bear City Airport',
    latitude: 34.26380157,
    longitude: -116.8560028
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'RBG',
    icao: 'KRBG',
    airport: 'Roseburg Regional Airport',
    latitude: 43.23880005,
    longitude: -123.3560028
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'IPL',
    icao: 'KIPL',
    airport: 'Imperial County Airport (Boley Field)',
    latitude: 32.83420181,
    longitude: -115.5790024
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RBK',
    icao: '',
    airport: 'French Valley Airport',
    latitude: 33.57419968,
    longitude: -117.1279984
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RBL',
    icao: 'KRBL',
    airport: 'Red Bluff Municipal Airport',
    latitude: 40.15069962,
    longitude: -122.2519989
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'IOW',
    icao: 'KIOW',
    airport: 'Iowa City Municipal Airport',
    latitude: 41.6391983,
    longitude: -91.54650116
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BET',
    icao: 'PABE',
    airport: 'Bethel Airport',
    latitude: 60.77980042,
    longitude: -161.8379974
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'INW',
    icao: 'KINW',
    airport: 'Winslow-Lindbergh Regional Airport',
    latitude: 35.02190018,
    longitude: -110.7229996
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'INT',
    icao: 'KINT',
    airport: 'Smith Reynolds Airport',
    latitude: 36.13370132,
    longitude: -80.22200012
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'RBW',
    icao: 'KRBW',
    airport: 'Lowcountry Regional Airport',
    latitude: 32.92100143,
    longitude: -80.64060211
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'RBY',
    icao: 'PARY',
    airport: 'Ruby Airport',
    latitude: 64.72720337,
    longitude: -155.4700012
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'RCA',
    icao: 'KRCA',
    airport: 'Ellsworth Air Force Base',
    latitude: 44.14500046,
    longitude: -103.1039963
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'RCE',
    icao: '',
    airport: 'Roche Harbor Seaplane Base',
    latitude: 48.61230087,
    longitude: -123.1389999
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'INS',
    icao: 'KINS',
    airport: 'Creech Air Force Base',
    latitude: 36.58720016,
    longitude: -115.6729965
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RCK',
    icao: 'KRCK',
    airport: 'H. H. Coffield Regional Airport',
    latitude: 30.63159943,
    longitude: -96.98970032
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'INL',
    icao: 'KINL',
    airport: 'Falls International Airport',
    latitude: 48.56620026,
    longitude: -93.40309906
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'INK',
    icao: 'KINK',
    airport: 'Winkler County Airport',
    latitude: 31.77960014,
    longitude: -103.2009964
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'RCT',
    icao: 'KRCT',
    airport: 'Nartron Field',
    latitude: 43.90000153,
    longitude: -85.51670074
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'BEH',
    icao: 'KBEH',
    airport: 'Southwest Michigan Regional Airport',
    latitude: 42.12860107,
    longitude: -86.42849731
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'IMT',
    icao: 'KIMT',
    airport: 'Ford Airport',
    latitude: 45.81840134,
    longitude: -88.11450195
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'IMM',
    icao: 'KIMM',
    airport: 'Immokalee Regional Airport',
    latitude: 26.43320084,
    longitude: -81.40100098
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'IML',
    icao: 'KIML',
    airport: 'Imperial Municipal Airport',
    latitude: 40.50930023,
    longitude: -101.6210022
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'RDB',
    icao: 'PADG',
    airport: 'Red Dog Airport',
    latitude: 68.03209686,
    longitude: -162.8990021
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RDD',
    icao: 'KRDD',
    airport: 'Redding Municipal Airport',
    latitude: 40.50899887,
    longitude: -122.2929993
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'RDG',
    icao: 'KRDG',
    airport: 'Reading Regional Airport (Carl A. Spaatz Field)',
    latitude: 40.37850189,
    longitude: -75.96520233
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'RDM',
    icao: 'KRDM',
    airport: 'Roberts Field',
    latitude: 44.2541008,
    longitude: -121.1500015
  },
  {
    country_code: 'US',
    region_name: 'North Dakota',
    iata: 'RDR',
    icao: 'KRDR',
    airport: 'Grand Forks Air Force Base',
    latitude: 47.96110153,
    longitude: -97.40119934
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'RDU',
    icao: 'KRDU',
    airport: 'Raleigh-Durham International Airport',
    latitude: 35.87760162,
    longitude: -78.78749847
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'RDV',
    icao: '',
    airport: 'Red Devil Airport',
    latitude: 61.7881012,
    longitude: -157.3500061
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'RED',
    icao: 'KRVL',
    airport: 'Mifflin County Airport',
    latitude: 40.67739868,
    longitude: -77.62680054
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'REE',
    icao: '',
    airport: 'Reese Airpark',
    latitude: 33.59030151,
    longitude: -102.0370026
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'ILN',
    icao: 'KILN',
    airport: 'Wilmington Air Park',
    latitude: 39.42789841,
    longitude: -83.792099
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'ILM',
    icao: 'KILM',
    airport: 'Wilmington International Airport',
    latitude: 34.27059937,
    longitude: -77.90260315
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'REO',
    icao: 'KREO',
    airport: 'Rome State Airport',
    latitude: 42.57770157,
    longitude: -117.8850021
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'ILL',
    icao: 'KBDH',
    airport: 'Willmar Municipal Airport (John L. Rice Field)',
    latitude: 45.11769867,
    longitude: -95.13040161
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ILI',
    icao: 'PAIL',
    airport: 'Iliamna Airport',
    latitude: 59.75439835,
    longitude: -154.9109955
  },
  {
    country_code: 'US',
    region_name: 'Delaware',
    iata: 'ILG',
    icao: 'KILG',
    airport: 'Wilmington Airport (New Castle Airport)',
    latitude: 39.67869949,
    longitude: -75.60649872
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'ILE',
    icao: 'KILE',
    airport: 'Skylark Field',
    latitude: 31.08580017,
    longitude: -97.68650055
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'RFD',
    icao: 'KRFD',
    airport: 'Chicago Rockford International Airport (Greater Rockford Airport)',
    latitude: 42.19540024,
    longitude: -89.09719849
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RFG',
    icao: 'KRFG',
    airport: 'Rooke Field',
    latitude: 28.288572,
    longitude: -97.318045
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'BED',
    icao: 'KBED',
    airport: 'Laurence G. Hanscom Field',
    latitude: 42.47000122,
    longitude: -71.28900146
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'BEC',
    icao: 'KBEC',
    airport: 'Beech Factory Airport',
    latitude: 37.69449997,
    longitude: -97.21499634
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'RFK',
    icao: '',
    airport: 'Rollang Field',
    latitude: 32.95493,
    longitude: -90.84593
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'IKO',
    icao: 'PAKO',
    airport: 'Nikolski Air Station',
    latitude: 52.9416008,
    longitude: -168.848999
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'IKK',
    icao: 'KIKK',
    airport: 'Greater Kankakee Airport',
    latitude: 41.07139969,
    longitude: -87.84629822
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'IKB',
    icao: 'KUKF',
    airport: 'Wilkes County Airport',
    latitude: 36.22280121,
    longitude: -81.09829712
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'BDY',
    icao: '',
    airport: 'Bandon State Airport',
    latitude: 43.08649826,
    longitude: -124.4079971
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'BDX',
    icao: '',
    airport: 'Broadus Airport',
    latitude: 45.47249985,
    longitude: -105.4540024
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'IJX',
    icao: 'KIJX',
    airport: 'Jacksonville Municipal Airport',
    latitude: 39.770747,
    longitude: -90.237964
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RGR',
    icao: '',
    airport: 'Ranger Municipal Airport',
    latitude: 32.45259857,
    longitude: -98.68280029
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'RHI',
    icao: 'KRHI',
    airport: 'Rhinelander-Oneida County Airport',
    latitude: 45.63119888,
    longitude: -89.46749878
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'IGM',
    icao: 'KIGM',
    airport: 'Kingman Airport',
    latitude: 35.2594986,
    longitude: -113.9380035
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RHV',
    icao: 'KRHV',
    airport: 'Reid-Hillview Airport of Santa Clara County',
    latitude: 37.332901,
    longitude: -121.8190002
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'IGG',
    icao: 'PAIG',
    airport: 'Igiugig Airport',
    latitude: 59.32400131,
    longitude: -155.9019928
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'RIC',
    icao: 'KRIC',
    airport: 'Richmond International Airport',
    latitude: 37.50519943,
    longitude: -77.31970215
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'BDR',
    icao: 'KBDR',
    airport: 'Igor I. Sikorsky Memorial Airport',
    latitude: 41.16350174,
    longitude: -73.12619781
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'RIE',
    icao: 'KRPD',
    airport: 'Rice Lake Regional Airport (Carls Field) ',
    latitude: 45.41899872,
    longitude: -91.77349854
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'RIF',
    icao: 'KRIF',
    airport: 'Richfield Municipal Airport',
    latitude: 38.7364006,
    longitude: -112.098999
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'RIL',
    icao: 'KRIL',
    airport: 'Garfield County Regional Airport',
    latitude: 39.526299,
    longitude: -107.726997
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'IFP',
    icao: 'KIFP',
    airport: 'Laughlin/Bullhead International Airport',
    latitude: 35.15739822,
    longitude: -114.5599976
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RIR',
    icao: 'KRIR',
    airport: 'Flabob Airport',
    latitude: 33.98970032,
    longitude: -117.4110031
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RIV',
    icao: 'KRIV',
    airport: 'March Air Reserve Base',
    latitude: 33.880699,
    longitude: -117.259003
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'RIW',
    icao: 'KRIW',
    airport: 'Riverton Regional Airport',
    latitude: 43.06420136,
    longitude: -108.4599991
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'IFA',
    icao: 'KIFA',
    airport: 'Iowa Falls Municipal Airport',
    latitude: 42.47079849,
    longitude: -93.26999664
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'IDP',
    icao: 'KIDP',
    airport: 'Independence Municipal Airport',
    latitude: 37.15840149,
    longitude: -95.77839661
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'IDI',
    icao: 'KIDI',
    airport: 'Indiana County-Jimmy Stewart Airport',
    latitude: 40.63219833,
    longitude: -79.10549927
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'IDH',
    icao: 'KGIC',
    airport: 'Idaho County Airport',
    latitude: 45.9426,
    longitude: -116.123001
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'BDL',
    icao: 'KBDL',
    airport: 'Bradley International Airport',
    latitude: 41.93889999,
    longitude: -72.68319702
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'RKD',
    icao: 'KRKD',
    airport: 'Knox County Regional Airport',
    latitude: 44.06010056,
    longitude: -69.09919739
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'IDG',
    icao: 'KIDG',
    airport: 'Ida Grove Municipal Airport',
    latitude: 42.3325,
    longitude: -95.445
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'RKH',
    icao: 'KUZA',
    airport: 'Rock Hill/York County Airport',
    latitude: 34.9878006,
    longitude: -81.05719757
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RKP',
    icao: 'KRKP',
    airport: 'Aransas County Airport',
    latitude: 28.08679962,
    longitude: -97.04460144
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'RKR',
    icao: 'KRKR',
    airport: 'Robert S. Kerr Airport',
    latitude: 35.02159882,
    longitude: -94.62129974
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'RKS',
    icao: 'KRKS',
    airport: 'Rock Springs-Sweetwater County Airport',
    latitude: 41.5942,
    longitude: -109.065001
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'IDA',
    icao: 'KIDA',
    airport: 'Idaho Falls Regional Airport',
    latitude: 43.514599,
    longitude: -112.070999
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'ICY',
    icao: '',
    airport: 'Icy Bay Airport',
    latitude: 59.96900177,
    longitude: -141.6620026
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'RKW',
    icao: 'KRKW',
    airport: 'Rockwood Municipal Airport',
    latitude: 35.92229843,
    longitude: -84.68969727
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'ICT',
    icao: 'KICT',
    airport: 'Wichita Dwight D. Eisenhower National Airport',
    latitude: 37.649899,
    longitude: -97.433098
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'ICS',
    icao: '',
    airport: 'Cascade Airport',
    latitude: 44.49380112,
    longitude: -116.0159988
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'RLD',
    icao: 'KRLD',
    airport: 'Richland Airport',
    latitude: 46.305634,
    longitude: -119.304184
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'BDG',
    icao: 'KBDG',
    airport: 'Blanding Municipal Airport',
    latitude: 37.58330154,
    longitude: -109.4830017
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'ICL',
    icao: 'KICL',
    airport: 'Schenck Field',
    latitude: 40.72180176,
    longitude: -95.02639771
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'RME',
    icao: 'KRME',
    airport: 'Griffiss International Airport',
    latitude: 43.23379898,
    longitude: -75.40699768
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'BDF',
    icao: '',
    airport: 'Rinkenberger RLA Airport',
    latitude: 41.23089981,
    longitude: -89.61569977
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'BDE',
    icao: 'KBDE',
    airport: 'Baudette International Airport',
    latitude: 48.72840118,
    longitude: -94.61219788
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'RMG',
    icao: 'KRMG',
    airport: 'Richard B. Russell Airport',
    latitude: 34.3506012,
    longitude: -85.15799713
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'RMP',
    icao: '',
    airport: 'Rampart Airport',
    latitude: 65.507896,
    longitude: -150.141007
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'RMY',
    icao: 'KMPI',
    airport: 'Mariposa-Yosemite Airport',
    latitude: 37.51089859,
    longitude: -120.0400009
  },
  {
    country_code: 'US',
    region_name: 'Tennessee',
    iata: 'RNC',
    icao: 'KRNC',
    airport: 'Warren County Memorial Airport',
    latitude: 35.69869995,
    longitude: -85.84380341
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'RND',
    icao: 'KRND',
    airport: 'Randolph Air Force Base',
    latitude: 29.52969933,
    longitude: -98.27890015
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'RNG',
    icao: '',
    airport: 'Rangely Airport',
    latitude: -40.93981,
    longitude: -108.763
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'RNH',
    icao: 'KRNH',
    airport: 'New Richmond Regional Airport',
    latitude: 45.14830017,
    longitude: -92.5381012
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'IAN',
    icao: 'PAIK',
    airport: 'Bob Baker Memorial Airport',
    latitude: 66.97599792,
    longitude: -160.4369965
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'RNO',
    icao: 'KRNO',
    airport: 'Reno-Tahoe International Airport',
    latitude: 39.49909973,
    longitude: -119.7679977
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'IAH',
    icao: 'KIAH',
    airport: 'George Bush Intercontinental Airport',
    latitude: 29.9843998,
    longitude: -95.34140015
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'RNT',
    icao: 'KRNT',
    airport: 'Renton Municipal Airport',
    latitude: 47.49309921,
    longitude: -122.2160034
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'IAG',
    icao: 'KIAG',
    airport: 'Niagara Falls International Airport',
    latitude: 43.1072998,
    longitude: -78.94619751
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'ROA',
    icao: 'KROA',
    airport: 'Roanoke-Blacksburg Regional Airport (Woodrum Field)',
    latitude: 37.3255,
    longitude: -79.975403
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'ROC',
    icao: 'KROC',
    airport: 'Greater Rochester International Airport',
    latitude: 43.1189003,
    longitude: -77.67240143
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'ROF',
    icao: '',
    airport: 'Montague Airport (Yreka Rohrer Field)',
    latitude: 41.73040009,
    longitude: -122.5459976
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'ROG',
    icao: 'KROG',
    airport: 'Rogers Municipal Airport (Carter Field)',
    latitude: 36.37229919,
    longitude: -94.10690308
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'IAD',
    icao: 'KIAD',
    airport: 'Washington Dulles International Airport',
    latitude: 38.94449997,
    longitude: -77.45580292
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'IAB',
    icao: 'KIAB',
    airport: 'McConnell Air Force Base',
    latitude: 37.62189865,
    longitude: -97.26820374
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'ROL',
    icao: '',
    airport: 'Roosevelt Municipal Airport',
    latitude: 40.278301,
    longitude: -110.051003
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'HZL',
    icao: 'KHZL',
    airport: 'Hazleton Municipal Airport',
    latitude: 40.98680115,
    longitude: -75.99490356
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'HYS',
    icao: 'KHYS',
    airport: 'Hays Regional Airport',
    latitude: 38.84220123,
    longitude: -99.27320099
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'HYR',
    icao: 'KHYR',
    airport: 'Sawyer County Airport',
    latitude: 46.02519989,
    longitude: -91.44429779
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'ROW',
    icao: 'KROW',
    airport: 'Roswell International Air Center',
    latitude: 33.30160141,
    longitude: -104.5309982
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'ROX',
    icao: 'KROX',
    airport: 'Roseau Municipal Airport (Rudy Billberg Field)',
    latitude: 48.85599899,
    longitude: -95.6969986
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HYL',
    icao: '',
    airport: 'Hollis Clark Bay Seaplane Base',
    latitude: 55.48160172,
    longitude: -132.6459961
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HYG',
    icao: 'PAHY',
    airport: 'Hydaburg Seaplane Base',
    latitude: 55.20629883,
    longitude: -132.8280029
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'BCT',
    icao: 'KBCT',
    airport: 'Boca Raton Airport',
    latitude: 26.37849998,
    longitude: -80.10769653
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'BCS',
    icao: '',
    airport: 'Southern Seaplane Airport',
    latitude: 29.86610031,
    longitude: -90.02220154
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'HYA',
    icao: 'KHYA',
    airport: 'Barnstable Municipal Airport (Boardman/Polando Field)',
    latitude: 41.66930008,
    longitude: -70.28040314
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'HWO',
    icao: 'KHWO',
    airport: 'North Perry Airport',
    latitude: 26.0012,
    longitude: -80.2407
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HWI',
    icao: '',
    airport: 'Hawk Inlet Seaplane Base',
    latitude: 58.127441,
    longitude: -134.755953
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'BCE',
    icao: 'KBCE',
    airport: 'Bryce Canyon Airport',
    latitude: 37.70640183,
    longitude: -112.1449966
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'HWD',
    icao: 'KHWD',
    airport: 'Hayward Executive Airport',
    latitude: 37.65919876,
    longitude: -122.1220016
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'RPX',
    icao: 'KRPX',
    airport: 'Roundup Airport',
    latitude: 46.475095,
    longitude: -108.541497
  },
  {
    country_code: 'US',
    region_name: 'South Carolina',
    iata: 'HVS',
    icao: 'KHVS',
    airport: 'Hartsville Regional Airport',
    latitude: 34.40309906,
    longitude: -80.11920166
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'HVR',
    icao: 'KHVR',
    airport: 'Havre City-County Airport',
    latitude: 48.54299927,
    longitude: -109.762001
  },
  {
    country_code: 'US',
    region_name: 'Connecticut',
    iata: 'HVN',
    icao: 'KHVN',
    airport: 'Tweed New Haven Airport',
    latitude: 41.26369858,
    longitude: -72.88680267
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'RRL',
    icao: 'KRRL',
    airport: 'Merrill Municipal Airport',
    latitude: 45.19889832,
    longitude: -89.71289825
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'RRT',
    icao: 'KRRT',
    airport: 'Warroad International Memorial Airport (Swede Carlson Field)',
    latitude: 48.94139862,
    longitude: -95.3483963
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'HVE',
    icao: 'KHVE',
    airport: 'Hanksville Airport',
    latitude: 38.41799927,
    longitude: -110.7040024
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'RSH',
    icao: 'PARS',
    airport: 'Russian Mission Airport',
    latitude: 61.77888489,
    longitude: -161.319458
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'RSJ',
    icao: '',
    airport: 'Rosario Seaplane Base',
    latitude: 48.64569855,
    longitude: -122.8679962
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'RSL',
    icao: 'KRSL',
    airport: 'Russell Municipal Airport',
    latitude: 38.87210083,
    longitude: -98.8117981
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'BCC',
    icao: '',
    airport: 'Bear Creek 3 Airport',
    latitude: 63.57331604,
    longitude: -156.1494541
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'RSN',
    icao: 'KRSN',
    airport: 'Ruston Regional Airport',
    latitude: 32.51440048,
    longitude: -92.59169769
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'RST',
    icao: 'KRST',
    airport: 'Rochester International Airport',
    latitude: 43.90829849,
    longitude: -92.5
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'RSW',
    icao: 'KRSW',
    airport: 'Southwest Florida International Airport',
    latitude: 26.53619957,
    longitude: -81.75520325
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'RSX',
    icao: '',
    airport: 'Rouses Point Seaplane Base',
    latitude: 44.99169922,
    longitude: -73.3635025
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'HUT',
    icao: 'KHUT',
    airport: 'Hutchinson Municipal Airport',
    latitude: 38.06549835,
    longitude: -97.86060333
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HUS',
    icao: 'PAHU',
    airport: 'Hughes Airport',
    latitude: 66.04109955,
    longitude: -154.2630005
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'RTL',
    icao: '',
    airport: 'Spirit Lake Municipal Airport',
    latitude: 43.38750076,
    longitude: -95.1391983
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'RTN',
    icao: 'KRTN',
    airport: 'Raton Municipal Airport (Crews Field)',
    latitude: 36.74150085,
    longitude: -104.5019989
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'HUM',
    icao: 'KHUM',
    airport: 'Houma-Terrebonne Airport',
    latitude: 29.56649971,
    longitude: -90.66040039
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'HUL',
    icao: 'KHUL',
    airport: 'Houlton International Airport',
    latitude: 46.12310028,
    longitude: -67.792099
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'HUJ',
    icao: 'KHHW',
    airport: 'Stan Stamper Municipal Airport',
    latitude: 34.03480148,
    longitude: -95.54190063
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'RUI',
    icao: 'KSRR',
    airport: 'Sierra Blanca Regional Airport',
    latitude: 33.46279907,
    longitude: -105.5350037
  },
  {
    country_code: 'US',
    region_name: 'Vermont',
    iata: 'RUT',
    icao: 'KRUT',
    airport: 'Rutland - Southern Vermont Regional Airport',
    latitude: 43.52939987,
    longitude: -72.94960022
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'HUD',
    icao: '',
    airport: 'Humboldt Municipal Airport',
    latitude: 42.73609924,
    longitude: -94.24520111
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'HUC',
    icao: '',
    airport: 'Humacao Airport',
    latitude: 18.13809967,
    longitude: -65.80130005
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'BCB',
    icao: 'KBCB',
    airport: 'Virginia Tech Montgomery Executive Airport',
    latitude: 37.20759964,
    longitude: -80.40779877
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'HUA',
    icao: 'KHUA',
    airport: 'Redstone Army Airfield',
    latitude: 34.67869949,
    longitude: -86.68479919
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'HTW',
    icao: 'KHTW',
    airport: 'Lawrence County Airpark',
    latitude: 38.4193,
    longitude: -82.494301
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'RVR',
    icao: '',
    airport: 'Green River Municipal Airport',
    latitude: 38.96139908,
    longitude: -110.2269974
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'RVS',
    icao: 'KRVS',
    airport: 'Richard Lloyd Jones Jr. Airport',
    latitude: 36.03960037,
    longitude: -95.98459625
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HTV',
    icao: 'KUTS',
    airport: 'Huntsville Municipal Airport (Bruce Brothers Regional)',
    latitude: 30.74690056,
    longitude: -95.58719635
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'RWF',
    icao: 'KRWF',
    airport: 'Redwood Falls Municipal Airport',
    latitude: 44.54719925,
    longitude: -95.08229828
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'RWI',
    icao: 'KRWI',
    airport: 'Rocky Mount-Wilson Regional Airport',
    latitude: 35.85630035,
    longitude: -77.89189911
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'RWL',
    icao: 'KRWL',
    airport: 'Rawlins Municipal Airport (Harvey Field)',
    latitude: 41.80559921,
    longitude: -107.1999969
  },
  {
    country_code: 'US',
    region_name: 'Idaho',
    iata: 'RXE',
    icao: 'KRXE',
    airport: 'Rexburg-Madison County Airport',
    latitude: 43.8339,
    longitude: -111.805002
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'BBX',
    icao: 'KLOM',
    airport: 'Wings Field',
    latitude: 40.13750076,
    longitude: -75.26509857
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'HTS',
    icao: 'KHTS',
    airport: 'Tri-State Airport (Milton J. Ferguson Field)',
    latitude: 38.36669922,
    longitude: -82.55799866
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'HTO',
    icao: 'KHTO',
    airport: 'East Hampton Airport',
    latitude: 40.95959854,
    longitude: -72.25180054
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'HTL',
    icao: 'KHTL',
    airport: 'Roscommon County-Blodgett Memorial Airport',
    latitude: 44.359798,
    longitude: -84.671095
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'RZZ',
    icao: 'KRZZ',
    airport: 'Halifax County Airport',
    latitude: 36.4394989,
    longitude: -77.70929718
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'BBW',
    icao: 'KBBW',
    airport: 'Broken Bow Municipal Airport',
    latitude: 41.43650055,
    longitude: -99.64219666
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'SAA',
    icao: 'KSAA',
    airport: 'Shively Field',
    latitude: 41.444901,
    longitude: -106.823997
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'HTH',
    icao: 'KHTH',
    airport: 'Hawthorne Industrial Airport',
    latitude: 38.544399,
    longitude: -118.634002
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SAC',
    icao: 'KSAC',
    airport: 'Sacramento Executive Airport',
    latitude: 38.51250076,
    longitude: -121.4929962
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'SAD',
    icao: 'KSAD',
    airport: 'Safford Regional Airport',
    latitude: 32.85480118,
    longitude: -109.6350021
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'SAF',
    icao: 'KSAF',
    airport: 'Santa Fe Municipal Airport',
    latitude: 35.61709976,
    longitude: -106.0889969
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SAN',
    icao: 'KSAN',
    airport: 'San Diego International Airport',
    latitude: 32.73360062,
    longitude: -117.1900024
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'HSV',
    icao: 'KHSV',
    airport: 'Huntsville International Airport (Carl T. Jones Field)',
    latitude: 34.6371994,
    longitude: -86.77510071
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'HST',
    icao: 'KHST',
    airport: 'Homestead Air Reserve Base',
    latitude: 25.48859978,
    longitude: -80.38359833
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'SAR',
    icao: 'KSAR',
    airport: 'Sparta Community Airport (Hunter Field)',
    latitude: 38.14889908,
    longitude: -89.69869995
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SAS',
    icao: 'KSAS',
    airport: 'Salton Sea Airport',
    latitude: 33.24140167,
    longitude: -115.9520035
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SAT',
    icao: 'KSAT',
    airport: 'San Antonio International Airport',
    latitude: 29.53370094,
    longitude: -98.46980286
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'HSP',
    icao: 'KHSP',
    airport: 'Ingalls Field',
    latitude: 37.95140076,
    longitude: -79.83390045
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'SAV',
    icao: 'KSAV',
    airport: 'Savannah/Hilton Head International Airport',
    latitude: 32.12760162,
    longitude: -81.20210266
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HSL',
    icao: 'PAHL',
    airport: 'Huslia Airport',
    latitude: 65.69789886,
    longitude: -156.3509979
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BBD',
    icao: 'KBBD',
    airport: 'Curtis Field',
    latitude: 31.17930031,
    longitude: -99.32389832
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'BBC',
    icao: 'KBYY',
    airport: 'Bay City Municipal Airport',
    latitude: 28.97330093,
    longitude: -95.8635025
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SBA',
    icao: 'KSBA',
    airport: 'Santa Barbara Municipal Airport',
    latitude: 34.42620087,
    longitude: -119.8399963
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SBD',
    icao: 'KSBD',
    airport: 'San Bernardino International Airport',
    latitude: 34.09540176,
    longitude: -117.2350006
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'HSI',
    icao: 'KHSI',
    airport: 'Hastings Municipal Airport',
    latitude: 40.6053009,
    longitude: -98.42790222
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'HSH',
    icao: 'KHND',
    airport: 'Henderson Executive Airport',
    latitude: 35.97280121,
    longitude: -115.1340027
  },
  {
    country_code: 'US',
    region_name: 'Illinois',
    iata: 'HSB',
    icao: 'KHSB',
    airport: 'Harrisburg-Raleigh Airport',
    latitude: 37.81129837,
    longitude: -88.5503006
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'BBB',
    icao: 'KBBB',
    airport: 'Benson Municipal Airport',
    latitude: 45.33190155,
    longitude: -95.65059662
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'HRO',
    icao: 'KHRO',
    airport: 'Boone County Airport',
    latitude: 36.26150131,
    longitude: -93.15470123
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HRL',
    icao: 'KHRL',
    airport: 'Valley International Airport',
    latitude: 26.22850037,
    longitude: -97.65440369
  },
  {
    country_code: 'US',
    region_name: 'Wisconsin',
    iata: 'SBM',
    icao: 'KSBM',
    airport: 'Sheboygan County Memorial Airport',
    latitude: 43.76959991,
    longitude: -87.85140228
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'SBO',
    icao: '',
    airport: 'Salina-Gunnison Airport',
    latitude: 39.02909851,
    longitude: -111.8379974
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SBP',
    icao: 'KSBP',
    airport: 'San Luis Obispo County Regional Airport (McChesney Field)',
    latitude: 35.23680115,
    longitude: -120.6419983
  },
  {
    country_code: 'US',
    region_name: 'Colorado',
    iata: 'SBS',
    icao: 'KSBS',
    airport: 'Steamboat Springs Airport (Bob Adams Field)',
    latitude: 40.5163002,
    longitude: -106.8659973
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'SBX',
    icao: 'KSBX',
    airport: 'Shelby Airport',
    latitude: 48.54069901,
    longitude: -111.8710022
  },
  {
    country_code: 'US',
    region_name: 'Maryland',
    iata: 'SBY',
    icao: 'KSBY',
    airport: 'Salisbury-Ocean City-Wicomico Regional Airport',
    latitude: 38.34049988,
    longitude: -75.51029968
  },
  {
    country_code: 'US',
    region_name: 'Nebraska',
    iata: 'SCB',
    icao: 'KSCB',
    airport: 'Scribner State Airport',
    latitude: 41.61029816,
    longitude: -96.62989807
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SCC',
    icao: 'PASC',
    airport: 'Deadhorse Airport',
    latitude: 70.19470215,
    longitude: -148.4649963
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'SCE',
    icao: 'KUNV',
    airport: 'University Park Airport',
    latitude: 40.84930038,
    longitude: -77.84870148
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'SCF',
    icao: 'KSDL',
    airport: 'Scottsdale Airport',
    latitude: 33.6228981,
    longitude: -111.9110031
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'HQM',
    icao: 'KHQM',
    airport: 'Bowerman Airport',
    latitude: 46.97119904,
    longitude: -123.9369965
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'SCH',
    icao: 'KSCH',
    airport: 'Schenectady County Airport',
    latitude: 42.85250092,
    longitude: -73.92890167
  },
  {
    country_code: 'US',
    region_name: 'Nevada',
    iata: 'BAM',
    icao: 'KBAM',
    airport: 'Battle Mountain Airport (Lander County Airport)',
    latitude: 40.59899902,
    longitude: -116.8740005
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SCK',
    icao: 'KSCK',
    airport: 'Stockton Metropolitan Airport',
    latitude: 37.89419937,
    longitude: -121.237999
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HPY',
    icao: 'KHPY',
    airport: 'Baytown Airport',
    latitude: 29.78610039,
    longitude: -94.95269775
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SCM',
    icao: 'PACM',
    airport: 'Scammon Bay Airport',
    latitude: 61.84529877,
    longitude: -165.5709991
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'HPV',
    icao: '',
    airport: 'Princeville Airport',
    latitude: 22.20919991,
    longitude: -159.4459991
  },
  {
    country_code: 'US',
    region_name: 'Iowa',
    iata: 'HPT',
    icao: 'KHPT',
    airport: 'Hampton Municipal Airport',
    latitude: 42.72370148,
    longitude: -93.2263031
  },
  {
    country_code: 'US',
    region_name: 'New York',
    iata: 'HPN',
    icao: 'KHPN',
    airport: 'Westchester County Airport',
    latitude: 41.06700134,
    longitude: -73.70760345
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HPB',
    icao: 'PAHP',
    airport: 'Hooper Bay Airport',
    latitude: 61.52389908,
    longitude: -166.1470032
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'SDF',
    icao: 'KSDF',
    airport: 'Louisville International Airport (Standiford Field)',
    latitude: 38.1744,
    longitude: -85.736
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HOU',
    icao: 'KHOU',
    airport: 'William P. Hobby Airport',
    latitude: 29.64539909,
    longitude: -95.27890015
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'HOT',
    icao: 'KHOT',
    airport: 'Memorial Field Airport',
    latitude: 34.47800064,
    longitude: -93.09619904
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SDM',
    icao: 'KSDM',
    airport: 'Brown Field Municipal Airport',
    latitude: 32.57229996,
    longitude: -116.9800034
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SDP',
    icao: 'PASD',
    airport: 'Sand Point Airport',
    latitude: 55.31499863,
    longitude: -160.522995
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'BAF',
    icao: 'KBAF',
    airport: 'Westfield-Barnes Regional Airport',
    latitude: 42.157799,
    longitude: -72.715599
  },
  {
    country_code: 'US',
    region_name: 'Kentucky',
    iata: 'HOP',
    icao: 'KHOP',
    airport: 'Campbell Army Airfield',
    latitude: 36.66859818,
    longitude: -87.49620056
  },
  {
    country_code: 'US',
    region_name: 'South Dakota',
    iata: 'HON',
    icao: 'KHON',
    airport: 'Huron Regional Airport',
    latitude: 44.3852005,
    longitude: -98.22850037
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HOM',
    icao: 'PAHO',
    airport: 'Homer Airport',
    latitude: 59.64559937,
    longitude: -151.477005
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'SDX',
    icao: 'KSEZ',
    airport: 'Sedona Airport',
    latitude: 34.84859848,
    longitude: -111.788002
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'SDY',
    icao: 'KSDY',
    airport: 'Sidney-Richland Municipal Airport',
    latitude: 47.706902,
    longitude: -104.193001
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SEA',
    icao: 'KSEA',
    airport: 'Seattle-Tacoma International Airport',
    latitude: 47.449001,
    longitude: -122.308998
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SEE',
    icao: 'KSEE',
    airport: 'Gillespie Field',
    latitude: 32.82619858,
    longitude: -116.9720001
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'SEF',
    icao: 'KSEF',
    airport: 'Sebring Regional Airport',
    latitude: 27.45639992,
    longitude: -81.3423996
  },
  {
    country_code: 'US',
    region_name: 'Pennsylvania',
    iata: 'SEG',
    icao: 'KSEG',
    airport: 'Penn Valley Airport',
    latitude: 40.8205986,
    longitude: -76.86389923
  },
  {
    country_code: 'US',
    region_name: 'Alabama',
    iata: 'SEM',
    icao: 'KSEM',
    airport: 'Craig Field',
    latitude: 32.34389877,
    longitude: -86.9878006
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SEP',
    icao: 'KSEP',
    airport: 'Stephenville Clark Regional Airport',
    latitude: 32.21530151,
    longitude: -98.17769623
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'HOB',
    icao: 'KHOB',
    airport: 'Lea County Regional Airport',
    latitude: 32.6875,
    longitude: -103.2170029
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'BAD',
    icao: 'KBAD',
    airport: 'Barksdale Air Force Base',
    latitude: 32.50180054,
    longitude: -93.66269684
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'BAB',
    icao: 'KBAB',
    airport: 'Beale Air Force Base',
    latitude: 39.13610077,
    longitude: -121.4369965
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HNS',
    icao: 'PAHN',
    airport: 'Haines Airport',
    latitude: 59.24380112,
    longitude: -135.5240021
  },
  {
    country_code: 'US',
    region_name: 'Florida',
    iata: 'SFB',
    icao: 'KSFB',
    airport: 'Orlando Sanford International Airport',
    latitude: 28.77759933,
    longitude: -81.23750305
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'HNM',
    icao: 'PHHN',
    airport: 'Hana Airport',
    latitude: 20.79560089,
    longitude: -156.0140076
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SFF',
    icao: 'KSFF',
    airport: 'Felts Field',
    latitude: 47.68280029,
    longitude: -117.322998
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'HNL',
    icao: 'PHNL',
    airport: 'Honolulu International Airport',
    latitude: 21.32062,
    longitude: -157.924228
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HNH',
    icao: 'PAOH',
    airport: 'Hoonah Airport',
    latitude: 58.0961,
    longitude: -135.410111
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'HNC',
    icao: 'KHSE',
    airport: 'Billy Mitchell Airport',
    latitude: 35.23279953,
    longitude: -75.61779785
  },
  {
    country_code: 'US',
    region_name: 'Maine',
    iata: 'SFM',
    icao: 'KSFM',
    airport: 'Sanford Seacoast Regional Airport',
    latitude: 43.39390182,
    longitude: -70.70800018
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SFO',
    icao: 'KSFO',
    airport: 'San Francisco International Airport',
    latitude: 37.61899948,
    longitude: -122.375
  },
  {
    country_code: 'US',
    region_name: 'Massachusetts',
    iata: 'SFY',
    icao: '',
    airport: 'metropolitan area4',
    latitude: 42.045992,
    longitude: -90.113931
  },
  {
    country_code: 'US',
    region_name: 'Rhode Island',
    iata: 'SFZ',
    icao: 'KSFZ',
    airport: 'North Central State Airport',
    latitude: 41.92079926,
    longitude: -71.49140167
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'HMT',
    icao: 'KHMT',
    airport: 'Hemet-Ryan Airport',
    latitude: 33.73400116,
    longitude: -117.0230026
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'SGF',
    icao: 'KSGF',
    airport: 'Springfield-Branson National Airport',
    latitude: 37.24570084,
    longitude: -93.38860321
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'SGH',
    icao: 'KSGH',
    airport: 'Springfield-Beckley Municipal Airport',
    latitude: 39.84030151,
    longitude: -83.84020233
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'HMN',
    icao: 'KHMN',
    airport: 'Holloman Air Force Base',
    latitude: 32.85250092,
    longitude: -106.1070023
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'AZO',
    icao: 'KAZO',
    airport: 'Kalamazoo/Battle Creek International Airport',
    latitude: 42.23490143,
    longitude: -85.55210114
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'SGR',
    icao: 'KSGR',
    airport: 'Sugar Land Regional Airport',
    latitude: 29.62229919,
    longitude: -95.65650177
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'SGT',
    icao: 'KSGT',
    airport: 'Stuttgart Municipal Airport',
    latitude: 34.599499,
    longitude: -91.574997
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'SGU',
    icao: 'KSGU',
    airport: 'St. George Regional Airport',
    latitude: 37.036389,
    longitude: -113.510306
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SGW',
    icao: '',
    airport: 'Saginaw Seaplane Base',
    latitude: 56.88629913,
    longitude: -134.1580048
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SGY',
    icao: 'PAGY',
    airport: 'Skagway Airport',
    latitude: 59.46009827,
    longitude: -135.3159943
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'AZA',
    icao: 'KIWA',
    airport: 'Phoenix-Mesa Gateway Airport',
    latitude: 33.30780029,
    longitude: -111.6549988
  },
  {
    country_code: 'US',
    region_name: 'Texas',
    iata: 'HLR',
    icao: 'KHLR',
    airport: 'Hood Army Airfield',
    latitude: 31.13870049,
    longitude: -97.71450043
  },
  {
    country_code: 'US',
    region_name: 'Virginia',
    iata: 'SHD',
    icao: 'KSHD',
    airport: 'Shenandoah Valley Regional Airport',
    latitude: 38.26380157,
    longitude: -78.89640045
  },
  {
    country_code: 'US',
    region_name: 'Montana',
    iata: 'HLN',
    icao: 'KHLN',
    airport: 'Helena Regional Airport',
    latitude: 46.60680008,
    longitude: -111.9830017
  },
  {
    country_code: 'US',
    region_name: 'Michigan',
    iata: 'HLM',
    icao: 'KHLM',
    airport: 'Park Township Airport',
    latitude: 42.79589844,
    longitude: -86.16200256
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SHG',
    icao: 'PAHG',
    airport: 'Shungnak Airport',
    latitude: 66.88809967,
    longitude: -157.1620026
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SHH',
    icao: 'PASH',
    airport: 'Shishmaref Airport',
    latitude: 66.249604,
    longitude: -166.089112
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'HLI',
    icao: 'KCVH',
    airport: 'Hollister Municipal Airport',
    latitude: 36.8932991,
    longitude: -121.4100037
  },
  {
    country_code: 'US',
    region_name: 'West Virginia',
    iata: 'HLG',
    icao: 'KHLG',
    airport: 'Wheeling Ohio County Airport',
    latitude: 40.17499924,
    longitude: -80.64630127
  },
  {
    country_code: 'US',
    region_name: 'Washington',
    iata: 'SHN',
    icao: 'KSHN',
    airport: 'Sanderson Field',
    latitude: 47.23360062,
    longitude: -123.1480026
  },
  {
    country_code: 'US',
    region_name: 'Kansas',
    iata: 'HLC',
    icao: 'KHLC',
    airport: 'Hill City Municipal Airport',
    latitude: 39.37879944,
    longitude: -99.83149719
  },
  {
    country_code: 'US',
    region_name: 'Wyoming',
    iata: 'SHR',
    icao: 'KSHR',
    airport: 'Sheridan County Airport',
    latitude: 44.76919937,
    longitude: -106.9800034
  },
  {
    country_code: 'US',
    region_name: 'North Carolina',
    iata: 'HKY',
    icao: 'KHKY',
    airport: 'Hickory Regional Airport',
    latitude: 35.74110031,
    longitude: -81.38950348
  },
  {
    country_code: 'US',
    region_name: 'Georgia',
    iata: 'AYS',
    icao: 'KAYS',
    airport: 'Waycross-Ware County Airport',
    latitude: 31.24909973,
    longitude: -82.39550018
  },
  {
    country_code: 'US',
    region_name: 'Louisiana',
    iata: 'SHV',
    icao: 'KSHV',
    airport: 'Shreveport Regional Airport',
    latitude: 32.446602,
    longitude: -93.8256
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SHX',
    icao: 'PAHX',
    airport: 'Shageluk Airport',
    latitude: 62.69229889,
    longitude: -159.5690002
  },
  {
    country_code: 'US',
    region_name: 'Mississippi',
    iata: 'HKS',
    icao: 'KHKS',
    airport: 'Hawkins Field',
    latitude: 32.33449936,
    longitude: -90.22219849
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'HKB',
    icao: '',
    airport: 'Healy Lake Airport',
    latitude: 63.9958,
    longitude: -144.6926
  },
  {
    country_code: 'US',
    region_name: 'Missouri',
    iata: 'SIK',
    icao: 'KSIK',
    airport: 'Sikeston Memorial Municipal Airport',
    latitude: 36.89889908,
    longitude: -89.5617981
  },
  {
    country_code: 'US',
    region_name: 'Arkansas',
    iata: 'HKA',
    icao: 'KHKA',
    airport: 'Blytheville Municipal Airport',
    latitude: 35.94039917,
    longitude: -89.83080292
  },
  {
    country_code: 'US',
    region_name: 'Alaska',
    iata: 'SIT',
    icao: 'PASI',
    airport: 'Sitka Rocky Gutierrez Airport',
    latitude: 57.04710007,
    longitude: -135.3619995
  },
  {
    country_code: 'US',
    region_name: 'Oregon',
    iata: 'HIO',
    icao: 'KHIO',
    airport: 'Hillsboro Airport (Portland-Hillsboro Airport)',
    latitude: 45.540401,
    longitude: -122.949997
  },
  {
    country_code: 'US',
    region_name: 'New Mexico',
    iata: 'AXX',
    icao: 'KAXX',
    airport: 'Angel Fire Airport',
    latitude: 36.42200089,
    longitude: -105.2900009
  },
  {
    country_code: 'US',
    region_name: 'Hawaii',
    iata: 'MDY',
    icao: 'PMDY',
    airport: 'Henderson Field',
    latitude: 28.20170021,
    longitude: -177.3809967
  },
  {
    country_code: 'US',
    region_name: 'Ohio',
    iata: 'AXV',
    icao: 'KAXV',
    airport: 'Neil Armstrong Airport',
    latitude: 40.49340057,
    longitude: -84.29889679
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SIY',
    icao: 'KSIY',
    airport: 'Siskiyou County Airport',
    latitude: 41.778062,
    longitude: -122.472736
  },
  {
    country_code: 'US',
    region_name: 'California',
    iata: 'SJC',
    icao: 'KSJC',
    airport: 'San Jose International Airport',
    latitude: 37.362598,
    longitude: -121.929001
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'HII',
    icao: 'KHII',
    airport: 'Lake Havasu City Airport',
    latitude: 34.571098,
    longitude: -114.358002
  },
  {
    country_code: 'US',
    region_name: 'Oklahoma',
    iata: 'AXS',
    icao: 'KAXS',
    airport: 'Altus/Quartz Mountain Regional Airport',
    latitude: 34.697952,
    longitude: -99.3385
  },
  {
    country_code: 'US',
    region_name: 'Utah',
    iata: 'HIF',
    icao: 'KHIF',
    airport: 'Hill Air Force Base',
    latitude: 41.12403,
    longitude: -111.973086
  },
  {
    country_code: 'US',
    region_name: 'New Hampshire',
    iata: 'HIE',
    icao: 'KHIE',
    airport: 'Mount Washington Regional Airport',
    latitude: 44.367637,
    longitude: -71.544502
  },
  {
    country_code: 'US',
    region_name: 'Minnesota',
    iata: 'HIB',
    icao: 'KHIB',
    airport: 'Range Regional Airport',
    latitude: 47.38660049,
    longitude: -92.83899689
  },
  {
    country_code: 'US',
    region_name: 'Arizona',
    iata: 'SJN',
    icao: 'KSJN',
    airport: 'St. Johns Industrial Air Park',
    latitude: 34.51860046,
    longitude: -109.3789978
  }
];
