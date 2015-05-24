// And here is the thing we all waited for :D 

exports.Formats = [
	// Custom Infinite Super Staff Bros Code(only testing them here)
	{
		name: "Infinite Super Staff Bros.",
		section: "Infinite metas",
		column: 2,

		mod: 'tiercouncil',
		team: 'randomSeasonalRegStaffTeam',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			this.add('message', 'GET READY FOR THE SHOWDOWNNNN!!!!!');

			var allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (var i = 0, len = allPokemon.length; i < len; i++) {
				var pokemon = allPokemon[i];
				var last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
			}
		},
		onSwitchIn: function (pokemon) {
			var name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);


			if (name === 'dabicboi') {
				this.add('c', '~dabicboi', '/me spanked the opponent');
			}
			if (name === 'nonstopkevn') {
				this.add('c', '~nonstopkevn', 'Its 4am and i m awake...gdi');
			}
			if (name === 'azureshock') {
				this.add('c', '&Azure Shock', 'what to write here???????????');
			}
			if (name === 'quilavaa') {
				this.add('c', '&quilavaa', 'oh i forgot to hide my symbol');
			}
			if (name === 'yallthirsty') {
				this.add('c', '&YallThirsty', 'what to writeeeeeeee???????????');
			}
			if (name === '1love1life') {
				this.add('c', '@1Love 1Life', 'ahaha finally its done.....am i great or what???');
			}
			if (name === 'franchescoenzo') {
				this.add('c', '@franchescoEnzo', 'Dare to fight me??');
			}
			if (name === 'xvenomiizz') {
				this.add('c', '@XveNoMiiZ', 'today i need to go for a haircut... :(');
			}
			if (name === 'koikazma') {
				this.add('c', '@KoiKazma', 'hey wow nice ... i dont know what to write here qq');
			}
			if (name === 'tremmy') {
				this.add('c', '%Tremmy', 'I can be admin in 2 weeks..yay');
			}
			if (name === 'crystalchompers') {
				this.add('c', '%CrystalChompers', 'MFW MFW write some shit hereeeeee');
			}
			if (name === 'madasthehatter') {
				this.add('c', '%MadAsTheHatter', 'nice move MATH....@_@');
			}
			if (name === 'afinesir') {
				this.add('c', '+A Fine Sir', 'BREAKING NEWS: YOU\'RE ABOUT TO LOSE!');
			}
			if (name === 'BeingChill') {
				this.add('c', '+BeingChill ~', 'blah blah bla blhaaaaaaa');
			}
		},
		// Text said by user when switching out o3o'
		onSwitchOut: function (pokemon) {
			if (!pokemon.hp) return;
			var name = toId(pokemon.name);

			if (name === 'dabicboi') {
				this.add('c', '~dabicboi', 'Ok as usual i m going afk');
			}
			if (name === 'nonstopkevn') {
				this.add('c', '~nonstopkevn', 'I need some sleep, brb');
			}
			if (name === 'azureshock') {
				this.add('c', '&Azure Shock', 'what to write here???????????');
			}
			if (name === 'quilavaa') {
				this.add('c', '&quilavaa', '/me banned nonstopkevn');
			}
			if (name === 'yallthirsty') {
				this.add('c', '&YallThirsty', 'what to writeeeeeeee???????????');
			}
			if (name === '1love1life') {
				this.add('c', '@1Love 1Life', 'brb, some bit of codes remamining...YAY');
			}
			if (name === 'franchescoenzo') {
				this.add('c', '@franchescoEnzo', 'BRB going to see my girl');
			}
			if (name === 'xvenomiizz') {
				this.add('c', '@XveNoMiiZ', 'going for haircut...bye!!!');
			}
			if (name === 'koikazma') {
				this.add('c', '@KoiKazma', 'brb, going to get some energy');
			}
			if (name === 'tremmy') {
				this.add('c', '%Tremmy', 'wait..imma return in a bit!!');
			}
			if (name === 'crystalchompers') {
				this.add('c', '%CrystalChompers', 'MFW MFW write some shit hereeeeee');
			}
			if (name === 'madasthehatter') {
				this.add('c', '%MadAsTheHatter', 'i dont know what to write here...LMAO');
			}
			if (name === 'afinesir') {
				this.add('c', '+A Fine Sir', 'brb , i m a fine sir......o3o');
			}
			if (name === 'BeingChill') {
				this.add('c', '+BeingChill ~', 'just returning in a bit...');
			}
		},
		onModifyPokemon: function (pokemon) {
			var name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			var moves = pokemon.moveset;
			if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
				for (var i = 0; i < 3; i++) {
					if (!moves[i].disabled) {
						pokemon.disableMove(moves[i].id, false);
						moves[i].disabled = true;
					}
				}
			}
		},
		onFaint: function (pokemon) {
			var name = toId(pokemon.name);

			// custom messages when user FAINTS :'('

				if (name === 'dabicboi') {
				this.add('c', '~dabicboi', 'Oh fuck i just lost.....');
			}
			if (name === 'nonstopkevn') {
				this.add('c', '~nonstopkevn', 'urghh, i underestimated your POWERRRRR');
			}
			if (name === 'azureshock') {
				this.add('c', '&Azure Shock', 'FUCK YOU');
			}
			if (name === 'quilavaa') {
				this.add('c', '&quilavaa', 'NOOO i m going down.....');
			}
			if (name === 'yallthirsty') {
				this.add('c', '&YallThirsty', 'what to writeeeeeeee???????????');
			}
			if (name === '1love1life') {
				this.add('c', '@1Love 1Life', 'brb, some bit of codes remamining...YAY');
			}
			if (name === 'franchescoenzo') {
				this.add('c', '@franchescoEnzo', 'BRB going to see my girl');
			}
			if (name === 'xvenomiizz') {
				this.add('c', '@XveNoMiiZ', 'going for haircut...bye!!!');
			}
			if (name === 'koikazma') {
				this.add('c', '@KoiKazma', 'brb, going to get some energy');
			}
			if (name === 'tremmy') {
				this.add('c', '%Tremmy', 'wait..imma return in a bit!!');
			}
			if (name === 'crystalchompers') {
				this.add('c', '%CrystalChompers', 'MFW MFW write some shit hereeeeee');
			}
			if (name === 'madasthehatter') {
				this.add('c', '%MadAsTheHatter', 'i dont know what to write here...LMAO');
			}
			if (name === 'afinesir') {
				this.add('c', '+A Fine Sir', 'brb , i m a fine sir......o3o');
			}
			if (name === 'BeingChill') {
				this.add('c', '+BeingChill ~', 'just returning in a bit...');
			}
		},
			
		onModifyMove: function (move, pokemon) {
			// This is to make signature moves work when transformed.
			if (move.id === 'transform') {
				move.onHit = function (target, pokemon) {
					if (!pokemon.transformInto(target, pokemon)) return false;
					pokemon.originalName = pokemon.name;
					pokemon.name = target.name;
				};
			}

			var name = toId(pokemon.illusion && move.sourceEffect === 'allyswitch' ? pokemon.illusion.name : pokemon.name);
			move.effectType = 'Move';

			if (move.id === 'swordsdance' && name === 'dabicboi') {
				move.name = 'MultiThreading';
				move.boosts = {atk: 2, spd: 1, accuracy: 1};
				move.pp = 4;
				move.type = 'fire';
			}
			if (move.id === 'raindance' && name === 'nonstopkevn') {
				move.name = 'Storm Shock';
				move.self = {boosts: {spe: 2, spa: 1}};
				move.heal = [7, 20]; // 35%
				move.pp = 5;
			}
			if (move.id === 'teeterdance' && name === 'azureshock') {
				move.name = 'Rhythm Dance';
				move.self = {boosts: {spe: 1, spa: 1}};
				move.weather = 'RainDance';
				move.pp = 8;
			}
			if (move.id === 'headbutt' && name === 'quilavaa') {
				move.name = 'Getting Trolled';
				move.secondaries = [
					{chance: 30, status: 'par'},
					{chance: 30, volatileStatus: 'flinch'},
					{chance: 30, volatileStatus: 'confusion'}
				];
			}
			if (move.id === 'painsplit' && name === 'yallthirsty') {
				move.name = 'Sharing his non-existant Life!';
				move.onHit = function (target, pokemon) {
					var averagehp = Math.floor((target.hp + pokemon.hp) / 2) || 1;
					target.sethp(averagehp * 0.8);
					pokemon.sethp(averagehp * 1.2);
					this.add('-sethp', target, target.getHealth, pokemon, pokemon.getHealth, '[from] move: Sharing his non-existant life!');
				};
			}

			if (move.id === 'irondefense' && name === '1love1life') {
				move.name = 'Blast Furnace';
				move.pp = 4;
				move.boosts = {def: 1, spd: 1};
				move.heal = [7, 20]; //35%
				move.pp = 2;
				move.onHit = function (target, pokemon) {
					pokemon.cureStatus();
					for (var i in pokemon.volatiles) delete pokemon.volatiles[i];
				};
			}
			if (move.id === 'defensecurl' && name === 'franchescoenzo') {
				move.name = 'Ancient Orb';
				move.boosts['def'] = 1;
				move.boosts['spd'] = 1;
				move.heal = [3, 10];
				move.pp = 5;
			}
			if (move.id === 'sunnyday' && name === 'koikazma') {
				move.name = 'Nature\'s Fury';
				move.self = {boosts: {spe: 1, atk: 1}};
				move.secondary = {chance: 100, status: 'brn'};
			}
			if (move.id === 'attract' && name === 'xvenomiizz') {
				move.name = 'Charm Up';
				move.self = {boosts: {atk: 2}};
				move.boosts = {accuracy: -1};
				move.pp = 4;
			}
			if (move.id === 'hypervoice' && name === 'tremmy') {
				move.name = 'Sonarflared M8';
				move.basePower = 100;
				move.secondary = {chance: 50, status: 'brn'};
			}
			if (move.id === 'waterfall' && name === 'crystalchompers') {
				move.name = 'Waterfall++';
				move.flags['bite'] = 1;
				move.pp = 10;
				move.basePower = 90;
			}

			if (move.id === 'dragondance' && name === 'madasthehatter') {
				move.name = 'Ancient Ritual';
				move.boosts['atk'] = 1;
				move.boosts['spe'] = 2;
				move.pp = 3;
			}
			if (move.id === 'slackoff' && name === 'afinesir') {
				move.name = 'Play Video Games';
				move.boosts = {def: 1, spd: 1, spa: 1, atk: -1, spe: -1};
				move.onHit = function (target, pokemon) {
					var videogames = ['Civilization', 'GTA', 'Pokemon BW2', 'Pokemon XY', 'Pokemon Emerald', 'PKMN HAXX', 'Madden'];
					this.add('-message', '+UmichBrendan just played ' + videogames[this.random(7)]);
					pokemon.cureStatus();
				};
				move.pp = 10;
			}
			if (move.id === 'closecombat' && name === 'beingchill') {
				move.name = 'Death Power';
				move.pp = 4;
				move.self.boosts = {atk: 3, def: -1, spd: -1, evasion: -1};
			}
			
		}
	},
	{
		name: "Startermons",
		section: "Tier Council",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Seperior + Contrary', 'Blaziken + Speed Boost', 'Greninja + Protean', 'Umbreon'],

		validateSet: function (set) {
			const allowedPokes = [
				'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise',
				'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Chikorita', 'Bayleef', 'Meganium',
				'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Treecko', 'Grovyle', 'Sceptile',
				'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Turtwig', 'Grotle', 'Torterra',
				'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Snivy', 'Servine', 'Serperior',
				'Fennekin', 'Braxien', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Chespin', 'Quilladin', 'Chesnaught',
				'Pikachu', 'Raichu', 'Eevee', 'Flareon', 'Jolteon', 'Vaporeon', 'Umbreon', 'Espeon'
			];

			if (allowedPokes.indexOf(set.species) === -1) return [set.species + " is not a valid starter pokemon. (note: Megas are not allowed)."];
		},
		validateTeam: function (team) {
			if (team.length < 3) return ["You must have atleast three pokemon."];
		},
		onBegin: function () {
			this.add('rule', 'Mega Evolution Ban Mod: You cannot mega evolve your pokemon');
			for (var i = 0; i < this.sides[0].pokemon.length; i++) this.sides[0].pokemon[i].canMegaEvo = false;
			for (var i = 0; i < this.sides[1].pokemon.length; i++) this.sides[1].pokemon[i].canMegaEvo = false;

			this.debug('Cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	}
];

	

