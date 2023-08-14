import { model, Schema } from "mongoose";

interface ILocation {
    Longitude: number, 
    Latitude: number,
    Country: string,
    City: string
}

interface IPlaces {
    Name: string,
    Description: string,
    Image: string,
    Rate: number,
    Location: ILocation
}

const LocationSchema = new Schema<ILocation>({
    Longitude: {type: Number, required: true},
    Latitude: {type: Number, required: true},
    Country: {type: String, required: true},
    City: {type: String, required: true},
})

const PlacesSchema =  new Schema<IPlaces>({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Image: {type: String, required: true},
    Rate: {type: Number, required: true},
    Location: {type: LocationSchema, required: true}
})

const Place = model<IPlaces>('Places', PlacesSchema);

export {
    Place
}