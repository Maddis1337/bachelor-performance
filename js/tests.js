// Generated by CoffeeScript 1.7.1
(function() {
  this.Tests = {
    look_emptyWorld: {
      "code": "look",
      "grid": {
        "width": 22,
        "height": 10,
        "objects": [],
        "ship": {
          "name": "ship",
          "x": 4,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 40,
      "language": "ruby"
    },
    empty: {
      "code": "",
      "grid": {
        "width": 22,
        "height": 10,
        "objects": [],
        "ship": {
          "name": "ship",
          "x": 4,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 40,
      "language": "ruby"
    },
    countOps: {
      "code": "i=0;loop do look;puts i;i+=1;end",
      "grid": {
        "width": 22,
        "height": 10,
        "objects": [],
        "ship": {
          "name": "ship",
          "x": 4,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 40,
      "language": "ruby"
    },
    searchTreasures: {
      "code": "def rev(d)\n  if d == :right\n    return :left\n  end\n  return :right\nend\n\ndef start\n  dir = [:front, :left, :right]\n  for d in dir\n    l = look(d)\n    if l == :treasure\n      if d != :front\n        turn(d)\n        start\n        turn(rev(d))\n        return\n      else\n        move\n        take\n        start\n        put\n        move\n        return\n      end\n    end\n  end\n  turn\nend\n\nstart\nturn",
      "grid": {
        "width": 21,
        "height": 10,
        "objects": [
          {
            "name": "treasure",
            "x": 5,
            "y": 0
          }, {
            "name": "treasure",
            "x": 6,
            "y": 0
          }, {
            "name": "treasure",
            "x": 7,
            "y": 0
          }, {
            "name": "treasure",
            "x": 7,
            "y": 1
          }, {
            "name": "treasure",
            "x": 7,
            "y": 2
          }, {
            "name": "treasure",
            "x": 7,
            "y": 3
          }, {
            "name": "treasure",
            "x": 7,
            "y": 4
          }, {
            "name": "treasure",
            "x": 6,
            "y": 4
          }, {
            "name": "treasure",
            "x": 5,
            "y": 4
          }, {
            "name": "treasure",
            "x": 4,
            "y": 4
          }, {
            "name": "treasure",
            "x": 3,
            "y": 4
          }, {
            "name": "treasure",
            "x": 2,
            "y": 4
          }, {
            "name": "treasure",
            "x": 2,
            "y": 5
          }, {
            "name": "treasure",
            "x": 2,
            "y": 6
          }, {
            "name": "treasure",
            "x": 3,
            "y": 6
          }, {
            "name": "treasure",
            "x": 3,
            "y": 7
          }, {
            "name": "treasure",
            "x": 4,
            "y": 7
          }, {
            "name": "treasure",
            "x": 5,
            "y": 7
          }, {
            "name": "treasure",
            "x": 6,
            "y": 6
          }, {
            "name": "treasure",
            "x": 7,
            "y": 6
          }, {
            "name": "treasure",
            "x": 8,
            "y": 6
          }, {
            "name": "treasure",
            "x": 5,
            "y": 6
          }, {
            "name": "treasure",
            "x": 9,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 5
          }, {
            "name": "treasure",
            "x": 10,
            "y": 4
          }, {
            "name": "treasure",
            "x": 10,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 2
          }, {
            "name": "treasure",
            "x": 10,
            "y": 1
          }, {
            "name": "treasure",
            "x": 11,
            "y": 1
          }, {
            "name": "treasure",
            "x": 12,
            "y": 1
          }, {
            "name": "treasure",
            "x": 13,
            "y": 1
          }, {
            "name": "treasure",
            "x": 14,
            "y": 1
          }, {
            "name": "treasure",
            "x": 15,
            "y": 1
          }, {
            "name": "treasure",
            "x": 16,
            "y": 1
          }, {
            "name": "treasure",
            "x": 17,
            "y": 1
          }, {
            "name": "treasure",
            "x": 18,
            "y": 1
          }, {
            "name": "treasure",
            "x": 18,
            "y": 2
          }, {
            "name": "treasure",
            "x": 18,
            "y": 3
          }, {
            "name": "treasure",
            "x": 17,
            "y": 3
          }, {
            "name": "treasure",
            "x": 16,
            "y": 3
          }, {
            "name": "treasure",
            "x": 16,
            "y": 4
          }, {
            "name": "treasure",
            "x": 16,
            "y": 5
          }, {
            "name": "treasure",
            "x": 16,
            "y": 6
          }, {
            "name": "treasure",
            "x": 15,
            "y": 6
          }, {
            "name": "treasure",
            "x": 14,
            "y": 6
          }, {
            "name": "treasure",
            "x": 14,
            "y": 5
          }, {
            "name": "treasure",
            "x": 14,
            "y": 4
          }, {
            "name": "treasure",
            "x": 14,
            "y": 3
          }, {
            "name": "treasure",
            "x": 13,
            "y": 3
          }, {
            "name": "treasure",
            "x": 12,
            "y": 3
          }, {
            "name": "treasure",
            "x": 12,
            "y": 4
          }, {
            "name": "treasure",
            "x": 12,
            "y": 5
          }, {
            "name": "treasure",
            "x": 12,
            "y": 6
          }, {
            "name": "treasure",
            "x": 12,
            "y": 7
          }, {
            "name": "treasure",
            "x": 12,
            "y": 8
          }, {
            "name": "treasure",
            "x": 13,
            "y": 8
          }, {
            "name": "treasure",
            "x": 14,
            "y": 8
          }, {
            "name": "treasure",
            "x": 15,
            "y": 8
          }, {
            "name": "treasure",
            "x": 16,
            "y": 8
          }, {
            "name": "treasure",
            "x": 17,
            "y": 8
          }, {
            "name": "treasure",
            "x": 18,
            "y": 7
          }, {
            "name": "treasure",
            "x": 17,
            "y": 7
          }, {
            "name": "treasure",
            "x": 18,
            "y": 6
          }, {
            "name": "treasure",
            "x": 18,
            "y": 5
          }, {
            "name": "treasure",
            "x": 19,
            "y": 5
          }, {
            "name": "treasure",
            "x": 20,
            "y": 5
          }, {
            "name": "treasure",
            "x": 20,
            "y": 6
          }, {
            "name": "treasure",
            "x": 20,
            "y": 7
          }, {
            "name": "treasure",
            "x": 20,
            "y": 8
          }, {
            "name": "treasure",
            "x": 20,
            "y": 9
          }
        ],
        "ship": {
          "name": "ship",
          "x": 4,
          "y": 0,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    countRows: {
      "code": "arg = {akt: 0, max: 0, zur: 0}\n\ndef count(arg)\n  if look(:here) == :treasure\n     arg[:akt] += 1\n  end\nend\n\ndef naechste_zeile(dir)\n  turn(dir)\n  move\n  turn(dir)\nend\n\ndef ende(arg)\n  turn(:right)\n  arg[:zur].times do\n    move\n  end\n  turn(:right)\n  if look(:here) == :treasure\n    take\n  end\n  put\nend\n\ndef zeile_lesen(arg)\n  while look(:front) != :border\n    count(arg)\n    move\n  end\n  count(arg)\n  if arg[:akt] >= arg[:max]\n    arg[:max] = arg[:akt]\n    arg[:zur] = 0\n  else\n    arg[:zur] += 1\n  end\n  arg[:akt] = 0\nend\n\nloop do\n  zeile_lesen(arg)\n  naechste_zeile(:right)\n  \n  zeile_lesen(arg)\n  \n  if look(:left) == :border\n    ende(arg)\n    break\n  end\n  \n  naechste_zeile(:left)\nend",
      "grid": {
        "width": 21,
        "height": 10,
        "objects": [
          {
            "name": "treasure",
            "x": 7,
            "y": 1
          }, {
            "name": "treasure",
            "x": 7,
            "y": 2
          }, {
            "name": "treasure",
            "x": 7,
            "y": 3
          }, {
            "name": "treasure",
            "x": 7,
            "y": 4
          }, {
            "name": "treasure",
            "x": 6,
            "y": 4
          }, {
            "name": "treasure",
            "x": 5,
            "y": 4
          }, {
            "name": "treasure",
            "x": 4,
            "y": 4
          }, {
            "name": "treasure",
            "x": 3,
            "y": 4
          }, {
            "name": "treasure",
            "x": 2,
            "y": 4
          }, {
            "name": "treasure",
            "x": 2,
            "y": 5
          }, {
            "name": "treasure",
            "x": 2,
            "y": 6
          }, {
            "name": "treasure",
            "x": 3,
            "y": 6
          }, {
            "name": "treasure",
            "x": 3,
            "y": 7
          }, {
            "name": "treasure",
            "x": 4,
            "y": 7
          }, {
            "name": "treasure",
            "x": 5,
            "y": 7
          }, {
            "name": "treasure",
            "x": 6,
            "y": 6
          }, {
            "name": "treasure",
            "x": 7,
            "y": 6
          }, {
            "name": "treasure",
            "x": 8,
            "y": 6
          }, {
            "name": "treasure",
            "x": 5,
            "y": 6
          }, {
            "name": "treasure",
            "x": 9,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 5
          }, {
            "name": "treasure",
            "x": 10,
            "y": 4
          }, {
            "name": "treasure",
            "x": 10,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 2
          }, {
            "name": "treasure",
            "x": 10,
            "y": 1
          }, {
            "name": "treasure",
            "x": 11,
            "y": 1
          }, {
            "name": "treasure",
            "x": 12,
            "y": 3
          }, {
            "name": "treasure",
            "x": 12,
            "y": 4
          }, {
            "name": "treasure",
            "x": 12,
            "y": 5
          }, {
            "name": "treasure",
            "x": 12,
            "y": 6
          }, {
            "name": "treasure",
            "x": 12,
            "y": 7
          }, {
            "name": "treasure",
            "x": 2,
            "y": 2
          }, {
            "name": "treasure",
            "x": 3,
            "y": 2
          }, {
            "name": "treasure",
            "x": 4,
            "y": 2
          }, {
            "name": "treasure",
            "x": 5,
            "y": 2
          }, {
            "name": "treasure",
            "x": 6,
            "y": 2
          }, {
            "name": "treasure",
            "x": 8,
            "y": 2
          }, {
            "name": "treasure",
            "x": 9,
            "y": 2
          }, {
            "name": "treasure",
            "x": 11,
            "y": 2
          }, {
            "name": "treasure",
            "x": 1,
            "y": 2
          }, {
            "name": "treasure",
            "x": 0,
            "y": 2
          }, {
            "name": "treasure",
            "x": 1,
            "y": 8
          }, {
            "name": "treasure",
            "x": 3,
            "y": 8
          }, {
            "name": "treasure",
            "x": 4,
            "y": 8
          }, {
            "name": "treasure",
            "x": 5,
            "y": 8
          }, {
            "name": "treasure",
            "x": 6,
            "y": 8
          }, {
            "name": "treasure",
            "x": 7,
            "y": 8
          }, {
            "name": "treasure",
            "x": 11,
            "y": 8
          }, {
            "name": "treasure",
            "x": 12,
            "y": 8
          }, {
            "name": "treasure",
            "x": 13,
            "y": 8
          }, {
            "name": "treasure",
            "x": 14,
            "y": 8
          }, {
            "name": "treasure",
            "x": 15,
            "y": 8
          }, {
            "name": "treasure",
            "x": 16,
            "y": 3
          }, {
            "name": "treasure",
            "x": 17,
            "y": 3
          }, {
            "name": "treasure",
            "x": 18,
            "y": 3
          }, {
            "name": "treasure",
            "x": 19,
            "y": 3
          }, {
            "name": "treasure",
            "x": 16,
            "y": 5
          }, {
            "name": "treasure",
            "x": 17,
            "y": 5
          }, {
            "name": "treasure",
            "x": 18,
            "y": 5
          }, {
            "name": "treasure",
            "x": 19,
            "y": 5
          }, {
            "name": "treasure",
            "x": 13,
            "y": 1
          }, {
            "name": "treasure",
            "x": 14,
            "y": 1
          }, {
            "name": "treasure",
            "x": 15,
            "y": 1
          }, {
            "name": "treasure",
            "x": 16,
            "y": 1
          }, {
            "name": "treasure",
            "x": 17,
            "y": 0
          }, {
            "name": "treasure",
            "x": 18,
            "y": 0
          }, {
            "name": "treasure",
            "x": 19,
            "y": 0
          }, {
            "name": "treasure",
            "x": 17,
            "y": 8
          }, {
            "name": "treasure",
            "x": 18,
            "y": 8
          }, {
            "name": "treasure",
            "x": 19,
            "y": 8
          }, {
            "name": "treasure",
            "x": 20,
            "y": 8
          }, {
            "name": "treasure",
            "x": 12,
            "y": 9
          }, {
            "name": "treasure",
            "x": 13,
            "y": 9
          }, {
            "name": "treasure",
            "x": 14,
            "y": 9
          }, {
            "name": "treasure",
            "x": 15,
            "y": 9
          }, {
            "name": "treasure",
            "x": 16,
            "y": 9
          }, {
            "name": "treasure",
            "x": 3,
            "y": 9
          }, {
            "name": "treasure",
            "x": 4,
            "y": 9
          }, {
            "name": "treasure",
            "x": 5,
            "y": 9
          }, {
            "name": "treasure",
            "x": 6,
            "y": 9
          }, {
            "name": "treasure",
            "x": 7,
            "y": 9
          }, {
            "name": "treasure",
            "x": 8,
            "y": 9
          }, {
            "name": "treasure",
            "x": 10,
            "y": 7
          }, {
            "name": "treasure",
            "x": 11,
            "y": 7
          }, {
            "name": "treasure",
            "x": 13,
            "y": 7
          }, {
            "name": "treasure",
            "x": 14,
            "y": 7
          }, {
            "name": "treasure",
            "x": 15,
            "y": 7
          }, {
            "name": "treasure",
            "x": 16,
            "y": 7
          }, {
            "name": "treasure",
            "x": 17,
            "y": 7
          }, {
            "name": "treasure",
            "x": 9,
            "y": 4
          }, {
            "name": "treasure",
            "x": 11,
            "y": 4
          }, {
            "name": "treasure",
            "x": 13,
            "y": 4
          }, {
            "name": "treasure",
            "x": 14,
            "y": 4
          }, {
            "name": "treasure",
            "x": 15,
            "y": 4
          }, {
            "name": "treasure",
            "x": 15,
            "y": 5
          }, {
            "name": "treasure",
            "x": 4,
            "y": 0
          }, {
            "name": "treasure",
            "x": 5,
            "y": 0
          }, {
            "name": "treasure",
            "x": 6,
            "y": 0
          }, {
            "name": "treasure",
            "x": 7,
            "y": 0
          }, {
            "name": "treasure",
            "x": 8,
            "y": 0
          }, {
            "name": "treasure",
            "x": 9,
            "y": 0
          }, {
            "name": "treasure",
            "x": 10,
            "y": 0
          }, {
            "name": "treasure",
            "x": 12,
            "y": 1
          }, {
            "name": "treasure",
            "x": 14,
            "y": 0
          }, {
            "name": "treasure",
            "x": 8,
            "y": 1
          }, {
            "name": "treasure",
            "x": 8,
            "y": 3
          }, {
            "name": "treasure",
            "x": 8,
            "y": 4
          }, {
            "name": "treasure",
            "x": 8,
            "y": 5
          }
        ],
        "ship": {
          "name": "ship",
          "x": 0,
          "y": 0,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    better_search_empty: {
      "code": "loop do \n  if look(:front) == :treasure\n  \tmove\n  \ttake\n  elsif look(:right) == :treasure\n  \tturn :right\n  elsif look(:left) == :treasure\n    turn :left\n  else\n    break\n  end\nend\n",
      "grid": {
        "width": 14,
        "height": 10,
        "objects": [
          {
            "name": "treasure",
            "x": 10,
            "y": -1
          }
        ],
        "ship": {
          "name": "ship",
          "x": 3,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    better_search_demo: {
      "code": "loop do \n  if look(:front) == :treasure\n  \tmove\n  \ttake\n  elsif look(:right) == :treasure\n  \tturn :right\n  elsif look(:left) == :treasure\n    turn :left\n  else\n    break\n  end\nend\n",
      "grid": {
        "width": 14,
        "height": 10,
        "objects": [
          {
            "name": "wave",
            "x": 3,
            "y": 5
          }, {
            "name": "wave",
            "x": 3,
            "y": 6
          }, {
            "name": "wave",
            "x": 4,
            "y": 6
          }, {
            "name": "wave",
            "x": 4,
            "y": 7
          }, {
            "name": "wave",
            "x": 4,
            "y": 8
          }, {
            "name": "wave",
            "x": 5,
            "y": 8
          }, {
            "name": "wave",
            "x": 3,
            "y": 7
          }, {
            "name": "wave",
            "x": 3,
            "y": 8
          }, {
            "name": "treasure",
            "x": 6,
            "y": 3
          }, {
            "name": "treasure",
            "x": 8,
            "y": 3
          }, {
            "name": "treasure",
            "x": 9,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 2
          }, {
            "name": "treasure",
            "x": 10,
            "y": 1
          }, {
            "name": "treasure",
            "x": 10,
            "y": 4
          }, {
            "name": "treasure",
            "x": 10,
            "y": 5
          }, {
            "name": "treasure",
            "x": 10,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 7
          }, {
            "name": "monster",
            "x": 13,
            "y": 0
          }, {
            "name": "monster",
            "x": 13,
            "y": 1
          }, {
            "name": "monster",
            "x": 13,
            "y": 2
          }, {
            "name": "monster",
            "x": 13,
            "y": 3
          }, {
            "name": "monster",
            "x": 13,
            "y": 5
          }, {
            "name": "monster",
            "x": 13,
            "y": 6
          }, {
            "name": "monster",
            "x": 13,
            "y": 7
          }, {
            "name": "monster",
            "x": 13,
            "y": 8
          }, {
            "name": "monster",
            "x": 13,
            "y": 9
          }, {
            "name": "monster",
            "x": 13,
            "y": 4
          }, {
            "name": "wave",
            "x": 1,
            "y": 8
          }, {
            "name": "wave",
            "x": 2,
            "y": 8
          }, {
            "name": "wave",
            "x": 6,
            "y": 8
          }, {
            "name": "wave",
            "x": 2,
            "y": 7
          }, {
            "name": "wave",
            "x": 5,
            "y": 7
          }, {
            "name": "wave",
            "x": 2,
            "y": 4
          }, {
            "name": "wave",
            "x": 1,
            "y": 3
          }, {
            "name": "wave",
            "x": 2,
            "y": 3
          }, {
            "name": "wave",
            "x": 3,
            "y": 4
          }, {
            "name": "wave",
            "x": 4,
            "y": 5
          }, {
            "name": "wave",
            "x": 4,
            "y": 4
          }, {
            "name": "wave",
            "x": 3,
            "y": 3
          }, {
            "name": "wave",
            "x": 5,
            "y": 6
          }, {
            "name": "wave",
            "x": 2,
            "y": 0
          }, {
            "name": "wave",
            "x": 3,
            "y": 0
          }, {
            "name": "wave",
            "x": 4,
            "y": 0
          }, {
            "name": "treasure",
            "x": 9,
            "y": 4
          }, {
            "name": "treasure",
            "x": 9,
            "y": 5
          }, {
            "name": "treasure",
            "x": 9,
            "y": 6
          }, {
            "name": "treasure",
            "x": 9,
            "y": 2
          }, {
            "name": "treasure",
            "x": 8,
            "y": 4
          }, {
            "name": "treasure",
            "x": 8,
            "y": 5
          }, {
            "name": "treasure",
            "x": 7,
            "y": 4
          }, {
            "name": "treasure",
            "x": 8,
            "y": 2
          }, {
            "name": "treasure",
            "x": 9,
            "y": 1
          }, {
            "name": "treasure",
            "x": 10,
            "y": 0
          }, {
            "name": "monster",
            "x": 0,
            "y": 0
          }, {
            "name": "monster",
            "x": 1,
            "y": 0
          }, {
            "name": "monster",
            "x": 0,
            "y": 1
          }, {
            "name": "monster",
            "x": 0,
            "y": 2
          }, {
            "name": "monster",
            "x": 1,
            "y": 1
          }, {
            "name": "treasure",
            "x": 7,
            "y": 3
          }
        ],
        "ship": {
          "name": "ship",
          "x": 5,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    treasureRow_demoTreasures: {
      "code": "arg = {akt: 0, max: 0, zur: 0}\n\ndef count(arg)\n  if look(:here) == :treasure\n     arg[:akt] += 1\n  end\nend\n\ndef naechste_zeile(dir)\n  turn(dir)\n  move\n  turn(dir)\nend\n\ndef ende(arg)\n  turn(:right)\n  arg[:zur].times do\n    move\n  end\n  turn(:right)\n  if look(:here) == :treasure\n    take\n  end\n  put\nend\n\ndef zeile_lesen(arg)\n  while look(:front) != :border\n    count(arg)\n    move\n  end\n  count(arg)\n  if arg[:akt] &gt;= arg[:max]\n    arg[:max] = arg[:akt]\n    arg[:zur] = 0\n  else\n    arg[:zur] += 1\n  end\n  arg[:akt] = 0\nend\n\nloop do\n  zeile_lesen(arg)\n  naechste_zeile(:right)\n  \n  zeile_lesen(arg)\n  \n  if look(:left) == :border\n    ende(arg)\n    break\n  end\n  \n  naechste_zeile(:left)\nend",
      "grid": {
        "width": 14,
        "height": 10,
        "objects": [
          {
            "name": "treasure",
            "x": 6,
            "y": 3
          }, {
            "name": "treasure",
            "x": 8,
            "y": 3
          }, {
            "name": "treasure",
            "x": 9,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 3
          }, {
            "name": "treasure",
            "x": 10,
            "y": 2
          }, {
            "name": "treasure",
            "x": 10,
            "y": 1
          }, {
            "name": "treasure",
            "x": 10,
            "y": 4
          }, {
            "name": "treasure",
            "x": 10,
            "y": 5
          }, {
            "name": "treasure",
            "x": 10,
            "y": 6
          }, {
            "name": "treasure",
            "x": 10,
            "y": 7
          }, {
            "name": "treasure",
            "x": 9,
            "y": 4
          }, {
            "name": "treasure",
            "x": 9,
            "y": 5
          }, {
            "name": "treasure",
            "x": 9,
            "y": 6
          }, {
            "name": "treasure",
            "x": 9,
            "y": 2
          }, {
            "name": "treasure",
            "x": 8,
            "y": 4
          }, {
            "name": "treasure",
            "x": 8,
            "y": 5
          }, {
            "name": "treasure",
            "x": 7,
            "y": 4
          }, {
            "name": "treasure",
            "x": 8,
            "y": 2
          }, {
            "name": "treasure",
            "x": 9,
            "y": 1
          }, {
            "name": "treasure",
            "x": 10,
            "y": 0
          }, {
            "name": "treasure",
            "x": 7,
            "y": 3
          }
        ],
        "ship": {
          "name": "ship",
          "x": 0,
          "y": 0,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    alles_empty: {
      "code": "def turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend",
      "grid": {
        "width": 14,
        "height": 10,
        "objects": [],
        "ship": {
          "name": "ship",
          "x": 5,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    },
    vielAlles_empty: {
      "code": "def turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \ndef turnturn\n  turn\n  turn\nend\nputs 'Ahoy!'\nstop = false\n\nwhile not stop do \n  front = look(:front)\n  turn(:left)\n  turn(:right)\n  put\n  take\n  turnturn\n  case front\n  when :treasure then puts\"Treasure!\"; move\n  when :moster \n    puts \"Monster ahead\n\tis it?\"\n    move\n  when :nothing then puts \"nothing\"; move\n  when :border\n    puts \"Stop!\"\n    stop = true\n    break\n  else\n    puts \"found something else\"\n    puts \"Cancel!\"\n    stop = true\n  end\nend\n    \n",
      "grid": {
        "width": 14,
        "height": 10,
        "objects": [],
        "ship": {
          "name": "ship",
          "x": 13,
          "y": 3,
          "rotation": 0
        },
        "size": 32
      },
      "vars": [],
      "speed": 0,
      "language": "ruby"
    }
  };

}).call(this);

//# sourceMappingURL=tests.map
