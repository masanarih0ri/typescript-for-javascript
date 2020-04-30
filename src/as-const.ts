export {};

let name = 'masanari';
name = 'hori';

let nickname = 'hori' as const;
// nickname = 'horin';

let profile = {
  name: 'masanari',
  height: 177,
} as const;
// as const をオブジェクトに対してつけると、プロパティにreadonlyがつく
// profile.name = 'hori';
// profile.height = 1119;
