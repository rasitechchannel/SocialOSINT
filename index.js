import axios from "axios";
import readline from "readline";
import chalk from "chalk";
import figlet from "figlet";
import clearTerminal from "clear-terminal";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function _0x5a87(_0x3170f7, _0x3bd753) {
  const _0x5182ef = _0x585a();
  return (
    (_0x5a87 = function (_0x43eef9, _0x5577d3) {
      _0x43eef9 = _0x43eef9 - (0x1912 * -0x1 + -0x13cf + 0x2e4f);
      let _0x1d3001 = _0x5182ef[_0x43eef9];
      return _0x1d3001;
    }),
    _0x5a87(_0x3170f7, _0x3bd753)
  );
}
(function (_0x4dca5b, _0x1fcefe) {
  const _0xbbeefb = _0x5a87,
    _0x49f7e4 = _0x4dca5b();
  while (!![]) {
    try {
      const _0x420c66 =
        (parseInt(_0xbbeefb(0x175)) / (-0xb9d + -0x797 * 0x1 + 0x1335)) *
          (parseInt(_0xbbeefb("\x30\x78\x31\x37\x30")) /
            (-0xfc3 + 0x15c0 + 0x5fb * -0x1)) +
        -parseInt(_0xbbeefb("\x30\x78\x31\x37\x31")) /
          (0x1ffc + 0x6be * -0x1 + -0x1 * 0x193b) +
        (parseInt(_0xbbeefb(0x17b)) / (0x12 * 0x12b + 0x57b * -0x7 + 0x115b)) *
          (-parseInt(_0xbbeefb(0x181)) / (-0x4d * 0x4f + -0xcfe + 0x24c6)) +
        parseInt(_0xbbeefb(0x178)) / (-0x1820 + -0xb * 0x13a + -0x969 * -0x4) +
        parseInt(_0xbbeefb(0x16f)) / (0x1daa + -0xf1 * 0x16 + -0x5 * 0x1c9) +
        parseInt(_0xbbeefb(0x176)) / (-0x23f2 + 0x2255 + 0x1a5) +
        (parseInt(_0xbbeefb(0x172)) / (0x1 * 0x11cb + 0xe6a + -0x202c * 0x1)) *
          (parseInt(_0xbbeefb(0x17e)) /
            (0x1f49 + -0x234 * -0x9 + 0x5 * -0xa37));
      if (_0x420c66 === _0x1fcefe) break;
      else _0x49f7e4["push"](_0x49f7e4["shift"]());
    } catch (_0x3a9652) {
      _0x49f7e4["push"](_0x49f7e4["shift"]());
    }
  }
})(_0x585a, 0x9467 * 0x7 + -0x5bed3 + 0x5349d);
function _0x585a() {
  const _0x209fd1 = [
    "\x67\x65\x74",
    "\x6c\x6f\x67",
    "\x32\x31\x39\x33\x34\x30\x75\x62\x4b\x44\x64\x70",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x69\x6f\x73\x69\x6e\x74\x2e\x6d\x79\x74\x68\x2e\x72\x69\x70\x2f\x61\x70\x69\x2f\x73\x65\x6f\x6e\x3f\x76\x61\x6c\x75\x65\x3d",
    "\x31\x33\x33\x33\x30\x31\x70\x6f\x75\x75\x74\x71",
    "\x32\x75\x77\x42\x62\x4b\x66",
    "\x34\x39\x30\x30\x30\x38\x74\x59\x6b\x58\x44\x74",
    "\x31\x38\x4c\x50\x63\x61\x79\x5a",
    "\x67\x72\x65\x65\x6e",
    "\x66\x6f\x72\x45\x61\x63\x68",
    "\x32\x30\x36\x31\x38\x37\x73\x51\x70\x4a\x4e\x67",
    "\x33\x35\x32\x30\x34\x38\x49\x72\x4f\x76\x74\x41",
    "\x72\x65\x64",
    "\x31\x38\x30\x35\x36\x32\x32\x6b\x47\x73\x53\x47\x49",
    "\x64\x61\x74\x61",
    "\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d",
    "\x33\x32\x64\x47\x4c\x79\x6f\x41",
    "\x65\x72\x72\x6f\x72",
    "\x69\x73\x41\x72\x72\x61\x79",
    "\x38\x37\x33\x33\x31\x30\x49\x4d\x6e\x62\x57\x78",
  ];
  _0x585a = function () {
    return _0x209fd1;
  };
  return _0x585a();
}
async function checkConnections(_0x2288ea) {
  const _0x558e90 = _0x5a87;
  try {
    const _0x5078b1 = await axios[_0x558e90(0x17f)](
      _0x558e90("\x30\x78\x31\x36\x65") + _0x2288ea
    );
    !Array[_0x558e90(0x17d)](_0x5078b1[_0x558e90(0x179)])
      ? console["\x6c\x6f\x67"](
          chalk[_0x558e90(0x177)](
            "\x4e\x6f\x20\x72\x65\x73\x75\x6c\x74\x73\x20\x66\x6f\x75\x6e\x64\x20\ud83d\ude41"
          )
        )
      : (console[_0x558e90("\x30\x78\x31\x38\x30")](
          chalk[_0x558e90(0x173)]("\x52\x65\x73\x75\x6c\x74\x73\x3a")
        ),
        console["\x6c\x6f\x67"](_0x558e90(0x17a)),
        _0x5078b1[_0x558e90(0x179)][_0x558e90("\x30\x78\x31\x37\x34")](
          (_0x1e7bc1, _0x5e0a37) => {
            const _0x2ba08d = _0x558e90;
            console[_0x2ba08d("\x30\x78\x31\x38\x30")](
              chalk[_0x2ba08d("\x30\x78\x31\x37\x33")](
                "\u2705\x20" +
                  (_0x5e0a37 + (0x11b * 0x1c + -0x1 * 0xf29 + -0xfca)) +
                  "\x2e\x20" +
                  _0x1e7bc1
              )
            );
          }
        ),
        console[_0x558e90("\x30\x78\x31\x38\x30")](
          _0x558e90("\x30\x78\x31\x37\x61")
        ));
  } catch (_0x398714) {
    console[_0x558e90(0x17c)](
      chalk[_0x558e90("\x30\x78\x31\x37\x37")](_0x398714)
    );
  }
  mainMenu();
}

function about() {
  console.log(chalk.yellow("About ℹ️:"));
  console.log(chalk.yellow("--------"));
  console.log(
    "This is a simple Node.js application to check email or phone number connections to platforms."
  );
  console.log(chalk.yellow("--------"));
  mainMenu(); // Kembali ke menu utama setelah selesai
}

function startCheck() {
  console.log(chalk.cyan("Start Check 🚀:"));
  console.log(chalk.cyan("------------"));
  rl.question(
    "Enter the email or phone number you want to check: ",
    (input) => {
      checkConnections(input);
    }
  );
}

function faq() {
  console.log(chalk.blue("Frequently Asked Questions 🤔:"));
  console.log(chalk.blue("----------------------------"));
  console.log("- Q1: How does this application work?");
  console.log(
    "- A1: This application sends a request to the provided API to check which platforms are associated with the given email or phone number."
  );
  // Add more FAQ items as needed
  console.log(chalk.blue("----------------------------"));
  mainMenu(); // Kembali ke menu utama setelah selesai
}

function _0x144c(_0x5efb66, _0x3178a1) {
  var _0x81ea45 = _0x334c();
  return (
    (_0x144c = function (_0x3fc60f, _0x1d4c6e) {
      _0x3fc60f = _0x3fc60f - (-0x14b * -0x6 + -0x1553 + -0x10 * -0xe3);
      var _0x1a915f = _0x81ea45[_0x3fc60f];
      return _0x1a915f;
    }),
    _0x144c(_0x5efb66, _0x3178a1)
  );
}
(function (_0x5799a1, _0x69a2bf) {
  var _0x4abb83 = _0x144c,
    _0x4690c1 = _0x5799a1();
  while (!![]) {
    try {
      var _0x5e0d0d =
        (-parseInt(_0x4abb83("\x30\x78\x61\x30")) /
          (0x2d1 * -0x2 + 0x176 * 0xc + -0xbe5)) *
          (parseInt(_0x4abb83(0xa1)) /
            (-0x1716 + -0x2 * 0x506 + -0x849 * -0x4)) +
        -parseInt(_0x4abb83(0xa8)) / (-0x13 * -0xf9 + -0x1e96 + 0x5e * 0x21) +
        parseInt(_0x4abb83(0xab)) / (-0x2b * 0xa4 + -0x1f59 + -0x1c9 * -0x21) +
        -parseInt(_0x4abb83("\x30\x78\x61\x35")) /
          (-0x556 * -0x1 + 0x20a2 + -0x25f3) +
        (parseInt(_0x4abb83(0xa9)) / (0x80a + -0x2 * -0x11ad + 0x1a * -0x1ab)) *
          (parseInt(_0x4abb83("\x30\x78\x61\x33")) /
            (0x14d6 + -0x31 * -0x4b + -0x232a)) +
        (parseInt(_0x4abb83(0xa2)) / (0x2201 + -0x74d + -0x1aac)) *
          (parseInt(_0x4abb83("\x30\x78\x61\x63")) /
            (0xbb3 + -0x1496 + 0x1 * 0x8ec)) +
        parseInt(_0x4abb83(0xaa)) / (0xd * -0xed + 0x1 * 0x1413 + -0x800);
      if (_0x5e0d0d === _0x69a2bf) break;
      else _0x4690c1["push"](_0x4690c1["shift"]());
    } catch (_0x28211d) {
      _0x4690c1["push"](_0x4690c1["shift"]());
    }
  }
})(_0x334c, 0x1525db * 0x1 + 0x9 * -0x1d909 + 0x630ec);
function _0x334c() {
  var _0x3929f3 = [
    "\x32\x30\x36\x38\x39\x32\x55\x65\x65\x6a\x76\x45",
    "\x6c\x6f\x67",
    "\x32\x39\x36\x51\x68\x6b\x52\x52\x6a",
    "\x33\x36\x35\x38\x4d\x44\x53\x72\x48\x6e",
    "\x34\x38\x62\x6d\x4a\x45\x4d\x76",
    "\x39\x31\x35\x36\x31\x34\x59\x47\x56\x7a\x65\x48",
    "\x6d\x61\x67\x65\x6e\x74\x61",
    "\x31\x31\x39\x33\x33\x36\x35\x48\x4a\x47\x68\x73\x76",
    "\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d",
    "\x2d\x20\x40\x52\x61\x73\x69\x54\x65\x63\x68\x43\x68\x61\x6e\x6e\x65\x6c\x31",
    "\x31\x38\x36\x35\x33\x31\x39\x55\x4c\x42\x77\x65\x4e",
    "\x36\x4b\x42\x58\x61\x66\x4f",
    "\x38\x33\x30\x32\x39\x39\x30\x62\x4d\x42\x72\x72\x6e",
    "\x34\x30\x31\x38\x34\x36\x30\x52\x7a\x52\x4c\x50\x4c",
  ];
  _0x334c = function () {
    return _0x3929f3;
  };
  return _0x334c();
}
function contact() {
  var _0x48e097 = _0x144c;
  console["\x6c\x6f\x67"](
    chalk[_0x48e097(0xa4)](
      "\x43\x6f\x6e\x74\x61\x63\x74\x20\x55\x73\x20\ud83d\udce7\x3a"
    )
  ),
    console[_0x48e097("\x30\x78\x39\x66")](
      chalk[_0x48e097(0xa4)](_0x48e097("\x30\x78\x61\x36"))
    ),
    console["\x6c\x6f\x67"](
      "\x59\x6f\x75\x20\x63\x61\x6e\x20\x72\x65\x61\x63\x68\x20\x75\x73\x20\x61\x74\x20\x74\x68\x65\x20\x66\x6f\x6c\x6c\x6f\x77\x69\x6e\x67\x20\x54\x65\x6c\x65\x67\x72\x61\x6d\x3a"
    ),
    console["\x6c\x6f\x67"](_0x48e097(0xa7)),
    console[_0x48e097(0x9f)](chalk[_0x48e097(0xa4)](_0x48e097(0xa6))),
    mainMenu();
}
function clearScreen() {
  clearTerminal(); // Membersihkan terminal
  mainMenu(); // Kembali ke menu utama setelah membersihkan
}

function printAsciiArt() {
  figlet("SocialOSINT", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(chalk.green(data));
    mainMenu();
  });
}

function mainMenu() {
  console.log(chalk.green("============================================"));
  console.log(chalk.yellow("Menu 📋:"));
  console.log(chalk.yellow("-----"));
  console.log(chalk.yellow("1. About ℹ️"));
  console.log(chalk.yellow("2. Start Check 🚀"));
  console.log(chalk.yellow("3. FAQ 🤔"));
  console.log(chalk.yellow("4. Contact Us 📧"));
  console.log(chalk.yellow("5. Exit Program 🚪")); // Menambahkan opsi untuk keluar
  console.log(chalk.yellow("6. Clear Screen 🧹")); // Menambahkan opsi untuk membersihkan layar

  rl.question("Select an option (1/2/3/4/5/6): ", (choice) => {
    switch (choice) {
      case "1":
        about();
        break;
      case "2":
        startCheck();
        break;
      case "3":
        faq();
        break;
      case "4":
        contact();
        break;
      case "5":
        rl.close(); // Keluar dari program jika pengguna memilih opsi keluar
        break;
      case "6":
        clearScreen(); // Membersihkan layar jika pengguna memilih opsi Clear Screen
        break;
      default:
        console.log(chalk.red("Invalid choice. Please select a valid option."));
        mainMenu(); // Kembali ke menu utama setelah pesan kesalahan
    }
  });
}

// Main program
printAsciiArt();
