// on initialise nos variables et nos constantes
const widthslider = document.querySelector(".slider").offsetWidth;
let modal = document.getElementById("modal");
let nameDish = document.getElementById("food-name");
let modalBody = document.getElementById("modal-body");

// objet

// les ramens
let ramen1 = {
    name: "Ramen aux Œufs Brouillés",
    description : "Des nouilles fines dans un bouillon aromatique, avec des morceaux de poulet grillés, des champignons, et une touche de crémeux grâce à des œufs brouillés."
}

let ramen2 = {
    name:"Ramen au Porc Pané",
    description: "Des nouilles épaisses plongées dans un bouillon tonkotsu riche, accompagnées de tranches de porc pané croustillantes, de chou nappa croquant et de ciboule fraîche. Une expérience savoureuse mariant la texture tendre du porc et le fondant des nouilles dans un bouillon réconfortant."
}

let ramen3 = {
    name: "Ramen au Porc et à l'Oeuf",
    description: "Un bol de délices asiatiques, où des nouilles épaisses flottent dans un bouillon tonkotsu parfumé. Des tranches de porc fondantes reposent délicatement sur les nouilles, accompagnées d'un œuf mollet à la texture crémeuse. Le tout garni de ciboule fraîche et de graines de sésame pour une expérience culinaire équilibrée entre richesse et fraîcheur. Un mélange harmonieux de saveurs et de textures qui réchauffe le cœur."
}

// les sushis
let sushi1 = {
    name : "La Perle Céleste",
    description : "Une expérience culinaire d'exception où l'art de la gastronomie japonaise prend vie. Chaque bouchée de ce sushi de luxe est une symphonie de saveurs exquises. Du riz vinaigré parfaitement assaisonné, enveloppant des lamelles de saumon fondant, de l'avocat crémeux et de la chair délicate de crabe. Couronné d'une fine tranche de thon gras et rehaussé par des touches subtiles de wasabi et de sauce soja. Chaque pièce est une rencontre délicate entre la fraîcheur des ingrédients et l'expertise du sushi chef."
}

let sushi2 = {
    name : "Sakura Sensation",
    description : "Une expérience sensorielle qui évoque l'esprit du Japon, Sakura Sensation est un hommage aux saveurs intemporelles. Le riz, ourlé d'une délicate essence de vinaigre, encadre des tranches d'or rouge du thon, des notes florales de saumon et la richesse iodée de la crevette impériale. Chaque bouchée est une symphonie de délices, orchestrée par la fusion du wasabi, de la sauce soja et de l'avocat. Sakura Sensation invite à un voyage gustatif authentique au cœur des traditions culinaires japonaises."
}

// les curry
let curry1 = {
    name : "Curry Impérial",
    description : "Une expérience culinaire raffinée où la tendresse du filet mignon est sublimée par une fusion audacieuse de saveurs. Le curry impérial dévoile sa richesse avec des épices exotiques, tandis que le lait de coco apporte une onctuosité divine. Accompagné de légumes croquants et de riz basmati parfumé, ce curry deluxe est une étreinte gourmande pour les palais les plus exigeants."
}

let curry2 = {
    name : "Curry Gourmand",
    description : "Un mélange succulent de sucré et de salé, ce curry gourmand met en scène des crevettes juteuses et des morceaux de mangue tendre. Les épices exquises dansent sur le palais, créant une symphonie de saveurs tropicales. Servi avec un lit de riz basmati, ce curry est une célébration gourmande qui éveillera les sens."
}

let curry3 = {
    name : "Curry Japonais",
    description : "Une exploration gustative au pays du soleil levant, ce curry japonais marie la croustillance du porc pané avec une sauce curry veloutée et parfumée. Les épices japonaises subtilement dosées créent une harmonie umami, tandis que le riz japonica absorbe délicatement la richesse du curry. Le Katsu Curry au Porc est un délice authentique qui transporte les papilles au cœur de la cuisine japonaise."
}

//les Onigiris
let onigiris1 = {
    name : "Classique au Saumon Grillé",
    description : "Un onigiri traditionnel révélant l'essence de la cuisine japonaise. Le riz vinaigré, délicatement pressé, enveloppe des lamelles de saumon grillé, offrant une symphonie de textures entre le croquant de l'algue nori et la tendreté du poisson."
}

let onigiris2 = {
    name : "Poulet Karaage",
    description : "Un onigiri audacieux qui allie la chaleur épicée du poulet karaage au riz savamment assaisonné. L'enveloppe d'algue nori ajoute une touche maritime à l'ensemble, créant une expérience piquante et savoureuse qui séduira les amateurs de sensations fortes."
}

// les Okonomiyaki
let okonomiyaki1 = {
    name : "Okonomiyaki",
    description : "Une création culinaire japonaise qui marie l'art de la crêpe avec des saveurs riches et variées. L'okonomiyaki, souvent appelé pizza japonaise ou crêpe japonaise, est une délicieuse fusion de chou râpé, de pâte à crêpe et d'ingrédients au choix tels que le porc, les fruits de mer, le fromage, ou même des nouilles. Grillée à la perfection, elle est nappée de mayonnaise, de sauce okonomiyaki sucrée et salée, et saupoudrée de flocons de bonite séchée et d'algue nori. Une expérience gustative qui évoque la convivialité des restaurants de rue au Japon."
}

//les Tempuras
let tempuras1 = {
    name : "Tempura de Légumes Colorés",
    description : "Un festin végétal où des légumes tels que des courgettes, des carottes et des poivrons sont enrobés d'une pâte légère et croustillante, puis frits à la perfection. Une explosion de couleurs et de saveurs végétales dans chaque bouchée."
}

let tempuras2 = {
    name : "Tempura de Crevettes Dorées",
    description : "Des crevettes charnues enrobées d'une pâte aérienne, délicatement frites jusqu'à obtenir une teinte dorée. La texture croustillante de la tempura révèle la succulence des crevettes, offrant une expérience gustative équilibrée entre le croustillant et le fondant."
}

let tempuras3 = {
    name : "Tempura de Calamars Tendres" ,
    description : "Un mariage de tendresse et de croustillant avec des anneaux de calmar enrobés de pâte légère. La friture délicate préserve la texture moelleuse du calmar, créant une expérience de tempura irrésistible pour les amateurs de fruits de mer."
}

// Takoyaki
let takoyaki1 = {
    name : "Délices Octopodiens",
    description : "Des boules de pâte moelleuses, croustillantes à l'extérieur et tendres à l'intérieur, renfermant une surprise océanique. Chaque takoyaki est une petite merveille qui marie la douceur du dashi avec la richesse umami de la pieuvre. Garni de bonite séchée, de mayonnaise onctueuse et de copeaux d'algue, chaque bouchée offre une explosion de saveurs japonaises traditionnelles. Un festin digne des rues animées d'Osaka."
}

let takoyaki2 = {
    name : "Takoyaki aux Saveurs Modernes ",
    description : "Une interprétation moderne avec des takoyaki innovants, mariant la pieuvre à d'autres ingrédients créatifs. Peut-être des takoyaki aux crevettes, avec une sauce dynamique à la sriracha et des éclats de feuilles de shiso. Une fusion audacieuse de saveurs pour ceux en quête d'une expérience takoyaki contemporaine."
}

//les Yakitoris
let yakitoris1 = {
    name : "Yakitori Classique au Poulet ",
    description : "Des morceaux de poulet marinés dans une sauce tare sucrée-salée, enfilés sur des brochettes et grillés à la perfection. Chaque bouchée offre une explosion de saveurs grillées, accentuée par la caramelisation délicate de la sauce tare."
}

let yakitoris2 = {
    name : "Yakitori aux Légumes Grillés",
    description : "Une option végétarienne alléchante, avec des brochettes de légumes colorés tels que des champignons, des poivrons et des oignons, tous grillés pour révéler une palette de saveurs fumées. Accompagnées d'une sauce tare végétalienne, ces brochettes offrent une alternative légère et délicieuse."
}


// Toutes listes
// on place dans une liste tout nos bojets
let dish = [ramen1, ramen2, ramen3, sushi1, sushi2, curry1, curry2, curry3, onigiris1, onigiris2, 
tempuras1, tempuras2, tempuras3, takoyaki1, takoyaki1, takoyaki2, yakitoris1 ,yakitoris2];


// Toutes les fonctions
// fonction pour ouvrir ou fermer la modal
function modalOpen() {
    modal.classList.add("appears");
    document.body.classList.add("modal-open");
}

function modalClose(){
    modal.classList.remove("appears");
    document.body.classList.remove("modal-open");
}

// On regarde le nom choisit
function modalContent(name){
    dish.forEach(function(objet){
        if (objet.name == name){
            content = "<p>"+objet.description+"</p>";
            nameDish.innerHTML = objet.name;
            modalBody.innerHTML = content;
        } 
    })
}

// Fonction slider
function previous(){
    document.querySelector(".slider-content").scrollLeft -= widthslider;
}

function next(){
    document.querySelector(".slider-content").scrollLeft += widthslider;
}