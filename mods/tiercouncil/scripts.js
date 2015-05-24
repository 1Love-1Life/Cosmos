// Custom infinite server script scripts.

exports.BattleScripts = {
	randomSeasonalRegStaffTeam: function (side) {
		var team = [];
		var variant = this.random(2);

		var sets = {
			// Admins.
			'~Da Bic Boi': {
				species: 'Blaziken', ability: (variant === 1) ? 'Speed Boost' : 'Blaze', item: (variant === 1) ? 'Blazikenite' : 'Life Orb', gender: 'M',
				moves: [['Protect', 'Knock Off'][this.random(2)], ['Low Kick', 'High Jump Kick'][this.random(2)], 'Flareblitz', 'Stone Edge'],
				baseSignatureMove: 'Swords Dance', signatureMove: 'Multi Threading',
				evs: {hp: 4, atk: 252, spe: 252}, nature: 'Adamant'
			},
			'~nonstopkevn': {
				species: 'Magnezone', ability: 'Sturdy', item: 'Air Balloon', gender: 'M',
				moves: ['Flash Cannon', 'Thunder', 'Thunder Wave', 'Tri Attack'],
				baseSignatureMove: 'raindance', signatureMove: 'Storm Shock',
				evs: {spa: 252, def: 252, hp: 4}, nature: 'Modest'
			},

			// Leaders:
			'&yallthirsty': {
				species: 'Ludicolo', ability: 'Swift Swim', item: 'Leftovers', gender: 'M',
				moves: [['Hydro Pump', 'Scald'][this.random(2)], 'Ice Beam', 'Giga Drain'],
				baseSignatureMove: 'Teeter Dance', signatureMove: 'Rhythm Dance',
				evs: {spa: 252, spe: 252, hp: 4}, nature: 'Modest'
			},
			'&quilavaa': {
				species: 'Dunsparce', ability: 'Serene Grace', item: 'Kings Rock', gender: 'M',
				moves: ['Roost', 'Coil', 'Rock Slide', ['Glare', 'Body Slam'][this.random(2)]],
				baseSignatureMove: 'Headbutt', signatureMove: 'Getting Trolled',
				evs: {hp: 252, atk: 252, def: 4}, nature: 'Naughty'
			},
			'&Azure Shock': {
				species: 'Chandelure', ability: 'Infiltrator', item: 'Choice Scarf', gender: 'M',
				moves: ['Flamethrower', 'Shadow Ball', 'Trick'],
				baseSignatureMove: 'Pain Split', signatureMove: 'Sharing his Non-existant Life',
				evs: {spa: 252, spd: 252, def: 4}, nature: 'Timid'
			},
			// Moderators:
			'@1love 1life': {
				species: 'Bronzong', ability: 'Levitate', item: 'Leftovers', gender: (variant === 1) ? 'M' : 'F',
				moves: ['Gyro Ball', 'Confuse Ray', 'Toxic', 'Earthquake'],
				baseSignatureMove: 'Iron Defense', signatureMove: 'Blast Furnace',
				evs: {hp: 252, def: 168, spd: 88}, nature: 'Sassy'
			},
			'@FranchescoEnzo': {
				species: 'Charizard', ability: 'Solar Power', item: 'Charizardite X', gender: 'M',
				moves: ['Dragon Dance', 'Dragon Claw', 'Fire Punch', 'Thunder Punch'],
				baseSignatureMove: 'Sunny Day', signatureMove: 'Nature\'s Fury',
				evs: {spa: 252, spe: 252, hp: 4}, nature: 'Jolly'
			},
			'@koiKazma': {
				species: 'Dragonite', ability: 'Multiscale', item: 'Weakness Policy', gender: 'M',
				moves: ['Dragon Dance', 'Fire Punch', 'Dragon Claw', 'Waterfall'],
				baseSignatureMove: 'Defense Curl', signatureMove: 'Ancient Orb',
				evs: {att: 252, spe: 252, hp: 4}, nature: 'Adamant'
			},
			'@XveNomIiZ': {
				species: 'Lopunny', ability: 'Limber', item: 'Lopunnite', gender: (variant === 1) ? 'M' : 'F',
				moves: ['Fake out', 'Return', 'High Jump Kick'],
				baseSignatureMove: 'attract', signatureMove: 'Charm Up',
				evs: {atk: 252, spe: 252, def: 4}, nature: 'Jolly'
			},
			// Drivers:
			'%MadAsTheHatter': {
				species: 'Exploud', ability: 'Scrappy', item: 'Leftovers', gender: 'M',
				moves: ['Nasty Plot', 'Fire Blast', 'Thunder', 'Uproar'],
				baseSignatureMove: 'Hyper Voice', signatureMove: 'Sonarflared M8',
				evs: {spa: 252, spe: 252, hp: 4}, nature: 'Modest'
			},
			'%CrystalChompers': {
				species: 'Floatzel', ability: 'Strong Jaw', item: 'Life Orb', gender: 'M',
				moves: ['Crunch', 'Ice Fang', 'Aqua Jet'],
				baseSignatureMove: 'Waterfall', signatureMove: 'Waterfall++',
				evs: {atk: 252, spe: 252, hp: 4}, nature: 'Jolly'
			},
			// Lobby Room Driver:
			'%Tremmy': {
				species: 'Regirock', ability: 'Wonder Guard', item: 'Leftovers',
				moves: [['Stone Edge', 'Earthquake'][this.random(2)], 'Explosion', 'Iron Head'],
				baseSignatureMove: 'Dragon Dance', signatureMove: 'Ancient Ritual',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Adamant'
			},
			// Voices:
			'+A Fine Sir': {
				species: 'Slaking', ability: 'Guts', item: 'Flame Orb', gender: 'M',
				moves: ['Facade', 'Brick Break', 'ThunderPunch'],
				baseSignatureMove: 'Slack Off', signatureMove: 'Play Video Games',
				evs: {spd: 252, hp: 100, atk: 100, def: 56}, nature: 'Careful'
			},
			'+BeingChill ~': {
				species: 'Medicham', ability: 'Pure Power', item: 'Medichamite', gender: 'M',
				moves: [['Fake Out', 'Zen Headbutt'][this.random(2)], 'Bullet Punch', 'High Jump Kick'],
				baseSignatureMove: 'Close Combat', signatureMove: 'Death Power',
				evs: {atk: 252, spe: 252, hp: 4}, nature: 'Jolly'
			},
			
		};
		// convert moves to ids.
		for (var k in sets) {
			sets[k].moves = sets[k].moves.map(toId);
			sets[k].baseSignatureMove = toId(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		var pool = Object.keys(sets).randomize();
		var ranks = {'~':'admins', '&':'leaders', '@':'mods', '%':'drivers', '+':'voices'};
		var levels = {'~':99, '&':97, '@':96, '%':95, '+':93};
		for (var i = 0; i < 6; i++) {
			var rank = pool[i].charAt(0);
			var set = sets[pool[i]];
			set.level = levels[rank];
			set.name = pool[i];
			set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = set.moves.sample(3).concat(set.baseSignatureMove);
			team.push(set);
		}

		return team;
	}
};
