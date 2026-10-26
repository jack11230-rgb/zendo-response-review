// Single source of truth for the gallery + prototype.
// To add a screen: drop the PNG in /screens and add an entry here.
// "story" = position in the "Try the prototype" walkthrough (omit to show in gallery only).
window.ZENDO_SCREENS = [
  {file:"01-home.png",      title:"Home",                     caption:"On-duty status, 1.5 mi radius, an active call at 3/3 responders, nearby Safe Zone and the remote clinical team on call.", story:0},
  {file:"02-alert.png",     title:"Incoming crisis alert",    caption:"A difficult-experience alert near the boardwalk. Up to 3 can accept: Responders 2/3 shown with lead/support roles and ETAs.", story:1},
  {file:"03-encounter.png", title:"Live encounter",           caption:"Responder team strip (max 3), team chat with the overseeing LCSW, a Help tab, and backup that fills open spots, then escalates at 3/3.", story:2},
  {file:"11-resources.png", title:"On-call Resources (Quick help)", caption:"Quick help mid-call: search, Ask on-call LCSW / MD, a red-flag \"call 911 if\" checklist, Four Principles cards, de-escalation guides, crisis scripts, substance refs and Zendo SIT refreshers.", story:3},
  {file:"04-emergency.png", title:"Emergency & hospitals",    caption:"One tap to 911 or 988, escalation criteria, and the nearest psych ERs with chapter liaisons.", story:4},
  {file:"05-safezone.png",  title:"Safe Zones",               caption:"Nearest volunteer-hosted calm room: open rooms, amenities, host, and guest check-in.", story:5},
  {file:"06-closeout.png",  title:"Close-out & liaison handoff", caption:"Record where the guest went, all 3 responders sign off, and hospital admissions go to the chapter's hospital liaison.", story:6},
  {file:"07-events.png",    title:"Events signup",            caption:"Sign up for sitter and shift-lead slots at parties, festivals, community events and trainings.", story:7},
  {file:"08-chapter.png",   title:"Chapter roster",           caption:"Brooklyn - Coney Island chapter: leadership, clinical oversight, liaison, and the on-duty roster with lead/support roles.", story:8},
  {file:"09-board.png",     title:"Resource Board",           caption:"Volunteers ask the network for detox beds, housing, therapy, language and legal resources.", story:9},
  {file:"10-profile.png",   title:"Profile",                  caption:"Tier, certifications (SIT, Shift Lead, CPR/Naloxone), hours, and weekly availability.", story:10}
];
