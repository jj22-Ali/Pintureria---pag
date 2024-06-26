const miAplicacion = Vue.createApp({
    data(){
        return{
            resultado: null
        };
    },
    methods:{
        calcularCantidad(){
            const ancho = parseFloat(this.$refs.ancho.value)
            const largo = parseFloat(this.$refs.largo.value)
            const altura = parseFloat(this.$refs.altura.value)

            if(isNaN(ancho) || isNaN(largo) || isNaN(altura)){
                alert("porfavor, ingrese numeros validos");
                return
            }
            
            this.resultado = (ancho*altura*largo)/6;
    
        },
        borrarCampos(){
            this.$refs.ancho.value = "";
            this.$refs.largo.value = "";
            this.$refs.altura.value = "";
            this.resultado = null; 
        }
    }
}).mount("#app");