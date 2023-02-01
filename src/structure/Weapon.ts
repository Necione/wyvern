import { getData } from "../constants";
import { getItem, getItems, Item } from "./Item";
import { ItemBuildMaterial } from "./Material";

export interface Weapon extends Item, ItemBuildMaterial {
  atk: number;
  crit: number;
  critChance: number;
}

export const weapons = getData<Weapon>("content", "weapon.json");

export function isWeapon(item: Item | Weapon): item is Weapon {
  if ("atk" in item) {
    return true;
  }

  return false;
}

export function getWeapon(id: string) {
  return getItem(weapons, id);
}

export function getWeapons(ids: string[]) {
  return getItems(weapons, ids);
}