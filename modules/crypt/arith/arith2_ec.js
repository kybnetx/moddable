/*
 * Copyright (c) 2016-2017  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 * 
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 * 
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 * 
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 * This file incorporates work covered by the following copyright and  
 * permission notice:  
 *
 *       Copyright (C) 2010-2016 Marvell International Ltd.
 *       Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *       Licensed under the Apache License, Version 2.0 (the "License");
 *       you may not use this file except in compliance with the License.
 *       You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *       Unless required by applicable law or agreed to in writing, software
 *       distributed under the License is distributed on an "AS IS" BASIS,
 *       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *       See the License for the specific language governing permissions and
 *       limitations under the License.
 */

import ECPoint from "arith2_ecp";
import Integer from "arith2_int";

export default class EC {
	constructor(a, b, m) {
		this.a = a.valueOf();
		this.b = b.valueOf();
		this.m = m.m;
	};
	inv(p) {
		return new ECPoint(this.m - p.y(), p.x, p.identity);
	}
	add(a, b) {
		let r = this._add(a, b);
		return new ECPoint(new Integer(r.x), new Integer(r.y), r.identity);
	}
	_add(a, b) @ "xs_ec2_add";
	mul(a, k) {
		let r = this._mul(a, k.valueOf());
		return new ECPoint(new Integer(r.x), new Integer(r.y), r.identity);
	}
	_mul(a, k) @ "xs_ec2_mul";
	mul2(a1, k1, a2, k2) {
		let r = this._mul2(a1, k1.valueOf(), a2, k2.valueOf());
		return new ECPoint(new Integer(r.x), new Integer(r.y), r.identity);
	}
	_mul2(a1, k1, a2, k2) @ "xs_ec2_mul2";
};

Object.freeze(EC.prototype);