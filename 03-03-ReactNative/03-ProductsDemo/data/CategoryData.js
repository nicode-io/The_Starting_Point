import Category from "../models/Category";
import Colors from "../constants/Colors";

export const CATEGORIES = [
    new Category('cat1', 'System', Colors.system),
    new Category('cat2', 'Touchscreens', Colors.touchscreen),
    new Category('cat3', 'Push-buttons', Colors.pushButtons),
    new Category('cat4', 'Features', Colors.features),
    new Category('cat5', 'Sensors', Colors.sensors),
    new Category('cat6', 'Accessories', Colors.accessories),
];
