import { Place } from "../Data/Models/Places";
import { Response, Request } from "express";


const GetPlaces = async (req: Request, res: Response) => {
    try{
        const Docs = await Place.find();
        res.send({
            Message: "SUCCESS",
            Data: Docs
        })
    } catch(err) {
        res.status(500).send({
            Message: 'ERROR WHILE GETTING PLACES',
            Error: err
        });
        return;
    }
}

const GetPlacesById = async (req: Request, res: Response) => {
    const {Places} = req.body

    try{
        const Docs = await Place.find({_id: {$in: Places}})
        res.send({
            Message: "SUCCESS",
            Data: Docs
        })
    } catch(err) {
        res.status(500).send({
            Message: 'ERROR WHILE GETTING PLACES',
            Error: err
        });
        return;
    }
}

const AddPlace = async (req: Request, res: Response) => {
    const {Name, Description, Image, Rate, Longitude, Latitude, Country, City} = req.body;
    try {
        const Doc = new Place({
            Name,
            Description,
            Image,
            Rate,
            Location: {
                Longitude,
                Latitude,
                Country,
                City
            }
        })

        await Doc.save();

        res.send({
            Message: "CREATED SUCCESFULLY",
            Data: Doc,
        })
    } catch(err) {
        console.log(err);
        res.status(500).send({
            Message: 'ERROR WHILE ADDING NEW PLACE',
            Error: err
        });
        return;
    }
    

    
}



export {
    GetPlaces,
    GetPlacesById,
    AddPlace
}