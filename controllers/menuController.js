import Menu from "../models/Menu.js";

// Creating new menu
export const createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = new Menu({ name, description });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu" });
  }
};

// Get all menus
export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
};
