const mongoose = require('mongoose');
const { Place } = require('../Models/Places.cjs');

const PlacesSeed = [
    new Place({
        Name: 'Dreams Royal Beach Punta Cana',
        Description: 'Este complejo turístico premium todo incluido se ubica en una playa rodeada de palmeras en la costa del Caribe, a 3 km de la reserva ecológica de Punta Cana y a 5 km del campo de golf Corales.',
        Image: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/10/20/1055/DRRPC-P0001-Aerial-Exterior.jpg/DRRPC-P0001-Aerial-Exterior.16x9.jpg?imwidth=1920',
        Rate: 9,
        Location: {
            Longitude: -68.41190181821102,
            Latitude: 18.69525515762714,
            Country: 'Dominican Republic',
            City: 'Punta Cana'
        }
    }),
    new Place({
        Name: 'Barceló Bávaro Palace',
        Description: 'Este complejo turístico refinado todo incluido en la playa Bávaro del océano Atlántico Norte se encuentra a 6 km del parque de atracciones Manatí Park y a 18 km del Aeropuerto Internacional de Punta Cana.',
        Image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d0/c7/06/barcelo-bavaro-palace.jpg?w=700&h=-1&s=1',
        Rate: 10,
        Location: {
            Longitude: -68.39473568203006,
            Latitude: 18.676392046264493,
            Country: 'Dominican Republic',
            City: 'Punta Cana'
        }
    }),
    new Place({
        Name: 'Playa Los Patos',
        Description: 'Lugar animado, con una playa de guijarros famosa por el fuerte oleaje, la comida y el río apto para el nado.',
        Image: 'https://image.routeyou.com/share/poi/600x315/2344985-es@2x.png',
        Rate: 8,
        Location: {
            Longitude: -71.18242397670228,
            Latitude: 17.958930044075867,
            Country: 'Dominican Republic',
            City: 'Barahona'
        }
    }),
    new Place({
        Name: 'Parque Colón',
        Description: 'El Parque Colón es uno de los parques o plazas históricas de la Ciudad Colonial de Santo Domingo, el cual sirvió como centro principal de fiesta en la sociedad de la época colonial.',
        Image: 'https://lh3.googleusercontent.com/p/AF1QipMzyePUFpjyG0LLzz8E6lV6xFK3a6AX2n_PnLc8=s1360-w1360-h1020',
        Rate: 8,
        Location: {
            Longitude: -69.88405361534046,
            Latitude: 18.474230565243133,
            Country: 'Dominican Republic',
            City: 'Santo Domingo'
        }
    }),
    new Place({
        Name: 'La Isla Saona',
        Description: 'La Isla Saona se encuentra en el extremo sureste de República Dominicana. Forma parte del Parque Nacional del Este y es conocida por los mangles, los arrecifes de coral y las playas bordeadas de palmeras, como la Palmilla.',
        Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Saona_Island_December_2020.jpg/1200px-Saona_Island_December_2020.jpg',
        Rate: 8,
        Location: {
            Longitude: -68.699444444444,
            Latitude: 18.155555555556,
            Country: 'Dominican Republic',
            City: 'Isla Saona'
        }
    }),
];

const PlacesSeed2 = [
    new Place({
        Name: 'Nuestra Señora de la Encarnación',
        Description: 'La Catedral Primada de América, Catedral de Santo Domingo o Basílica Menor de Santa María de la Encarnación, es una catedral y basílica menor dedicada a Santa María de la Encarnación que se encuentra en la Ciudad Colonial de Santo Domingo, en República Dominicana.',
        Image: 'https://lh3.googleusercontent.com/p/AF1QipPrDyK7h4LUjpvkBUp6eWhfvTU7ZMx-fe_lHCRh=w296-h202-n-k-rw-no-v1',
        Rate: 8.7,
        Location: {
            Longitude: -69.88410360000002,
            Latitude: 18.473945638470497,
            Country: 'Dominican Republic',
            City: 'Santo Domingo'
        }
    }),
    new Place({
        Name: 'Lago Los Tres Ojos',
        Description: 'A pocos minutos del centro de la ciudad de Santo Domingo, se encuentra este atractivo natural. El cuál se formó hace miles de años tras un cataclismo que provocó el desplome de gran parte de las rocas de la zona dividiéndolo en 4 lagos.',
        Image: 'https://ilamdir.org/blobs/ilamdir/w600h600/328/2019/49/los-tres-ojos-dominican-republic_l__1_.jpeg',
        Rate: 10,
        Location: {
            Longitude: -69.84300013465769,
            Latitude: 18.480030948605332,
            Country: 'Dominican Republic',
            City: 'Santo Domingo'
        }
    }),
    new Place({
        Name: '27 Charcos',
        Description: 'Este monumento natural del río Damajagua esta compuesto de 27 saltos de diversos tamaño. La asociación de guías salvavidas del río Damajagua coordina la bajada de los 27 charcos con chalecos y cascos, ofreciendo al visitante aventura y seguridad.',
        Image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/29/09/73/it-was-beautiful-all.jpg?w=1200&h=-1&s=1',
        Rate: 7,
        Location: {
            Longitude: -70.8189478470972,
            Latitude: 19.73692318281513,
            Country: 'Dominican Republic',
            City: 'Damajagua'
        }
    }),
    new Place({
        Name: 'Ciudad Colonial',
        Description: 'La Ciudad Colonial es el núcleo urbano más antiguo de la ciudad de Santo Domingo, capital de la República Dominicana. La Ciudad Colonial fue el primer asentamiento europeo permanente en América, fundada en 1502 por los conquistadores españoles.​',
        Image: 'https://www.popularenlinea.com/Personas/blog/PublishingImages/2020/Agosto/Haciendo-turismo-interno-en-la-Zona-Colonial.jpg',
        Rate: 8,
        Location: {
            Longitude: -69.8883466134173,
            Latitude: 18.474149775944028,
            Country: 'Dominican Republic',
            City: 'Santo Domingo'
        }
    }),
    new Place({
        Name: 'Playa Guayacanes',
        Description: 'Localizada a poca distancia de Playa Caribe, Playa Guayacanes es una modesta playa de aguas tranquilas y arenas finas muy poco frecuentada.',
        Image: 'https://www.mitur.gob.do/wp-content/uploads/2022/03/Playa-Guayacanes.jpg',
        Rate: 8,
        Location: {
            Longitude: -69.45106297056735,
            Latitude: 18.420781384797,
            Country: 'Dominican Republic',
            City: 'Guayacanes'
        }
    }),
];

async function Execute () {
    mongoose.connect("mongodb://0.0.0.0:27017/TurismoApp")
    .then(async () => {
        console.log('[GOING] CONNECTED TO MONGO');
        PlacesSeed2.map(async (el, index) => {
            el.save();
            if(index == PlacesSeed2.length - 1){
                console.log('DONE')
                // mongoose.disconnect(); 
            }
        });    
    })
    .catch(() => console.log('[ERROR] CANNOT CONNECT TO MONGO'))  
}

Execute();