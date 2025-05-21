import { Router, Request, Response } from "express";
import userController from "./controllers/user";
import listController from "./controllers/list";


const routes = Router();

//rota de teste, hello word

routes.get("/", (req : Request, res: Response) : any => {
    return res.send("rota de teste")
})

//rota que retorna um json, uma lista nomeada "item"
routes.get("/funcionarios", (req : Request, res: Response) : any => {
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
routes.get("/delicia", (req : Request, res: Response) : any => {
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

routes.post("/users",  (req : Request, res: Response) : any => userController.create(req, res))
routes.get("/users", (req : Request, res: Response) : any => userController.read(req, res))
routes.put("/users/:id", (req : Request, res: Response) : any => userController.update(req, res))
routes.delete("/users/:id", ((req : Request, res: Response) : any => userController.delete(req, res)))
routes.post("/login" , ((req : Request, res: Response) : any => userController.login(req, res)))

routes.post("/list",  (req : Request, res: Response) : any => listController.create(req, res))
routes.get("/list", (req : Request, res: Response) : any => listController.read(req, res))
routes.put("/list/:id", (req : Request, res: Response) : any => listController.update(req, res))
routes.delete("/list/:id", ((req : Request, res: Response) : any => listController.delete(req, res)))


 
export default routes;