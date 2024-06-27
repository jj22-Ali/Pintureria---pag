const componente = {

    template: `
    <form>
        <div class="mb-3">
            <label for="apellidoYnombre" class="form-label">1. Apellido y Nombre:</label>
            <input type="text" class="form-control" id="apellidoYnombre" v-model="apellidoYnombre" placeholder="Ej: Juan Perez">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">2. Email:</label>
            <input type="text" class="form-control" id="email" v-model="email" placeholder="Ej: xxxx@gmail.com">
        </div>
        <div class="mb-3">
            <label class="form-label">3. Pais:</label>
            <div>
                <div class = "form-check form-check-inline">
                    <input class = "form-check-input" type="radio" id="argentina" value="Argentina" v-model="pais">
                    <label class = "form-check-label" for="argentina">Argentina</label>
                </div>
                <div class = "form-check form-check-inline">
                    <input class = "form-check-input" type="radio" id="uruguay" value="Uruguay" v-model="pais">
                    <label class = "form-check-label" for="uruguay">Uruguay</label>
                </div>
                <div class = "form-check form-check-inline">
                    <input class = "form-check-input" type="radio" id="otro" value="Otro" v-model="pais">
                    <label class = "form-check-label>" for="otro">Otro</label>
                    <input v-if="pais === 'Otro'" type="text" class="form-control ms-2" v-model="otroPais" placeholder="otro">
                </div>
        </div>
        <div class="mb-3">
            <label for="provincia" class="form-label">4. Provincia:</label>
            <select class="form-control" id="provincia" v-model="provincia">
                <option v-for="prov in provincias" :key="prov">{{ prov }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="telefono" class="form-label">5. Telefono</label>
            <input type="tel" class="form-control" id="telefono" v-model="telefono" placeholder="Ej: +54 9 11 1234 5678">
        </div>        
        <div class="mb-3">
            <label for="ciudad" class="form-label">6. Ciudad</label>
            <input type="text" class="form-control" id="ciudad" v-model="ciudad" placeholder="Ej: Buenos Aires">
        </div>
        <div class="mb-3">
            <label for="tipoConsulta" class="form-label">7. Tipo de consulta:</label>
            <select class="form-control" id="tipoConsulta" v-model="tipoConsulta">
                <option v-for="tipo in tiposDeConsulta" :key="tipo">{{ tipo }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="motivoConsulta" class="form-label">8. Motivo de Consulta:</label>
            <textarea class="form-control" id="motivoConsulta" v-model="motivoConsulta" rows="3"></textarea>
        </div> 
        <button type="button" class="btn btn-primary" v-on:click="enviarFormulario">Enviar</button>
    </form>
    `,
    data(){
        return{
            apellidoYnombre: '',
            email: '',
            pais: '',
            otroPais: '',
            provincia: '',
            telefono: '',
            ciudad: '',
            tipoConsulta: '',
            motivoConsulta: '',
            provincias: [
                "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos",
                "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro",
                "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
                "Tierra del Fuego", "Tucumán"
            ],
            tiposDeConsulta: ["Comercializar nuestros productos", "Consulta técnica sobre nuestros productos", "Ser proveedor", "Alianzas institucionales", "Trabajar con nosotros"]
        }
    },
    methods:{
        enviarFormulario() {
            console.log("Formulario enviado con los siguientes datos:");
            console.log(`Apellido y Nombre: ${this.apellidoYnombre}`);
            console.log(`Email: ${this.email}`);
            console.log(`Pais: ${this.pais === 'Otro' ? this.paisOtro : this.pais}`);
            console.log(`Provincia: ${this.provincia}`);
            console.log(`Teléfono: ${this.telefono}`);
            console.log(`Ciudad: ${this.ciudad}`);
            console.log(`Tipo de Consulta: ${this.tipoConsulta}`);
            console.log(`Motivo de Consulta: ${this.motivoConsulta}`);

            this.apellidoYnombre = '';
            this.email = '';
            this.pais = '';
            this.otroPais = '';
            this.provincia = '';
            this.telefono = '';
            this.ciudad = '';
            this.tipoConsulta = '';
            this.motivoConsulta = '';

        }

    }
}

const miAplicacion = Vue.createApp({
    components: {
        "componente" : componente
    }
}).mount("#app")