
const MAX_LEN = 6;

function generate() {
  let ans = "";
  const subset = "1234567890asdfghjklpoiuytrewqzxcvbnm";
  for (let i = 0; i < MAX_LEN; i++) {
    ans += subset[Math.floor(Math.random() * subset.length)];
  }
  console.log("random generator id: " + ans);
  return ans;
}
generate()
