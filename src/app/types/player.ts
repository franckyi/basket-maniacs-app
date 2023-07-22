import { Team } from "./team";

export interface Player {
    "id": number;
    "first_name": string;
    "height_feet": null;
    "height_inches": null;
    "last_name": string;
    "position": string;
    "team": Team;
    "weight_pounds": number;
}