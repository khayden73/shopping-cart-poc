import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavListItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  route?: string;
}

function NavListItem({ label, onClick, route = "/" }: NavListItemProps) {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(route);
          onClick?.();
        }}
      >
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}

export { NavListItem };
