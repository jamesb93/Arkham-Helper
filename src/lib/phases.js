export const phases = {
    "Mythos" : {
        steps : [
            {
                title: "Place 1 doom on the current agenda",
                instructions: "Take 1 doom from the token pool and place it on the current agenda"
            },
            {
                title: "Check doom threshold",
                instructions: "Compare the total number of doom in play (on the current agenda and on each other card in play) with the doom threshold of the current agenda. If the value of doom in play equals or exceeds the doom threshold of the current agenda, the agenda deck advances."
            },
            {
                title: "Each investigator draws 1 encounter card",
                instructions: `In player order, each investigator draws the top card of the encounter deck, resolves any revelation abilities on the card, and follows the instructions below based on the card's type. Each time an investigator draws an encounter card, perform the following steps, in order:

1. Draw the card from the encounter deck.

2. Check for the peril keyword on the drawn card. (If the card has the peril keyword, the investigator who drew the card cannot confer with the other players. Those other players cannot play cards, trigger abilities, or commit cards to that investigator’s skill test(s) while the peril encounter is resolving.)

3. Resolve the revelation ability on the drawn card.

4. If the card is an **enemy**, spawn it following any spawn instruction the card bears. If the encountered enemy has no spawn instruction, the enemy spawns engaged with the investigator encountering the card and is placed in that investigator’s threat area. If the card is a **treachery**, place the card in the encounter discard pile unless otherwise instructed by the ability.
                
5. If the drawn card has the **surge** keyword, the investigator must draw another card. Restart this process at step 1.
                `
            }
        ]
    },
    "Investigation" : {
        steps: [
            {
                title: "Next investigator's turn begins.",
                instructions: `
The investigators may take their turns in any order. The investigators choose among themselves who (among the investigators) will take this turn, and making this choice begins that investigator’s turn. The investigator taking his or her turn is known as the “active investigator.”

Once an investigator begins a turn, that investigator must complete the turn before another investigator may take his or her turn. Each investigator takes one turn each round.
                `
            },
            {
                title: "Investigator takes a turn, if able.",
                instructions: `
During his or her turn, an investigator is permitted to take three actions. An action can be used to do one of the following: 
                
- Investigate your location.
                
- Move to a connecting location.
                
- Draw (draw 1 card).
                
- Resource (gain 1 resource).
                
- Play an asset or event card from your hand.
                
- Activate an 󲅹-costed ability on an in-play card you control, an in-play encounter card at your location, a card in your threat area, the current act card, or the current agenda card.
                
- Fight an enemy at your location.
                
- Engage an enemy at your location.
                
- Attempt to evade an enemy engaged with you.
                
The three actions an investigator performs during his or her turn may be any of the above, in any order, and may even be the same action three times in a row.
                
Important: When an investigator is engaged with one or more enemies and takes an action other than to fight, to evade, or to activate a parley or resign ability, each of those enemies makes an attack of opportunity against the investigator, in the order of the investigator’s choosing.

After an investigator takes an action, return to the previous player window. An investigator may end his or her turn early if there are no other actions he or she wishes to perform. If the investigator does not or cannot take an action, proceed to 2.2.2.
                `
            }
        ]
    },
    "Enemy" : {
        steps: [
            {
                title: "Hunter enemies move",
                instructions: "Resolve the hunter keyword for each ready, unengaged enemy that has the hunter keyword (see “Hunter” on page 12)."
            },
            {
                title: "Next investigator resolves engaged enemy attacks.",
                instructions: `
Resolve engaged enemy attacks in player order, with each player resolving all of his or her engaged enemies before advancing to the next player.

Each ready, engaged enemy makes an attack against the investigator to which it is engaged. When an enemy attacks, deal its attack (both its damage and its horror, simultaneously) to the engaged investigator. Upon completion of dealing the attack (and all abilities triggered by the attack), exhaust the enemy. If an investigator is engaged with multiple enemies, resolve their attacks in the order of the attacked investigator’s choosing.
                
After an investigator has resolved the attacks of the enemies he or she is engaged with, return to the previous player window. After the final investigator resolves enemy attacks, proceed to the next player window.
                `
            }
        ]
    },
    "Upkeep" : {
        steps: [
            {
                title: "Reset actions.",
                instructions: "Flip each investigator’s mini card back to its colored side. This indicates that the investigator’s actions have been reset for his or her next turn."
            },
            {
                title: "Ready exhausted cards.",
                instructions: "Simultaneously ready each exhausted card."
            },
            {
                title: "Investigator's draw 1 card and gain 1 resource.",
                instructions: "In player order, each investigator draws 1 card. Once those cards have been drawn, each investigator gains 1 resource."
            },
            {
                title: "Each investigator checks hand size.",
                instructions: "In player order, each investigator with more than 8 cards in hand chooses and discards cards from his or her hand until he or she has 8 cards remaining in hand."
            }
        ]
    }
}