import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductGridCard from "../components/product/product-grid-card";
import React, { useState } from "react";

function ExploreProducts() {
  const [products, setProducts] = useState([
    {
      "title": "Depurador E Exaustor De Ar Suggar Slim 60cm 3",
      "original_price": 1999.99,
      "current_price": 339.90,
      "discount": 83,
      "image": "https://a-static.mlcdn.com.br/300x300/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-prata/techshop/depsug00028/d78591183d56077fa7e904fd0dfcf0d3.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/depurador-e-exaustor-de-ar-suggar-slim-60cm-3-velocidades-prata/p/gd90fjc67a/ed/depu/",
      "store": "Magalu"
    },
    {
      "title": "Fogão 4 Bocas De Piso Itatiaia Star Acendimen",
      "original_price": 3999.99,
      "current_price": 699.90,
      "discount": 83,
      "image": "https://a-static.mlcdn.com.br/300x300/fogao-4-bocas-de-piso-itatiaia-star-acendimento-automatico-bivolt-branco-ou-preto/techshop/fogita00009/8c8ddc0c24e1ca1cef748f8626bad23a.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/fogao-4-bocas-de-piso-itatiaia-star-acendimento-automatico-bivolt-branco-ou-preto/p/hjf881277h/ed/fg4b/",
      "store": "Magalu"
    },
    {
      "title": "Cabo HDMI 4K 1.4 5m - 1405 19 Pinos Brasforma",
      "original_price": 79.90,
      "current_price": 17.57,
      "discount": 78,
      "image": "https://a-static.mlcdn.com.br/300x300/cabo-hdmi-4k-1-4-5m-1405-19-pinos-brasforma/magazineluiza/040419300/3682a6d4832ab7bc98f9df254ef1f025.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/cabo-hdmi-4k-1-4-5m-1405-19-pinos-brasforma/p/040419300/in/cbvd/",
      "store": "Magalu"
    },
    {
      "title": "D-Link Repetidor Wireless EXO MESH AC 1300Mbp",
      "original_price": 539.00,
      "current_price": 124.90,
      "discount": 77,
      "image": "https://oinks.com.br/wp-content/files/AMZVR02JA-300x300.png",
      "url": "https://www.amazon.com.br/dp/B089KPF3W9?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Monitor Led 23,8'' LG IPS Full HD HDMI FreeSy",
      "original_price": 2999.90,
      "current_price": 697.00,
      "discount": 77,
      "image": "https://a-static.mlcdn.com.br/300x300/monitor-led-238-lg-ips-full-hd-hdmi-freesync-24mk430h-b/techshop/monlgo00077/3ebcb56038198609020f45ee4f53e3ed.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/monitor-led-238-lg-ips-full-hd-hdmi-freesync-24mk430h-b/p/ka2hg53cja/in/mnpc/",
      "store": "Magalu"
    },
    {
      "title": "Just Cause 4 Edição de Day One para PS4 - Squ",
      "original_price": 249.90,
      "current_price": 63.64,
      "discount": 75,
      "image": "https://a-static.mlcdn.com.br/300x300/just-cause-4-edicao-de-day-one-para-ps4-square-enix/magazineluiza/221933600/6a8c46c2b291e318a1c9f8af61b55c07.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/just-cause-4-edicao-de-day-one-para-ps4-square-enix/p/221933600/ga/jaco/",
      "store": "Magalu"
    },
    {
      "title": "SSD Wd Green 2.5´ 240Gb SATA IIi 6Gb/S Leitur",
      "original_price": 450.00,
      "current_price": 114.35,
      "discount": 75,
      "image": "https://oinks.com.br/wp-content/files/AMZ9QYI2I-300x300.png",
      "url": "https://www.amazon.com.br/dp/B076Y374ZH?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "PILHA COMUM AA C/4 UM-3SHS",
      "original_price": null,
      "current_price": 4.84,
      "discount": 73,
      "image": "https://oinks.com.br/wp-content/files/AMZOPKSQA-300x300.png",
      "url": "https://www.amazon.com.br/dp/B075XFDPL2?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Kit 5 Tintas 544 Para L3110 L3150 L3250 L3210",
      "original_price": 299.90,
      "current_price": 84.92,
      "discount": 72,
      "image": "https://a-static.mlcdn.com.br/300x300/kit-5-tintas-544-para-l3110-l3150-l3250-l3210-l1110-l51920-65ml-source-life/sudesteprintt/7803326372348/235a9ac5f6881111de17dcfc066d59a3.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/kit-5-tintas-544-para-l3110-l3150-l3250-l3210-l1110-l51920-65ml-source-life/p/ga1j926g4e/in/gfdt/",
      "store": "Magalu"
    },
    {
      "title": "Kingstone KVR16N118 - Memória de 8GB DIMM DDR",
      "original_price": 300.00,
      "current_price": 87.49,
      "discount": 71,
      "image": "https://oinks.com.br/wp-content/files/AMZTBXKZQ-300x300.png",
      "url": "https://www.amazon.com.br/dp/B0089JIDLC?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Tablet m7 plus 3g dual chip 1gb ram 32gb tela",
      "original_price": 1700.00,
      "current_price": 500.65,
      "discount": 71,
      "image": "https://a-static.mlcdn.com.br/300x300/tablet-m7-plus-3g-dual-chip-1gb-ram-32gb-tela-7-android-11-nb360-multilaser/grupogiga/7908414419996/01b5db81b2a925b016011f2ea4ea4714.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/tablet-m7-plus-3g-dual-chip-1gb-ram-32gb-tela-7-android-11-nb360-multilaser/p/fefc96b0bh/tb/tmm7/",
      "store": "Magalu"
    },
    {
      "title": "Marvels Spider-Man Miles Morales para PS4 - I",
      "original_price": 299.90,
      "current_price": 89.91,
      "discount": 70,
      "image": "https://a-static.mlcdn.com.br/300x300/marvels-spider-man-miles-morales-para-ps4-insomniac-studios/magazineluiza/043188500/d6244f353d27dd4186984485e4659e22.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/marvels-spider-man-miles-morales-para-ps4-insomniac-studios/p/043188500/ga/glut/",
      "store": "Magalu"
    },
    {
      "title": "Barbeador Elétrico Philips Oneblade QP2530 co",
      "original_price": 599.90,
      "current_price": 179.90,
      "discount": 70,
      "image": "https://a-static.mlcdn.com.br/300x300/barbeador-eletrico-philips-oneblade-qp2530-com-quatro-pentes-bivolt/techshop/brbphi00027/859851f3cc38471f0fe693e2d0b728d6.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/barbeador-eletrico-philips-oneblade-qp2530-com-quatro-pentes-bivolt/p/fk4cd42da5/pf/pbel/",
      "store": "Magalu"
    },
    {
      "title": "Adaptador USB para USB C 3A Turbo Carregament",
      "original_price": 24.90,
      "current_price": 7.50,
      "discount": 70,
      "image": "https://oinks.com.br/wp-content/files/AMZFAHP5K-300x300.png",
      "url": "https://www.amazon.com.br/dp/B09JCNLL1C?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Micro-ondas Bancada Continental 21L Branco MC",
      "original_price": 1739.00,
      "current_price": 540.55,
      "discount": 69,
      "image": "https://a-static.mlcdn.com.br/300x300/micro-ondas-bancada-continental-21l-branco-mc21b/magazineluiza/235614100/455eb350f614a753bc0e49db82653a1b.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/micro-ondas-bancada-continental-21l-branco-mc21b/p/235614100/ed/mond/",
      "store": "Magalu"
    },
    {
      "title": "Carrinho MANICURE Auxiliar C/3 bandejas p/esm",
      "original_price": 239.99,
      "current_price": 75.04,
      "discount": 69,
      "image": "https://a-static.mlcdn.com.br/300x300/carrinho-manicure-auxiliar-c-3-bandejas-p-esmaltes-45x60x30-branco-straub/virtudemoveis/13356196179/fc3c90d6d44571c418d4a301d8855bfa.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/carrinho-manicure-auxiliar-c-3-bandejas-p-esmaltes-45x60x30-branco-straub/p/gjd3g4h84k/pf/cdes/",
      "store": "Magalu"
    },
    {
      "title": "Lâmpada Inteligente Multilaser E27 RGB - Dime",
      "original_price": 129.90,
      "current_price": 39.89,
      "discount": 69,
      "image": "https://a-static.mlcdn.com.br/300x300/lampada-inteligente-multilaser-e27-rgb-dimerizavel-10w-wi-fi-compativel-com-alexa/magazineluiza/227440400/074144d84ba83d3db6b82c3bdead1a6d.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/lampada-inteligente-multilaser-e27-rgb-dimerizavel-10w-wi-fi-compativel-com-alexa/p/227440400/ci/lpdi/",
      "store": "Magalu"
    },
    {
      "title": "Hub 4 Portas Usb 2.0 Adaptador Expansor Régua",
      "original_price": 28.90,
      "current_price": 8.99,
      "discount": 69,
      "image": "https://a-static.mlcdn.com.br/300x300/hub-4-portas-usb-2-0-adaptador-expansor-regua-pc-notebook-altomex/sevengroup/hub4portas/e185affd2bc3ecb5c584861f103b2ef8.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/hub-4-portas-usb-2-0-adaptador-expansor-regua-pc-notebook-altomex/p/acd1g3hhff/in/hubb/",
      "store": "Magalu"
    },
    {
      "title": "Lâmina Philips QP220/51 OneBlade - 2 Unidades",
      "original_price": 299.99,
      "current_price": 99.90,
      "discount": 67,
      "image": "https://a-static.mlcdn.com.br/300x300/lamina-philips-qp220-51-oneblade-2-unidades/techshop/labphi00002/dbdd3b7bd0f75653d1fc9ea3ef9ea4c8.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/lamina-philips-qp220-51-oneblade-2-unidades/p/ge77ejce32/pf/lpbe/",
      "store": "Magalu"
    },
    {
      "title": "Monitor Led 29\" Ultrawide 21:9 LG IPS HDMI Fu",
      "original_price": 3499.90,
      "current_price": 1139.00,
      "discount": 67,
      "image": "https://a-static.mlcdn.com.br/300x300/monitor-led-29-ultrawide-21-9-lg-ips-hdmi-full-hd-2560-x-1080-displayport-75hz-hdr10-hdmi-29wk600/techshop/monlgo00099/de236d874a9a14e15564ccfa1327f314.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/monitor-led-29-ultrawide-21-9-lg-ips-hdmi-full-hd-2560-x-1080-displayport-75hz-hdr10-hdmi-29wk600/p/ejj0fjgc41/in/mnpc/",
      "store": "Magalu"
    },
    {
      "title": "Controle Quality Premium Sem Fio Wirelees Par",
      "original_price": 254.77,
      "current_price": 83.84,
      "discount": 67,
      "image": "https://a-static.mlcdn.com.br/300x300/controle-quality-premium-sem-fio-wirelees-para-ps3-cor-preto-infinitteus/skydreamselectronics/inovacon204z/fea6b4ca8c5758fd06cf93c81e32c639.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/controle-quality-premium-sem-fio-wirelees-para-ps3-cor-preto-infinitteus/p/fjb170c57j/ga/otga/",
      "store": "Magalu"
    },
    {
      "title": "Escova Secadora Britânia BES10 1000W 2 Veloci",
      "original_price": 319.90,
      "current_price": 105.50,
      "discount": 67,
      "image": "https://a-static.mlcdn.com.br/300x300/escova-secadora-britania-bes10-1000w-2-velocidades-com-ions-turmalina/magazineluiza/233272600/7c9d93b5971b2bf61b6d7d3e50113c66.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/escova-secadora-britania-bes10-1000w-2-velocidades-com-ions-turmalina/p/233272600/pf/esse/",
      "store": "Magalu"
    },
    {
      "title": "Headset Gamer HyperX Cloud Stinger Core - par",
      "original_price": 546.00,
      "current_price": 179.00,
      "discount": 67,
      "image": "https://a-static.mlcdn.com.br/300x300/headset-gamer-hyperx-cloud-stinger-core-para-ps4-xbox-one-e-nintendo-switch/magazineluiza/221529200/4433cbe775155b924469246bc54ea7d9.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/headset-gamer-hyperx-cloud-stinger-core-para-ps4-xbox-one-e-nintendo-switch/p/221529200/ea/hdga/",
      "store": "Magalu"
    },
    {
      "title": "Smart TV 55” 4K QLED Samsung The Frame VA 120",
      "original_price": 10999.00,
      "current_price": 3704.05,
      "discount": 66,
      "image": "https://a-static.mlcdn.com.br/300x300/smart-tv-55-4k-qled-samsung-the-frame-va-120hz-wi-fi-bluetooth-alexa-google-qn55ls03ba/magazineluiza/235135500/528f6821fa0592ba9fe993dc6585975d.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/smart-tv-55-4k-qled-samsung-the-frame-va-120hz-wi-fi-bluetooth-alexa-google-qn55ls03ba/p/235135500/et/tvql/",
      "store": "Magalu"
    },
    {
      "title": "PES 2018 para PS4 - Konami",
      "original_price": 199.00,
      "current_price": 67.44,
      "discount": 66,
      "image": "https://a-static.mlcdn.com.br/300x300/pes-2018-para-ps4-konami/magazineluiza/043177600/38698b59486328dfa0a104255473daac.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/pes-2018-para-ps4-konami/p/043177600/ga/gesp/",
      "store": "Magalu"
    },
    {
      "title": "Antena Receptor Wifi Wireless Adaptador 1200m",
      "original_price": 27.90,
      "current_price": 9.49,
      "discount": 66,
      "image": "https://a-static.mlcdn.com.br/300x300/antena-receptor-wifi-wireless-adaptador-1200mbps-nota-fiscal-it-blue/sevenltda/antnfwifi/e971c7e3ede65a05e3a9b8ca5f0a2fa0.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/antena-receptor-wifi-wireless-adaptador-1200mbps-nota-fiscal-it-blue/p/ga89781e59/in/eqrw/",
      "store": "Magalu"
    },
    {
      "title": "Fone Bluetooth E6s TWS Sem Fio Para Celular N",
      "original_price": 100.00,
      "current_price": 34.20,
      "discount": 66,
      "image": "https://a-static.mlcdn.com.br/300x300/fone-bluetooth-e6s-tws-sem-fio-para-celular-notebook/amillyloja/15991204847/eed1df8e52e59cf341bf22ab24db92ef.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/fone-bluetooth-e6s-tws-sem-fio-para-celular-notebook/p/cecddf1cb0/ea/hebh/",
      "store": "Magalu"
    },
    {
      "title": "Máquina De Cortar Cabelo Barba Dragão Buda Pr",
      "original_price": 100.00,
      "current_price": 35.20,
      "discount": 65,
      "image": "https://a-static.mlcdn.com.br/300x300/maquina-de-cortar-cabelo-barba-dragao-buda-profissional-aparador-amilly/amillyloja/15919755090/df1a03b153edc0859f2f838047272705.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/maquina-de-cortar-cabelo-barba-dragao-buda-profissional-aparador-amilly/p/jg52b75k2d/pf/macc/",
      "store": "Magalu"
    },
    {
      "title": "FIFA 21 para PS4 EA",
      "original_price": 369.90,
      "current_price": 129.90,
      "discount": 65,
      "image": "https://a-static.mlcdn.com.br/300x300/fifa-21-para-ps4-ea/magazineluiza/227122000/ad744d7994c88a357661633281fea008.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/fifa-21-para-ps4-ea/p/227122000/ga/fifa/",
      "store": "Magalu"
    },
    {
      "title": "Micro-ondas Electrolux 23L Branco Efficient -",
      "original_price": 1789.00,
      "current_price": 626.05,
      "discount": 65,
      "image": "https://a-static.mlcdn.com.br/300x300/micro-ondas-electrolux-23l-branco-efficient-me23b/magazineluiza/235613900/bdedb81dbc7f27969f8be23922168bd1.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/micro-ondas-electrolux-23l-branco-efficient-me23b/p/235613900/ed/mond/",
      "store": "Magalu"
    },
    {
      "title": "FIFA 21 para Xbox One EA",
      "original_price": 369.90,
      "current_price": 129.90,
      "discount": 65,
      "image": "https://a-static.mlcdn.com.br/300x300/fifa-21-para-xbox-one-ea/magazineluiza/227122100/9246d0fdc551cfd9a2d20543e66929e9.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/fifa-21-para-xbox-one-ea/p/227122100/ga/otga/",
      "store": "Magalu"
    },
    {
      "title": "Nintendo Switch Carrying Case - The Legend of",
      "original_price": null,
      "current_price": 222.11,
      "discount": 64,
      "image": "https://oinks.com.br/wp-content/files/AMZ6ACMGV-300x300.png",
      "url": "https://www.amazon.com.br/dp/B0C13BGPRH?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Bateria para Nintendo Switch Clutch HX-CPCS-U",
      "original_price": 579.90,
      "current_price": 211.10,
      "discount": 64,
      "image": "https://a-static.mlcdn.com.br/300x300/bateria-para-nintendo-switch-clutch-hx-cpcs-u-hyperx/magazineluiza/235581900/f18e00499a08fd8128709ef7265c428b.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/bateria-para-nintendo-switch-clutch-hx-cpcs-u-hyperx/p/235581900/ga/acns/",
      "store": "Magalu"
    },
    {
      "title": "Máquina de Cortar Cabelo Profissional Dragão ",
      "original_price": 100.00,
      "current_price": 36.00,
      "discount": 64,
      "image": "https://a-static.mlcdn.com.br/300x300/maquina-de-cortar-cabelo-profissional-dragao-acabamento-4-pentes-recarregavel-usb-amilly/amillyloja/15931583664/333b41ac1c86a88e2f4017efb90bf55d.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/maquina-de-cortar-cabelo-profissional-dragao-acabamento-4-pentes-recarregavel-usb-amilly/p/gc23h4c1hd/pf/papp/",
      "store": "Magalu"
    },
    {
      "title": "Death Stranding para PS4 - Kojima Productions",
      "original_price": 249.00,
      "current_price": 89.91,
      "discount": 64,
      "image": "https://a-static.mlcdn.com.br/300x300/death-stranding-para-ps4-kojima-productions/magazineluiza/224468400/edcb584cbd4e0814be8e7492e3194c9c.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/death-stranding-para-ps4-kojima-productions/p/224468400/ga/javt/",
      "store": "Magalu"
    },
    {
      "title": "Tablet Samsung Galaxy Tab A 32GB 10,1” 4G Wi-",
      "original_price": 3359.90,
      "current_price": 1208.07,
      "discount": 64,
      "image": "https://a-static.mlcdn.com.br/300x300/tablet-samsung-galaxy-tab-a-32gb-101-4g-wi-fi-android-9-1-octa-core-cam-8mp-selfie-5mp/magazineluiza/135299700/8f67fb67fcabde7824cebc7ac82befdc.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/tablet-samsung-galaxy-tab-a-32gb-101-4g-wi-fi-android-9-1-octa-core-cam-8mp-selfie-5mp/p/135299700/tb/taba/",
      "store": "Magalu"
    },
    {
      "title": "Liquidificador Philco Reverse PLQ1300P 1200W",
      "original_price": 299.90,
      "current_price": 109.90,
      "discount": 63,
      "image": "https://a-static.mlcdn.com.br/300x300/liquidificador-philco-reverse-plq1300p-1200w/britania/5963/3fdbc929e055139526b3131ac5cc8e9e.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/liquidificador-philco-reverse-plq1300p-1200w/p/bab25g6531/ep/liqu/",
      "store": "Magalu"
    },
    {
      "title": "Micro-ondas Electrolux 36L Branco e Cinza ME3",
      "original_price": 1979.00,
      "current_price": 740.05,
      "discount": 63,
      "image": "https://a-static.mlcdn.com.br/300x300/micro-ondas-electrolux-36l-branco-e-cinza-me36b/magazineluiza/235613300/600a54e92859f397a91ab594918e34c5.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/micro-ondas-electrolux-36l-branco-e-cinza-me36b/p/235613300/ed/mond/",
      "store": "Magalu"
    },
    {
      "title": "Fortrek H2 - Headset Gamer Pro Microfones e F",
      "original_price": 186.00,
      "current_price": 69.00,
      "discount": 63,
      "image": "https://oinks.com.br/wp-content/files/AMZAYW6IC-300x300.png",
      "url": "https://www.amazon.com.br/dp/B07FJPLFKM?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Gabinete Gamer Aigo DarkFlash DK100, Mid-Towe",
      "original_price": 340.81,
      "current_price": 124.87,
      "discount": 63,
      "image": "https://a-static.mlcdn.com.br/300x300/gabinete-gamer-aigo-darkflash-dk100-mid-tower-lateral-de-vidro-preto-dk100-bk/pichauinfo/dk100-bk/74673c0ef1d2eb5ffbd900e27894e7f2.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/gabinete-gamer-aigo-darkflash-dk100-mid-tower-lateral-de-vidro-preto-dk100-bk/p/gd88fjg3ee/in/gbgm/",
      "store": "Magalu"
    },
    {
      "title": "Headset Gamer P2 Preto/Vermelho Multilaser - ",
      "original_price": 79.90,
      "current_price": 29.90,
      "discount": 63,
      "image": "https://oinks.com.br/wp-content/files/AMZAB595A-300x300.png",
      "url": "https://www.amazon.com.br/dp/B074XJV522?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Monitor LG Ultrawide 29\" Led LG IPS Full HD 2",
      "original_price": 2999.90,
      "current_price": 1099.00,
      "discount": 63,
      "image": "https://a-static.mlcdn.com.br/300x300/monitor-lg-ultrawide-29-led-lg-ips-full-hd-2560-x-1080-75hz-hdr10-hdmi-29wl500/techshop/monlgo00093/86e140c5c212565634375323166da5d2.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/monitor-lg-ultrawide-29-led-lg-ips-full-hd-2560-x-1080-75hz-hdr10-hdmi-29wl500/p/jffah00kk7/in/mnpc/",
      "store": "Magalu"
    },
    {
      "title": "Adaptador Tomada Universal Padrão 150 Países ",
      "original_price": 21.00,
      "current_price": 7.83,
      "discount": 63,
      "image": "https://oinks.com.br/wp-content/files/AMZZZRYW3-300x300.png",
      "url": "https://www.amazon.com.br/dp/B076C1NV9P?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Controle remoto universal para todos os telev",
      "original_price": 21.50,
      "current_price": 8.00,
      "discount": 63,
      "image": "https://oinks.com.br/wp-content/files/AMZIATCER-300x300.png",
      "url": "https://www.amazon.com.br/dp/B084WSRXZ6?&tag=pouppa-20&ref_=as_li_ss_tl",
      "store": "Amazon"
    },
    {
      "title": "Smart TV 24” Philco Led PTV24G50SN Midiacast ",
      "original_price": 1999.90,
      "current_price": 759.90,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/smart-tv-24-philco-led-ptv24g50sn-midiacast-netflix/britania/6132/a394a1b4ba1d8ddfd0a663fd7e9a66a9.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/smart-tv-philco-24-ptv24g50sn-d-led-midiacast-netflix/p/ga83f352e5/et/elit/",
      "store": "Magalu"
    },
    {
      "title": "Modelador de Cachos Taiff Curves 1\" 2,5 cm co",
      "original_price": 499.99,
      "current_price": 189.90,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/modelador-de-cachos-taiff-curves-1-25-cm-com-cabo-giratorio-preto-210c-bivolt/techshop/mdctai00001/24dd5b4fcf9a32e0d0ed7969ed6d912e.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/modelador-de-cachos-taiff-curves-1-25-cm-com-cabo-giratorio-preto-210c-bivolt/p/gd3fge9bkh/pf/moos/",
      "store": "Magalu"
    },
    {
      "title": "Pneu 15” 195/70R15C Linglong 104Q - Radial 66",
      "original_price": 999.90,
      "current_price": 379.91,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/pneu-15-195-70r15c-linglong-104q-radial-666/magazineluiza/236149500/bac01709b191fe4b9ea7bef7056b0fa5.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/pneu-15-195-70r15c-linglong-104q-radial-666/p/236149500/au/aupa/",
      "store": "Magalu"
    },
    {
      "title": "Projetor Smart Samsung Freestyle SP-LSP3BLAXZ",
      "original_price": 8999.00,
      "current_price": 3398.15,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/projetor-smart-samsung-freestyle-sp-lsp3blaxzd-full-hd-1920x1080-portatil-wi-fi-bluetooth-hdmi/magazineluiza/234864600/7b9e799bb2b928670c556f68899bb7ff.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/projetor-smart-samsung-freestyle-sp-lsp3blaxzd-full-hd-1920x1080-portatil-wi-fi-bluetooth-hdmi/p/234864600/et/eapj/",
      "store": "Magalu"
    },
    {
      "title": "Microsoft 365 Personal Office 365 apps 1TB - ",
      "original_price": 329.00,
      "current_price": 125.99,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/microsoft-365-personal-office-365-apps-1tb-1-usuario-assinatura-anual/magazineluiza/040418400/ebebe667a1c5301095832ebcd43f1c69.jpg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/microsoft-365-personal-office-365-apps-1tb-1-usuario-assinatura-anual/p/040418400/in/sowa/",
      "store": "Magalu"
    },
    {
      "title": "Monitor Gamer Mancer Horizon 23.8 Pol. Va Ful",
      "original_price": 1363.56,
      "current_price": 519.11,
      "discount": 62,
      "image": "https://a-static.mlcdn.com.br/300x300/monitor-gamer-mancer-horizon-23-8-pol-va-full-hd-1ms-75hz-freesync-g-sync-vga-hdmi-mcr-hzn24-bl1/pichauinfo/mcr-hzn24-bl1/b14e66aaa2e5573855fd95ac146f98c4.jpeg",
      "url": "https://www.magazinevoce.com.br/magazineoinks/monitor-gamer-mancer-horizon-23-8-pol-va-full-hd-1ms-75hz-freesync-g-sync-vga-hdmi-mcr-hzn24-bl1/p/ej1cg86eaj/in/pepc/",
      "store": "Magalu"
    }
  ]);

  const pageNumbers = ["1", "2", "3", "4", "5"]

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastProduct);

  const sortByTitle = () => {   
    const copyArray = [...products];
    copyArray.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    setProducts(copyArray);
  };
  const sortByPrice = () => {   
    const copyArray = [...products];
    copyArray.sort(function (a, b) {
      return a.current_price - b.current_price;
    });
    setProducts(copyArray);
  };

  const sortByDiscount = () => {    
    const copyArray = [...products];
    copyArray.sort(function (a, b) {
      return b.discount - a.discount;
    });
    setProducts(copyArray);
  };

  return (
    <div className="vstack">     
      <div className="container py-4">
        <div className="row g-3">
        <div className="col-lg-9">
            <div className="hstack top-bar justify-content-between mb-3">              
              <div className="btn-group" role="group">
              <button className="btn btn-top-bar" onClick={sortByDiscount}>
                  <FontAwesomeIcon icon={['fas', 'percentage']} /> Maior desconto
                </button>
                <button className="btn btn-top-bar" onClick={sortByPrice}>            
                  <FontAwesomeIcon icon={['fas', 'sort-amount-down-alt']} /> Menor preço             
                </button>
                <button className="btn btn-top-bar" onClick={sortByTitle}>
                  <FontAwesomeIcon icon={["fas", "clock"]} /> Recentes
                </button>
              </div>
              <span className="text-dark">{products.length} itens encontrados</span>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
              {
                products.map((product, index) => 
                  {
                    if(index===3){
                      return (
                        <>
                        <div className="col">
                          <div className="card h-100 border-0 shadow-sm">
                            
                                  <img
                                    className="ratio ratio-1x1"
                                    src={`https://i.promobit.com.br/185761646816879928968906621814_banner.png`}
                                    alt="Product image."
                                  />
                             
                          </div>
                        </div>
                        <div className="col">
                        <ProductGridCard title={product.title} discount={product.discount} original_price={product.original_price} current_price={product.current_price} image={product.image} store={product.store}  url={product.url} />
                        </div>
                        </>
                      )
                    }
                    else{
                      return (
                        <div className="col">
                          <ProductGridCard title={product.title} discount={product.discount} original_price={product.original_price} current_price={product.current_price} image={product.image} store={product.store}  url={product.url} />
                        </div>
                      )
                    }
                  }                  
                )
              }
              
            </div>

            <nav className="float-end mt-3">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                {
                pageNumbers.map((number) => 
                  {
                    <li className="page-item">
                    <a className="page-link" href="#">
                      {number}
                    </a>
                  </li>
                  }                  
                )
              }              
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 vstack gap-2">
              <div className="accordion-item">
                <img className="ratio ratio-1x1"              
                  src={`https://ww1.nam.ac.uk/wp-content/uploads/2014/07/1015646.jpg`}
                                 
                />
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div className="accordion-title fw-bold">
                    Categories
                  </div>
                </h2>
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      Test
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                  >
                    Brands
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Apple</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          50
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Samsung</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          100
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Sony</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          30
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">AOC</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          60
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                  >
                    Price Range
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-0">
                    <form className="row g-3">
                      <div className="col-6">
                        <label className="form-label">Min</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Max</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100">Apply</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
           
          </div>          
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
