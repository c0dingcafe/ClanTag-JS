UI.AddLabel(" ----------------------------------------")
UI.AddLabel(" |                Sleepy Tag                |")
UI.AddLabel(" ----------------------------------------")
UI.AddDropdown( "Custom ClanTag", [ "Disabled", "Enable"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 53)
            {
                case 1: { Local.SetClanTag("  "); break; }
                case 2: { Local.SetClanTag(" S "); break; }
                case 3: { Local.SetClanTag(" Sl "); break; }
                case 4: { Local.SetClanTag(" Sle "); break; }
                case 5: { Local.SetClanTag(" Slee "); break; }
                case 6: { Local.SetClanTag(" Sleep "); break; }
                case 7: { Local.SetClanTag(" Sleepy "); break; }
                case 8: { Local.SetClanTag(" Sleepy. "); break; }
                case 9: { Local.SetClanTag(" Sleepy.x "); break; }
                case 10: { Local.SetClanTag(" Sleepy.xy "); break; }
                case 11: { Local.SetClanTag(" Sleepy.xyz "); break; }
                case 12: { Local.SetClanTag(" Sleepy.xy "); break; }
                case 13: { Local.SetClanTag(" Sleepy.x "); break; }
                case 14: { Local.SetClanTag(" Sleepy. "); break; }
                case 15: { Local.SetClanTag(" Sleepy "); break; }
                case 16: { Local.SetClanTag(" Sleep "); break; }
                case 17: { Local.SetClanTag(" Slee "); break; }
                case 18: { Local.SetClanTag(" Sle "); break; }
                case 19: { Local.SetClanTag(" Sl "); break; }
                case 20: { Local.SetClanTag(" S "); break; }
                case 21: { Local.SetClanTag("  "); break; }

            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");
UI.AddLabel("----------------------------------------")