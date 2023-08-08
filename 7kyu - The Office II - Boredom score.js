function boredom(staff) {
  let score = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  }

  let total = 0;

  let num = [];
  for (const staffMember in staff) {
    var department = staff[staffMember];
    num.push(department);
    total += score[department] || 0;
  }

  if (total <= 80) {
    return 'kill me now'
  } else if (total < 100) {
    return 'i can handle this';
  } else {
    return 'party time!!';
  }
}