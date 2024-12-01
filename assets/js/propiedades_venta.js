//PROPIEDADES VENTA

const contenedorV = document.getElementById('venta');

const propiedadesVenta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baño: 4,
    costo: 5.000,
    smoke: false,
    pets: false,
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baño: 1,
    costo: 1.200,
    smoke: true,
    pets: true,
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baño: 3,
    costo: 4.500,
    smoke: false,
    pets: true,
    },

    {
    nombre: 'Departamento primer piso en La Riena',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_950758-MLC80454855215_112024-F.webp',
    descripcion: 'Departamento ubicado en sector residencial con gran potencial para remodelar',
    ubicacion: 'Mateo Toro y Zambrano, La Reina, RM',
    habitaciones: 3,
    baño: 2,
    costo: 1.200,
    smoke: true,
    pets: true,
    }

    ]

function mostrarPropiedadesV(){
    for(let propiedad of propiedadesVenta){
        contenedorV.innerHTML += 
        ` <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src="${propiedad.src}"
                    class="card-img-top"
                    alt="Imagen de la propiedad"
                />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.baño} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                    ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'} 
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    <i class="fa-solid ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
                    ${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'} 
                    </p>
                </div>
            </div>
            </div>
        </div>`
    }
}

mostrarPropiedadesV();
