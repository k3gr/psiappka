var burger = document.querySelector(".burger");
var nav = document.querySelector("nav");
burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
})

var resultBox = document.querySelector('#result');

var name;

function getMaleName() {
    var male = ["Abi", "Aczi", "Adi", "Agat", "Agron", "Aiko", "Ajax", "Akeno", "Aki", "Alex", "Alfa", "Alf", "Alpi", "Alvin", "Amber", "Ami", "Amigo", "Amis", "Amol", "Amor", "Amper", "Ananas", "Anfi", "Ange", "Apach", "Apik", "Apsik", "Arczci", "Ardo", "Ares", "Arez", "Argo", "Argus", "Ari", "Armani", "Armin", "Arnold", "Aron", "Arrakis", "Arson", "Artus", "Ashe", "Aslan", "Aston", "Atom", "Atos", "Awof", "Axel", "Azard", "Azazel", "Azor", "Babi", "Badi", "Bailly", "Bajdek", "Bajer", "Bajtek", "Bajzel", "Baks", "Baksio", "Bakuś", "Baloo", "Balto", "Bandi", "Bari", "Baron", "Barry", "Bart", "Bary", "Basco", "Baster", "Batman", "Baxter", "Bazyl", "Bazyli", "Bąbel", "Bączuś", "Beilis", "Bejbi", "Bekas", "Beksio", "Bello", "Benek", "Benio", "Beniu", "Benji", "Bentlay", "Benuś", "Bercik", "Berni", "Beryl", "Bessi", "Białasek", "Bibi", "Bibo", "Bieluch", "Bigi", "Bil", "Billy", "Bilon", "Bingo", "Biszkopt", "Black", "Blu", "Blue", "Bluemoon", "Blues", "Blumiś", "Bobek", "Bobi", "Bobik", "Bobo", "Boczek", "Bodo", "Boguś", "Boksiu", "Bolek", "Bolo", "Bols", "Bolt", "Boluś", "Bombel", "Bombur", "Bongo", "Bono", "Bordi", "Borgio", "Borut", "Borysek", "Boss", "Boston", "Bounty", "Bradlej", "Brasko", "Brego", "Brendy", "Brooklyn", "Brownie", "Brunek", "Bruni", "Bruno", "Brutus", "Bryś", "Bubu", "Bubuś", "Bucky", "Buddy", "Budyń", "Bueno", "Buniek", "Bunio", "Burbon", "Burger", "Calvin", "Cappi", "Cappuccino", "Carlos", "Cekin", "Cezar", "Chacho", "Chaps", "Charlie", "Charm", "Cherry", "Chester", "Chico", "Chiko", "Chili", "Choco", "Chojraś", "Chorizo", "Chrupek", "Chuck", "Ciapek", "Ciapo", "Ciastek", "Ciciuś", "Cleo", "Clifford", "Codi", "Coffee", "Colli", "Collinek", "Colly", "Combo", "Corin", "Cosinus", "Crusoe", "Cukier", "Cumin", "Cygan", "Cykor", "Cynamon", "Cypis", "Cyryl", "Czaki", "Czako", "Czapkins", "Czarek", "Czesio", "Czester", "Cziro", "Czort", "CzuCzu", "Dabo", "Daffi", "Dafinek", "Dakar", "Dante", "Dantes", "Dany", "Darwin", "Daster", "Dasti", "Deany", "Dekster", "Demon", "Deneris", "Denis", "Dero", "Dexter", "Diabeł", "Diablo", "Diadem", "Diament", "Diego", "Diesiel", "Dingo", "Dino", "Dios", "Dixon", "DJ", "Django", "Docent", "Dodo", "Dolar", "Dorian", "Dosiek", "Draco", "Drago", "Dragon", "Drako", "Drops", "Drzeki", "Dudinek", "Dudu", "Dukat", "Dunio", "Dyzio", "Dzerald", "Dzidzi", "Dżeki", "Dżemik", "Dżidżun", "DżoDżo", "Dżoker", "Ed", "Edek", "Edgar", "Ego", "Eguś", "Eki", "Elias", "Eliot", "Elmo", "Eluniek", "Elvis", "Emil", "Enzo", "Erbi", "Escobar", "Ewer", "Fado", "Fafik", "Fago", "Fajfer", "Falconera", "Falkor", "Farciarz", "Farcik", "Fart", "Felek", "Feli", "Felix", "Feluś", "Femi", "Fendi", "Fenuś", "Ferdek", "Fero", "Fido", "Fifa", "Fifi", "Figaro", "Figiel", "Figo", "Fiko", "Filemon", "Filip", "Filo", "Filuś", "Finiek", "Fiodor", "Fituś", "Flapi", "Flo", "Floki", "Florian", "Fluffi", "Fofulek", "Fokus", "Fox", "Franio", "Fred", "Freddie", "Frędzel", "Frodo", "Frugo", "Fuks", "Fuksik", "Gabdhi", "Gabor", "Gacek", "Gambi", "Gamoń", "Gandalf", "Gangster", "Gapcio", "Garfie", "Garfield", "Garik", "Garry", "Gaston", "Gorge", "Garfild", "Gibon", "Gibson", "Gines", "Gizmo", "Gokan", "Goldi", "Gold", "Goliat", "Goofy", "Gordon", "Graffi", "Granat", "Grand", "Grey", "Gringo", "Groszek", "Gruchot", "Gryzek", "Gucci", "Gucio", "Gumiś", "Gustaw", "Grypsy", "Hachi", "Hachiko", "Haczi", "Hades", "Hermann", "Hardi", "Harley", "Harold", "Harrison", "Harry", "Haru", "Hasan", "Heaven", "Heksan", "Hektor", "Herman", "Heros", "Hetman", "Hikari", "Hood", "Horus", "Houki", "House", "Hugo", "Hulk", "Hunter", "Hyziek", "Ibis", "Idefix", "Ido", "Idol", "Ignaś", "Igor", "Iron", "Ivan", "Ivar", "Izmir", "Izzy", "Jacek", "Jacki", "Jackie", "Jager", "Jampy", "Janek", "Jankes", "Jarhead", "Jasiek", "Jasper", "Jazz", "Jeff", "Jerry", "Jesse", "Jim", "Jimi", "Jimmy", "JJ", "Jogi", "Johnny", "Joker", "Joko", "Jordan", "Jorguś", "Joris", "Józio", "Julian", "Juni", "Junior", "Kacper", "Kader", "Kohlo", "Kaiser", "Kajetan", "Kali", "Kajtek", "Kapsel", "Karat", "Karlus", "Karmel", "Karmen", "Kasel", "Kasztan", "Kayko", "Kazan", "Kazik", "Kazio", "Keks", "Kenzo", "Kesio", "Kevin", "Kicek", "Kierat", "Kiki", "Killer", "Kimbo", "Kimiko", "Kiwi", "Klakier", "Kleks", "Klemek", "Klemens", "Klusek", "Kminek", "Knapik", "Kobi", "Kodi", "Kodo", "Koffi", "Koko", "Kokos", "Kokosz", "Koks", "Kolec", "Kolin", "Kolubek", "Kosmita", "Kosmo", "Kosmos", "Kostek", "Kovu", "Kraken", "Kropek", "Ksenon", "Książe", "Kuba", "Kudłaty", "Kuki", "Kumiko", "Kusko", "Kusy", "Lafi", "Laki", "Lambo", "Largo", "Lazar", "Leliks", "Lemon", "Lenny", "Lenox", "Leo", "Leon", "Leoncjo", "Leonek", "Leonidas", "Lerek", "Lesio", "Lestat", "Lester", "Leti", "Levis", "Lilo", "Lincoln", "Lio", "Lisek", "Loco", "Logan", "Loki", "Lolek", "Loras", "Lord", "Louis", "Lucek", "Lucjan", "Lucjusz", "Lucky", "Lucyfer", "Luis", "Lujek", "Lulu", "Lupi", "Lupus", "Lussi", "Łatek", "Łidi", "Łobuz", "Łysek", "Maciuś", "Mafii", "Mafin", "Magnum", "Majek", "Majkel", "Majki", "Majli", "Majlo", "Major", "Majster", "Majszi", "Makao", "Maks", "Malkolm", "Malmo", "Mały", "Mambo", "Manami", "Manfred", "Maniek", "Manio", "Maniuś", "Marcel", "Marceliusz", "Marcepan", "Marco", "Marcus", "Marianek", "Markiz", "Marley", "Marshall", "Masaj", "Maurycy", "Max", "May", "Maybe", "Mayki", "Melman", "Mentos", "Mer", "Mercedes", "Merci", "Mers", "Mes", "Messi", "Miatoretto", "Michałek", "Mici", "Mikey", "Miki", "Mikie", "Mikuś", "Milik", "MilkyWay", "Milo", "Milou", "Milton", "Miluś", "Misio", "Misiu", "Mobi", "Mohito", "Mojo", "Monimir", "Monti", "Morcik", "Morgan", "Moris", "Mort", "Mozart", "Muchomor", "Mufi", "Muki", "Mumin", "Munduś", "Muni", "Nachos", "Nasus", "Negro", "Nelos", "Nelson", "Neo", "Nero", "Nes", "Nesquik", "Nico", "Nicko", "Nigenek", "Nix", "Niko", "Nikodem", "Nikon", "Niuniek", "Noran", "Norek", "Nosek", "Nunu", "Obelix", "Obi", "Odi", "Odys", "Odyn", "Ogi", "Oki", "Olaf", "Oli", "Olivier", "Opal", "Opel", "Oreo", "Orest", "Ori", "Orio", "Oro", "Orzech", "Oskar", "Ozi", "Ozzy", "Pablo", "Paco", "Pako", "Paku", "Parys", "Pączuś", "Pedro", "Pedros", "Pele", "Pepe", "Pepper", "Pepsi", "Persil", "Perszing", "Piegusek", "Piko", "Piksel", "Pikuś", "Pimpek", "Pimpu", "Pimpuś", "Piorun", "Piracik", "Pirat", "Pixel", "Platon", "Poldek", "Poli", "Pompon", "Poro", "Porter", "Portos", "Prążek", "Prezes", "Protos", "Prymus", "Przylepa", "Przytulas", "Psikus", "Ptyś", "Pufi", "Pumba", "Purpurek", "Pusio", "Puszek", "Pypeć", "Pysiek", "Radzio", "Rafi", "Rafik", "Ragnar", "Rajmund", "Ralf", "Rambo", "Ramos", "Rampal", "Ramzes", "Ramzi", "Rangar", "Rasti", "Rasty", "Ravi", "Rayli", "Regis", "Reks", "Reksio", "Reksiu", "Resco", "Rex", "Rey", "Ricardo", "Ricci", "Ricky", "Rico", "Riko", "Riley", "Rino", "Roben", "Robinek", "Robinson", "Rocco", "Rocky", "Rodo", "Rojter", "Roki", "Rokuś", "Roni", "Roofi", "Roulett", "Roy", "Ruben", "Ruby", "Rudi", "Rudolf", "Rudy", "Rufi", "Rumpel", "Russell", "Rysiu", "Ryś", "Sajgon", "Sajmon", "Saki", "Sali", "Sallem", "Sami", "Samir", "Santi", "Scooby", "Scott", "Scotti", "Seba", "Senshi", "Sezam", "Shadow", "Shanti", "Sherlon", "Sherman", "Shiro", "Shogun", "Shrek", "Siasiuk", "Sigo", "Sigur", "Silver", "Simon", "Siwy", "Skalpel", "Skoti", "Słodziak", "Snajper", "Snickers", "Snoopy", "Snufi", "Sofik", "Solo", "Spaik", "Spajki", "Spajkuś", "Spidy", "Spontan", "Stanly", "Stark", "Stefan", "Steward", "Stiff", "Stiuard", "Stiwi", "Strzała", "Stuard", "Stuart", "Sueno", "Sushi", "Sven", "Sylwek", "Symuś", "Syriusz", "Szanti", "Szarek", "Szarik", "Szaruś", "Szczepan", "Szczurko", "Szejk", "Szerin", "Szeryf", "Szubert", "Szymuś", "Śnieżek", "Śnieżuś", "Świrusek", "Ślepek", "Śpioch", "Tabasco", "Tadek", "Tafi", "Tago", "Tai", "Taj", "Tajfun", "Tako", "Talon", "Tamagotchi", "Tami", "Tango", "Tantos", "Tapsik", "Tarek", "Tashi", "Tasman", "Tatar", "Teddy", "Tedi", "Tedik", "Teo", "Teodor", "Teofil", "Teoś", "Tesla", "Theo", "Thor", "Tibi", "Tifi", "Tiger", "Timi", "Timo", "Timon", "Titi", "Tobi", "Toby", "Toffik", "Tofik", "Togo", "Tokki", "Tolek", "Tołdi", "Tom", "Tomi", "Toni", "Tosiak", "Tosiek", "Toto", "Toudi", "Trezor", "Trikaczu", "Triss", "Troluś", "Tropek", "Trufel", "Tuptuś", "Tutuś", "Tygrys", "Tymek", "Typek", "Tyson", "Uchaty", "Uffik", "Ukulele", "Urwis", "Uszek", "Vansik", "Veyron", "Waderek", "Wafel", "Waldek", "Wedel", "Weekend", "Węgielek", "Wiesław", "Wiewiór", "Wifi", "Wiko", "William", "Willy", "Witek", "Woolfi", "Xawier", "Xenon", "Yogi", "Yoki", "Yorki", "Yoshi", "Yuki", "Yuppie", "Zadzior", "Zak", "Zaki", "Zawisza", "Zdzisiu", "Zefir", "Zein", "Zenek", "Zeus", "Zewik", "Zigi", "Ziomek", "Zołi", "Zorin", "Zulus", "Żeton", "Żak", "Żuk", "Żelek", "Żwiro"];
    name = male[Math.floor(Math.random() * male.length)]
    resultBox.innerHTML = name;
}

function getFemaleName() {
    var female = ["Abbie", "Abi", "Abra", "Agnes", "Aira", "Ajra", "Ajsza", "Aksa", "Akuma", "Alaska", "Albinka", "Alfa", "Alfa", "Ama", "Ami", "Anesthesia", "Ange", "Appa", "Aria", "Arra", "Arwena", "Arya", "Ashe", "Asia", "Atena", "Aura", "Auriculaire", "Aurora", "Awa", "Axa", "Ayra", "Aysha", "AzaBabi", "Bafia", "Bagira", "Bajka", "Bajra", "Bakara", "Bakhitka", "Balbina", "Bambi", "Bandi", "Basia", "Basta", "Bayra", "Bazia", "Belatrix", "Bella", "Bengie", "Berta", "Bessi", "Bestia", "Beti", "Betty", "Beybe", "Beza", "Biała", "Bianka", "Bibi", "Bigi", "Birma", "Black", "Blanca", "Blanka", "Bletka", "Blu", "Blue", "Bluemoon", "Bodo", "Bombelina", "Bona", "Bonnie", "Bordi", "Borówka", "Borya", "Boyka", "Brenda", "Brendy", "Brooklyn", "Brownie", "Bródka", "Bryśka", "Bujka", "Buka", "Bułka", "BuniaCalathea", "Całka", "Candy", "Carlajna", "Carmel", "Carmen", "Carmena", "Carola", "Cassie", "Cekinka", "Chanel", "Chelsea", "Cherry", "Chica", "Chika", "Chila", "Chili", "Chini", "Chloe", "Chomcia", "Ciaudzia", "Ciga", "Ciri", "Clara", "Clea", "Cleo", "Coco", "Codi", "Coffee", "Cola", "Cookie", "Cytryna", "Czacza", "Czesia", "Czika", "Czili", "CzujkaDabi", "Dafcia", "Daisy", "Dakota", "Dama", "Dany", "Daysy", "Deasy", "Debbie", "Debra", "Dejzi", "Delta", "Demolka", "Diana", "Dianka", "Dianusia", "Diksi", "Dina", "Diva", "Dixi", "Dolly", "Dora", "Doris", "Dragonka", "Dredzia", "Duma", "Dusia", "Dzidka", "Dziunia", "Dżadża", "Dżasti", "Dżejlo", "Dżeki", "DżelkaEdzia", "Elka", "Elwirka", "Elza", "Emi", "Emilia", "EstradaFama", "Fanta", "Fatira", "Faza", "Fela", "Felcia", "Falicja", "Felicjana", "Felka", "Fetka", "Fibi", "Fifa", "Fifcia", "Fifidorea", "Fifka", "Figa", "Fija", "Fika", "Fiona", "Fiśka", "Fizia", "Flora", "Florka", "Fraszka", "Fredzia", "Freja", "Freya", "Frida", "Frotka", "Futka", "Fryda", "Frytka", "Fryzia", "Fuksa", "Furia", "FisiaGaba", "Gabi", "Gabrysia", "Gaja", "Gala", "Gambi", "Gandzia", "Grappa", "Gapcia", "Germania", "Ginger", "Gini", "Glasi", "Goja", "Gracja", "Greta", "Gucia", "Gunia", "Gunia", "GwiazdaHaga", "Haidi", "Hana", "Harmony", "Heaven", "Heidi", "Helenka", "Hera", "Herbi", "Hetka", "Hexa", "Hikari", "Hira", "Hiroya", "Holi", "Holy", "HuanaIga", "Igła", "Inez", "Inka", "Ida", "Isia", "Iskra", "IviJadzia", "Jackie", "Jagoda", "Jamajka", "Jasmine", "Jessica", "Jessie", "Jetta", "Jira", "Joko", "Jola", "Jolie", "Joyka", "Józia", "Juka", "Jula", "Julia", "Julka", "Jumka", "JuniKaja", "Kajsa", "Kala", "Kama", "Kali", "Kari", "Kasia", "Kawa", "Kayla", "Kazia", "Kejla", "Kejsi", "Kenay", "Keri", "Kes", "Keysi", "Kiara", "Kiba", "Kicia", "Kika", "Kiker", "Kimi", "Kimiko", "Kinia", "Kira", "Kiri", "Kisztunia", "Kita", "Kiwi", "Kizia", "Klara", "Kleosia", "Kluska", "Kobi", "Kobra", "Kocio", "Kodi", "Koffi", "Kofi", "Koka", "Kora", "Korba", "Kornelia", "Kosmo", "Kostka", "Kovu", "Kropa", "Kropka", "Kropla", "Krówka", "Kruszyna", "Krysia", "Ksara", "Księżniczka", "Kuga", "Kuka", "Kulka", "QueenLady", "Laila", "Lajla", "Lajma", "Lala", "Lamia", "Lara", "Latte", "Layla", "Lea", "Leia", "Lejdi", "Lejzi", "Leksi", "Lena", "Lenka", "Letty", "Lexi", "Leyla", "Lia", "Liberate", "Ligia", "Lila", "Lili", "Lilly", "Lilu", "Lisa", "Liska", "Lizi", "Loca", "Lola", "Lolivette", "Lolly", "Lonelity", "Lora", "Lotka", "Lotta", "Lucia", "Lucy", "Luisa", "Luka", "Lula", "Lulu", "Luna", "Liya", "Lunia", "Lunita", "Lusi", "LusiaŁała", "Łapka", "ŁatkaMadi", "Madlen", "Mafia", "Maggy", "Maja", "Majla", "Malina", "Maloszka", "Malwka", "Mamba", "Mani", "Mania", "Marcelina", "Marcysia", "Marilyn", "Marti", "Marusia", "Maruszka", "Mary", "Marysia", "Masha", "Masza", "Maya", "Meggi", "Megi", "Mejsi", "Mela", "Merida", "Merry", "Metka", "Mia", "Miałkusia", "Michelle", "Migotka", "Mii", "Mija", "Mijka", "Mika", "Mikunia", "Mila", "Milka", "Miła", "Miłka", "Mimi", "Mini", "Minia", "Minka", "Misa", "Misha", "Misia", "Misia", "Misza", "Miśka", "Mitka", "Mokka", "Molencja", "Moli", "Mollie", "Molly", "Mona", "Montana", "Morena", "Moria", "Mrówka", "Mrunia", "Mrużka", "Mua", "Mućka", "Mufinka", "Mufka", "Muni", "Mura", "Mucha", "Mycha", "MyszaNaki", "Nala", "Nami", "Nana", "Nasta", "Nastja", "Neira", "Nela", "Neli", "Nelly", "Nesca", "Nesi", "Neya", "Nika", "Niki", "Nikita", "Nila", "Nina", "Nirvana", "Nitka", "Niunia", "Noa", "Nora", "Noreczka", "Noxa", "Nuka", "Nusia", "Nuśka", "Nutka", "NutaOfelia", "Ofra", "Olivia", "Ora", "OreoPaksa", "Panda", "Pasja", "Pasza", "Pchełka", "Peggy", "Pele", "Peppa", "Pepper", "Pepsi", "Perełka", "Perla", "Perła", "Pestka", "Pięknota", "Pipi", "Plamcia", "Plamka", "Plysinka", "Płoszka", "Poja", "Pojka", "Pola", "Poli", "Polka", "Polly", "Poppi", "Poziomka", "Pretty", "Prima", "Princess", "Prosiałka", "Psotka", "Ptysia", "Puha", "Punia", "Pusia", "Pchełka", "Pysia", "Pyśka", "PyzaRadża", "Rafa", "Rafka", "Ravi", "Raya", "Reja", "Remy", "Reszka", "Ricco", "Rita", "Riva", "Roki", "Roksa", "Roksi", "Rosa", "Rosita", "Roxi", "Rozi", "Róża", "Ruda", "Rudi", "Radzia", "Rudzisława", "Rufinka", "Rufi", "Rufuska", "Rusia", "RysiaSaba", "Saga", "Sali", "Sallem", "Sally", "Salma", "Salusia", "Samba", "Sami", "Sandra", "Sandy", "Santa", "Santi", "Sara", "Sasuke", "Saszka", "Scarlet", "Sejka", "Selena", "Senshi", "Shadow", "Shakira", "Shanti", "Sheela", "Shila", "Shiro", "Shuma", "Siena", "Simba", "Siri", "Sissi", "Skoda", "Solo", "Sonia", "Stefania", "Stefcia", "Stefek", "Stella", "Stiwi", "Strzała", "Sunia", "Sushi", "Suzi", "Suzie", "Szaga", "Szanti", "Szara", "Szasta", "Szerin", "Szerpa", "Szikszura", "Szila", "Szira", "Szylcia", "SzyszkaŚnieżka", "ŚnieżynkaTaja", "Tajga", "TakaHiro", "Tako", "Tamara", "Tami", "Tara", "Tasia", "Tejena", "Tekila", "Tequila", "Tesla", "Tessi", "Tessie", "Tibi", "Tifi", "Tigera", "Tikka", "Tila", "Tina", "Tini", "Titi", "Tola", "Tosia", "Trufla", "Trusia", "Tula", "Tusia", "TysiaUmka", "Uncja", "UszataVanessa", "Vanilia", "Velvetka", "Vera", "VexyWanda", "Wega", "Wena", "Wenus", "Weronika", "Widi", "Wiera", "Wika", "Wiwa", "WiwiXeena", "Xela", "XenaYenka", "YokoZara", "Zdzisława", "Zetka", "Zoja", "Zola", "Zołi", "Zołza", "Zora", "Zorka", "Zoya", "ZulaŻabka", "Żelka", "Żyta"];
    name = female[Math.floor(Math.random() * female.length)]
    resultBox.innerHTML = name;
}

var humanAge;

function getBigAge() {
    var big = [2 + " lata", 6 + " lat", 10 + " lat", 12 + " lat", 14 + " lat", 16 + " lat", 24 + " lata", 31 + " lat", 38 + " lat", 45 + " lat", 52 + " lata", 59 + " lat", 66 + " lat", 73 + " lata", 80 + " lat", 87 + " lat", 94 + " lata", 101 + " lat", 108 + " lat", 115 + " lat", 122 + " lata"];
    var select = document.getElementById('age');
    var value = select.options[select.selectedIndex].value;
    humanAge = big[value];

    resultBox.innerHTML = humanAge;
}

function getMediumAge() {
    var medium = [2 + " lata", 6 + " lat", 10 + " lat", 12 + " lat", 14 + " lat", 16 + " lat", 24 + " lata", 30 + " lat", 36 + " lat", 42 + " lata", 48 + " lat", 54 + " lata", 60 + " lat", 66 + " lat", 72 + " lata", 78 + " lat", 84 + " lata", 90 + " lat", 96 + " lat", 102 + " lata", 108 + " lat"];
    var select = document.getElementById('age');
    var value = select.options[select.selectedIndex].value;
    humanAge = medium[value];

    resultBox.innerHTML = humanAge;
}

function getSmallAge() {
    var small = [2 + " lata", 6 + " lat", 10 + " lat", 12 + " lat", 14 + " lat", 16 + " lat", 24 + " lata", 29 + " lat", 34 + " lata", 39 + " lat", 44 + " lata", 49 + " lat", 54 + " lata", 59 + " lat", 64 + " lata", 69 + " lat", 74 + " lata", 79 + " lat", 84 + " lata", 89 + " lat", 94 + " lata"];
    var select = document.getElementById('age');
    var value = select.options[select.selectedIndex].value;
    humanAge = small[value];

    resultBox.innerHTML = humanAge;
}

function getDodFood() {
    let portion = document.getElementById('portion').value;
    let xportion = document.getElementById('xportion').value;
    let result;

    result = portion / xportion;

    if (result < 1 || isNaN(result)) {
        resultBox.classList.add("alert");
        resultBox.innerHTML = "Wartości muszą być większe od 0";
    } else {
        if ((portion > 10000 || xportion > 10)) {
            resultBox.classList.add("alert");
            resultBox.innerHTML = "Popraw ilości.";
        } else {
            resultBox.innerHTML = result.toFixed(1) + "g";
            resultBox.classList.remove("alert");
        }
    }
}