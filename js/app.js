if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js');
}

/* if (window.caches) {
    console.log('Si soporta cache :D');
    //Obtiene un cache, si este no existe, lo crea (se pueden crear 'n' caches) :D
    caches.open('cache-v1');
    //caches.open('cache-v2');
    //caches.open('cache-v3');

    caches.keys().then((keys) => {
        console.log(keys); //imprimirá toooodos los caches abiertos
    })

    caches.has('cache-v4').then((res) => {
        console.log(res); //Retorna si existe o no el cache solicitado
    })

    caches.open('cache-v1').then((cache) => {
        //cache.add('./index.html'); Agrega lo indicado al cache
        //cache.add('./css/style.css');
        //cache.add('./images/hasbulla.jpeg'); 

        //recibe un arreglo y guarda todo lo indicado en el cache
        cache.addAll( 
            [
                './index.html',
                './css/style.css',
                './images/hasbulla.jpeg'
            ]
        ).then((e) => {
            cache.delete('./images/hasbulla.jpeg'); //Se agrega aquí por que, en caso de ponerlo afuera, se ejecuta el delete antes de que termine de agregarlo
        })

        cache.match('./index.html').then((res) => {
            res.text().then((text) => {
                console.log('match/text: ', text);
            })
        })
    })

    //caches.delete('cache-v2') Elimina el cache indicado 
} */