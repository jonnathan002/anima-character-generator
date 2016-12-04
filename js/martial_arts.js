/*global define: false */
/**
* Data for Basic and Advanced Martial Arts.
* @module martial_arts
*/
define({
  'Aikido': {
    Base: {
      Damage: 10,
      MK: 10,
      Advantages: ['No penalties to Trapping or take-down during a counterattack',+
      'Add 2 times opponent\'s STR bonus to Base Damage on counterattack'],
      Requirements: {
        'Sleight of Hand': 40
      }
    }
  },
  'Asakusen': {
    Base: {
      // Grants +10 Attack, Block, Damage, Dodge, & Initiative (not subject to +50 cap)
      MK: 10,
      Requirements: {
        'Martial Art': {
          'Kung Fu': 'Advanced'
        },
        Attack: 160,
        Defense: 160
      }
    },
    Arcane: {
      Advantages: ['Kung Fu (Supreme) +20 bonus is increased to +40',
      '+20 to Criticals on Aimed Attacks on vital points'],
      'Master Bonus': {
        Attack: 10,
        Block: 10,
        Dodge: 10
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          'Kung Fu': 'Supreme'
        },
        'Ki Abilities': ['Inhumanity'],
        Attack: 280,
        Defense: 280
      }
    }
  },
  'Capoeira': {
    Base: {
      Advantages: ['Can affect 5 opponents with Area Attack (as Large weapon)'],
      Damage: 20,
      Bonus: {
        Dodge: 10
      },
      MK:10,
      Requirements: {
        Dance: 40
      }
    }
  },
  'Dumah': {
    Base: {
      Advantages: ['Can attack as Cut or Thrust',
      '-2 to opponent\'s AT',
      '+10 to Breakage'],
      Bonus: {
        Attack: 20
      },
      Damage: 10, // bonus to base
      MK: 10,
      Requirements: {
        'Martial Art': {
          Kempo: 'Advanced',
          Capoeira: 'Advanced'
        },
        'Ki Abilities': ['Presence Extrusion']
      }
    },
    Arcane: {
      Advantages: ['Can attack as Cut or Thrust',
      '-6 to opponent\'s AT',
      '+25 to Breakage',
      'Attacks automatically cause bleeding'],
      Damage: 20, // bonus to base
      'Master Bonus': {
        Attack: 20
      },
      MK: 10,
      Replace: true,
      Requirements: {
        'Martial Art': {
          Kempo: 'Supreme',
          Capoeira: 'Supreme'
        },
        'Ki Abilities': ['Inhumanity'],
        Attack: 280
      }
    }
  },
  'Emp': {
    Base: {
      Advantages: ['Disarm with no penalty and +3 to Characteristic checks when performing it'],
      Bonus: {
        Atack: 20,
        Initiative: 10
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Kempo: 'Advanced',
          Kuan: 'Advanced',
          'Malla-Yuddha': 'Advanced'
        },
        Attack: 200
      }
    },
    Arcane: {
      Advantages: ['Free disarm attempt on any successful defense'],
      Bonus: {
        Initiative: 10
      },
      'Master Bonus': {
        Attack: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Kempo: 'Supreme',
          Kuan: 'Supreme',
          'Malla-Yuddha': 'Supreme'
        },
        Attack: 280,
        Defense: 260
      }
    }
  },
  'Enuth': {
    Base: {
      Advantages: ['+20 to Criticals when trying to knock opponent unconscious',
      'Can reduce damage to exact amount desired'],
      Bonus: {
        Block: 20,
        Dodge: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Sambo: 'Advanced',
          Shotokan: 'Advanced'
        },
        Attack: 160,
        Defense: 160
      }
    },
    Arcane: {
      Advantages: ['All hits have chance of knocking enemy unconscious with +50 to Critical level',
      'Can reduce damage to exact amount desired',
      'Can determine opponent\'s remaining LP after each hit'],
      'Master Bonus': {
        Attack: 15,
        Block: 15,
        Dodge: 15
      },
      MK: 10,
      Replace: true,
      Requirements: {
        'Martial Art': {
          Sambo: 'Supreme',
          Shotokan: 'Supreme'
        },
        'Ki Abilities': ['Inhumanity', 'Erudition'],
        Attack: 280,
        Defense: 280
      }
    }
  },
  'Grappling': {
    Base: {
      Advantages: ['No penalties for Trapping and Take Down'],
      Damage: 20,
      MK: 10,
      Requirements: {
        'Feats of Strength': 40
      }
    }
  },
  'Hakyoukuken': {
    Base: {
      Advantages: ['-2 to AT of soft armors',
      '+20 to Critical level rolls against organic beings'],
      Bonus: {
        Attack: 10,
        Initiative: 20
      },
      Damage: 20, // bonus to base
      MK: 10,
      Requirements: {
        'Martial Art': {
          Shotokan: 'Advanced',
          'Muay Thai': 'Advanced'
        },
        'Ki Abilities': ['Use of Necessary Energy'],
        Attack: 200
      }
    },
    Arcane: {
      Advantages: ['Soft armors ignored except Quality bonus',
      '+40 to Critical level rolls against organic beings'],
      Bonus: {
        Initiative: 20
      },
      Damage: 30, // bonus to base
      'Master Bonus': {
        Attack: 20
      },
      MK: 10,
      Replace: true,
      Requirements: {
        'Martial Art': {
          Shotokan: 'Supreme',
          'Muay Thai': 'Supreme'
        },
        'Ki Abilities': ['Inhumanity'],
        Attack: 300
      }
    }
  },
  'Kempo': {
    Base: {
      Advantages: ['Additional attacks are at -10 instead of -25'],
      Damage: 20,
      MK: 10
    }
  },
  'Kung Fu': {
    Base: {
      Advantages: ['+10 to Attack, Block, Damage, Dodge, or Initiative each turn'],
      MK: 10,
      Damage: 20,
      Requirements: {
        Acrobatics: 40,
        'Sleight of Hand': 40,
        Style: 20
      }
    }
  },
  'Melkaiah': {
    Base: {
      Advantages: ['+3 to Characteristic checks when performing Take Down or Trapping'],
      Bonus: {
        Attack: 10
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Grappling: 'Advanced',
          Pankration: 'Advanced'
        },
        'Ki Abilities': ['Inhumanity'],
        Attack: 160,
        Defense: 160
      }
    },
    Arcane: {
      'Advantages': ['+50 to Attack when releasing opponent to use Complete Attack',
      '+3 to Characteristic checks when performing Crush or Strangle'],
      'Master Bonus': {
        Attack: 10,
        Block: 10,
        Dodge: 10
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Grappling: 'Supreme',
          Pankration: 'Supreme'
        },
        Attack: 260,
        Defense: 260
      }
    }
  },
  'Muay Thai': {
    Base: {
      Damage: {
        Base: 20,
        Multiplier: 3
      },
      MK: 10,
      Requirements: {
        'Feats of Strength': 40
      }
    }
  },
  'Sambo': {
    Base: {
      Advantages: ['Penalties for Trapping, Area Attack, Take Down and Disarm are halved'],
      Bonus: {
        Block: 10
      },
      Damage: 20,
      MK: 10
    }
  },
  'Selene': {
    Base: {
      Advantages: ['Double counterattack bonus'],
      Bonus: {
        Block: 20,
        Dodge: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Aikido: 'Advanced'
        },
        Defense: 200
      }
    },
    Arcane: {
      Advantages: ['Can counterattack even if no attacks left unless on defensive'],
      'Master Bonus': {
        Block: 20,
        Dodge: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Aikido: 'Supreme'
        },
        'Ki Abilities': ['Inhumanity'],
        Defense: 300
      }
    }
  },
  'Seraphite': {
    Base: {
      Advantages: ['Can gain +20 to Attack in exchange for -30 to defense'],
      Bonus: {
        Attack: 20
      },
      Damage: 10, // bonus to base
      MK: 10,
      Requirements: {
        'Martial Art': {
          Shotokan: 'Advanced',
          Kempo: 'Advanced'
        },
        'Ki Abilities': ['Presence Extrusion'],
        Attack: 180
      }
    },
    Arcane: {
      Advantages: ['Can gain +30 to Attack in exchange for -50 to defense',
      'Can attack on turn even if put on Defensive unless a Critical was suffered'],
      'Master Bonus': {
        Attack: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Shotokan: 'Supreme',
          Kempo: 'Supreme'
        },
        Attack: 280
      }
    }
  },
  'Shephon': {
    Base: {
      Advantages: ['Pure Defense bonus increased to +60'],
      Bonus: {
        Block: 20,
        Dodge: 20
      },
      MK: 10,
      Requirements: {
        'Martial Art': {
          Aikido: 'Advanced',
          Kuan: 'Advanced'
        },
        'Ki Abilities': ['Use of Ki'],
        Defense: 200
      }
    },
    Arcane: {
      Advantages: ['Pure Defense bonus increased to +100'],
      'Master Bonus': {
        Block: 20,
        Dodge: 20
      },
      MK: 10,
      Replace: true,
      Requirements: {
        'Martial Art': {
          Aikido: 'Supreme',
          Kuan: 'Supreme'
        },
        Defense: 300
      }
    }
  },
  'Shotokan': {
    Base: {
      Bonus: {
        Attack: 10
      },
      Damage: 30,
      MK: 10
    }
  },
  'Tae Kwon Do': {
    Base: {
      Advantages: ['Can make one additional attack with legs at -20'],
      Damage: 20,
      MK: 10
    }
  },
  'Tai Chi': {
    Base: {
      Damage: {
        Base: 20,
        Characteristic: 'POW',
        Multiplier: 2
      },
      MK: 30,
      Requirements: {
        'Ki Abilities': ['Use of Ki']
      }
    }
  },
  'Velez': {
    Base: {
      Advantages: ['Can strike as Energy'],
      Bonus: {
        Block: 20,
        Dodge: 20
      },
      MK: 20,
      Requirements: {
        'Martial Art': {
          'Tai Chi': 'Advanced',
          'Kung Fu': 'Advanced'
        },
        'Ki Abilities': ['Presence Extrusion']
      }
    },
    Arcane: {
      Advantages: ['Attacks are intangible and invisible',
      'Can use Power for opposed Characteristic checks for maneuvers'],
      'Master Bonus': {
        Block: 15,
        Dodge: 15
      },
      MK: 20,
      Requirements: {
        'Martial Art': {
          'Tai Chi': 'Supreme',
          'Kung Fu': 'Supreme'
        },
        Attack: 280
      }
    }
  }
});
