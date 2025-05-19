import { Router } from "express";

const routes = Router();

//rota de teste, hello word

routes.get("/", (req, res) => {
    return res.send("rota de teste")
})

//rota que retorna um json, uma lista nomeada "item"
routes.get("/funcionarios", (req, res) => {
    return res.json({
        items: [
            {
                id: "0",
                nome: "Daniel",
                cargo: "Dev",
                idade: 17,
                custoPorHora: 120.0,
                temLicence: false
            },
            {
                id: "2",
                nome: "Andre",
                cargo: "Dev",
                idade: 39,
                custoPorHora: 500.0,
                temLicence: true
            },
            {
                id: "3",
                nome: "Manaus",
                cargo: "Vadio",
                idade: 20,
                custoPorHora: 90.0,
                temLicence: false
            },
        ]
    })
})
routes.get("/delicia", (req, res) => {
    return res.json({
        results: [
            {
                id: "0",
                nome: "Marea",
                imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fiat_Marea_Sedan_%2844213257002%29.jpg"
              
            },
            {
                id: "2",
                nome: "Chevette",
                imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/06/QR-GB-CHEVROLET-CHEVETTE-04.tif_1.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
             
            },
            {
                id: "3",
                nome: "Omega",
                imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/12/omega-cd-41-1998.jpg?quality=70&strip=all&w=720&crop=1"
            },
        ]
    })
})


 
export default routes;