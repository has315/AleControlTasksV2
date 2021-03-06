/*
	Napraviti mini-library za drag & drop (D&D) koji u pozadini koristi context API.
	Implementacija treba da koristi HTML5 D&D API i da se ne oslanja na postojece D&D npm pakete.
	Sva logika (onDragStart, onDragEnd, onDragOver, itd.) treba da se nalazi u DragContext, DragArea i DragItem
	komponentama tako da nije izlozena korisniku library-a. 
	
	U ovom slucaju event handler onDragStart trebao bi da bude na DragItem komponenti, dok bi
	onDrop i onDragOver trebali da budu na DragArea componenti. Te dvije komponente izmedju sebe
	trebaju da komuniciraju putem context API.
	
	Metode za komunikaciju mogu da se nalaze u DragContext ili DragArea komponenti.
	Ukoliko je sva logika u DragArea, DragContext nije ni potreban tako da ga mozes izbaciti.
	
	Ispod je primjer komponente koja bi korista library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju liste korisnika koja se moze sortirati, zadatak se smatra
	uspjesno zavrsenim.
	
	Koristiti React i TypeScript i parcel.
	Pozeljno je napisati testove za library.

	Puno srece ;-)
*/
import React, { useState } from 'react';
import { DragContext } from '../components/DragDrop/DragContext';
import { DragArea } from '../components/DragDrop/DragArea'
import { DragItem } from '../components/DragDrop/DragItem'
import users from '../data/users';

export const DraggableUserList = () => {
	// Example
	const [exampleUsers, setExampleUsers] = useState(users);

	return (
		<DragContext note="Ovo je opcionalan wrapper">
			<ul>
				<DragArea items={exampleUsers} onChange={setExampleUsers}>
					{exampleUsers.map((user, i) => (
						<DragItem key={i} note="ovde moze da ide key, index, itd.">
							<li>
								<span>{user.name}</span>
								<span>{user.email}</span>
							</li>
						</DragItem>
					))}
				</DragArea>
			</ul>
		</DragContext>
	);
};

