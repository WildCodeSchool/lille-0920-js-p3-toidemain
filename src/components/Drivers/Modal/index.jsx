import React from "react";
import { ModalStyle } from "./style";

export default function Modal({ open, children }) {
	if (!open) return null;

	return <ModalStyle>{children}</ModalStyle>;
}
