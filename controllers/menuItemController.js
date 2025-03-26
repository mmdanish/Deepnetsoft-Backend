import MenuItem from "../models/MenuItem.js";

// Creating new menu
export const createMenuItem = async (req, res) => {
  try {
    const { menuId, name, description, price } = req.body;
    const menuItem = new MenuItem({ menuId, name, description, price });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu item" });
  }
};


export const getMenuItems = async (req, res) => {
    try {
      const items = await MenuItem.find({ menuId: req.params.menuId });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  };