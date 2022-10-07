import { colorcolor } from './colorcolor';

describe('colorcolor', () => {
	it('reads floats in HSB/HSL/HSLA/HSV', () => {
		expect(colorcolor('hsb(150,13.3%,99.6%)')).toEqual('rgba(220,254,237,1)');
		expect(colorcolor('hsl(208,100%,97.9%)')).toEqual('rgba(244,250,255,1)');
		expect(colorcolor('hsl(208,100%,97%)')).toEqual('rgba(240,248,255,1)');
		expect(colorcolor('hsla(208,100%,97.1%, 0.6)')).toEqual('rgba(240,248,255,0.6)');
	});

	it('calculates opacity', () => {
		expect(colorcolor('#dfe', 'rgba', true)).toEqual('rgba(0,255,128,0.1333)');
		expect(colorcolor('#dfe', 'rgba', false)).toEqual('rgba(221,255,238,1)');
	});

	describe('with named color "AliceBlue"', () => {
		it('hex should return #f0f8ff', () => {
			expect(colorcolor('AliceBlue', 'hex')).toEqual('#f0f8ff');
		});

		it('hexa should return #f0f8ffff', () => {
			expect(colorcolor('AliceBlue', 'hexa')).toEqual('#f0f8ffff');
		});

		it('hsb should return hsb(208,5.9%,99.6%)', () => {
			expect(colorcolor('AliceBlue', 'hsb')).toEqual('hsb(208,5.9%,99.6%)');
		});

		it('hsl should return hsl(208,100%,97.1%)', () => {
			expect(colorcolor('AliceBlue', 'hsl')).toEqual('hsl(208,100%,97.1%)');
		});

		it('hsla should return hsl(208,100%,97.1%,1)', () => {
			expect(colorcolor('AliceBlue', 'hsla')).toEqual('hsla(208,100%,97.1%,1)');
		});

		it('hsv should return hsv(208,5.9%,99.6%)', () => {
			expect(colorcolor('AliceBlue', 'hsv')).toEqual('hsv(208,5.9%,99.6%)');
		});

		it('rgb should return rgb(240,248,255)', () => {
			expect(colorcolor('AliceBlue', 'rgb')).toEqual('rgb(240,248,255)');
		});

		it('rgba should return rgba(240,248,255,1)', () => {
			expect(colorcolor('AliceBlue', 'rgba')).toEqual('rgba(240,248,255,1)');
		});
	});

	describe('with #dfea', () => {
		it('hex should return #ddffee', () => {
			expect(colorcolor('#dfea', 'hex')).toEqual('#ddffee');
		});

		it('hexa should return #ddffeeaa', () => {
			expect(colorcolor('#dfea', 'hexa')).toEqual('#ddffeeaa');
		});

		it('hsb should return hsb(150,13.3%,99.6%)', () => {
			expect(colorcolor('#dfea', 'hsb')).toEqual('hsb(150,13.3%,99.6%)');
		});

		it('hsl should return hsl(150,100%,93.3%)', () => {
			expect(colorcolor('#dfea', 'hsl')).toEqual('hsl(150,100%,93.3%)');
		});

		it('hsla should return hsla(150,100%,93.3%,0.6667)', () => {
			expect(colorcolor('#dfea', 'hsla')).toEqual('hsla(150,100%,93.3%,0.6667)');
		});

		it('hsv should return hsv(150,13.3%,99.6%)', () => {
			expect(colorcolor('#dfea', 'hsv')).toEqual('hsv(150,13.3%,99.6%)');
		});

		it('rgb should return rgb(221,255,238)', () => {
			expect(colorcolor('#dfea', 'rgb')).toEqual('rgb(221,255,238)');
		});

		it('rgba should return rgba(221,255,238,0.6667)', () => {
			expect(colorcolor('#dfea', 'rgba')).toEqual('rgba(221,255,238,0.6667)');
		});
	});

	describe('convert back to hex (HS[l|v|b] lacks precision)', () => {
		it('#ddffee should return #ddffee', () => {
			expect(colorcolor('#ddffee', 'hex')).toEqual('#ddffee');
		});

		it('#ddffeeaa should return #ddffee', () => {
			expect(colorcolor('#ddffeeaa', 'hex')).toEqual('#ddffee');
		});

		it('hsb(150,13%,100%) should return #deffee', () => {
			expect(colorcolor('hsb(150,13%,100%)', 'hex')).toEqual('#deffee');
		});

		it('hsl(150,100%,93%) should return #dbffed', () => {
			expect(colorcolor('hsl(150,100%,93%)', 'hex')).toEqual('#dbffed');
		});

		it('hsla(150,100%,93%,0.6667) should return #dbffed', () => {
			expect(colorcolor('hsla(150,100%,93%,0.6667)', 'hex')).toEqual('#dbffed');
		});

		it('hsv(150,13%,100%) should return #deffee', () => {
			expect(colorcolor('hsv(150,13%,100%)', 'hex')).toEqual('#deffee');
		});

		it('rgb(221,255,238) should return #ddffee', () => {
			expect(colorcolor('rgb(221,255,238)', 'hex')).toEqual('#ddffee');
		});

		it('rgba(221,255,238,0.6667) should return #ddffee', () => {
			expect(colorcolor('rgba(221,255,238,0.6667)', 'hex')).toEqual('#ddffee');
		});
	});

	describe('convert back to hexa (HS[l|v|b] lacks precision)', () => {
		it('#ddffee should return #ddffeeff', () => {
			expect(colorcolor('#ddffee', 'hexa')).toEqual('#ddffeeff');
		});

		it('#ddffeeaa should return #ddffeeaa', () => {
			expect(colorcolor('#ddffeeaa', 'hexa')).toEqual('#ddffeeaa');
		});

		it('hsb(150,13%,100%) should return #deffeeff', () => {
			expect(colorcolor('hsb(150,13%,100%)', 'hexa')).toEqual('#deffeeff');
		});

		it('hsl(150,100%,93%) should return #dbffedff', () => {
			expect(colorcolor('hsl(150,100%,93%)', 'hexa')).toEqual('#dbffedff');
		});

		it('hsla(150,100%,93%,0.6667) should return #dbffedaa', () => {
			expect(colorcolor('hsla(150,100%,93%,0.6667)', 'hexa')).toEqual('#dbffedaa');
		});

		it('hsv(150,13%,100%) should return #deffeeff', () => {
			expect(colorcolor('hsv(150,13%,100%)', 'hexa')).toEqual('#deffeeff');
		});

		it('rgb(221,255,238) should return #ddffeeff', () => {
			expect(colorcolor('rgb(221,255,238)', 'hexa')).toEqual('#ddffeeff');
		});

		it('rgba(221,255,238,0.6667) should return #ddffeeaa', () => {
			expect(colorcolor('rgba(221,255,238,0.6667)', 'hexa')).toEqual('#ddffeeaa');
		});
	});
});
