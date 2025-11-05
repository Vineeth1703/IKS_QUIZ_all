const quizData = {
  1: [ // Unit 1: Indian History
    {
      "question": "What major river system provided fertile land for early settlements in ancient India?",
      "options": ["Indus River", "Nile River", "Tigris-Euphrates River", "Yellow River"],
      "correct": 0,
      "explanation": "The Indus River system was the cradle of the Harappan Civilization (Indus Valley Civilization), one of the earliest urban settlements in the world."
    },
    {
      "question": "The Harappan civilization was located in which present-day country?",
      "options": ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
      "correct": 0,
      "explanation": "The major sites of the Harappan Civilization, such as Harappa and Mohenjo-daro, are located in present-day Pakistan."
    },
    {
      "question": "The Indus Valley Civilization is also known as the __________.",
      "options": ["Harappan Civilization", "Aryan Civilization", "Mughal Empire", "Gupta Dynasty"],
      "correct": 0,
      "explanation": "It is named the Harappan Civilization after Harappa, the first archaeological site where this unique culture was discovered."
    },
    {
      "question": "Which region of ancient India is considered the birthplace of Hinduism?",
      "options": ["Punjab", "Rajasthan", "Gujarat", "Uttar Pradesh"],
      "correct": 0,
      "explanation": "The historical roots of Hinduism trace back to the Vedic period in the Punjab region (of both present-day India and Pakistan), along the Indus River system."
    },
    {
      "question": "The ancient Indian city of Varanasi is situated on the banks of which river?",
      "options": ["Ganges", "Yamuna", "Saraswati", "Brahmaputra"],
      "correct": 0,
      "explanation": "Varanasi, one of the oldest continuously inhabited cities in the world, is located on the banks of the sacred Ganges River."
    },
    {
      "question": "Which of the following ancient Indian cities was a major center of learning and education?",
      "options": ["Takṣaśilā", "Mathura", "Ayodhya", "Pataliputra"],
      "correct": 0,
      "explanation": "Takṣaśilā (Taxila) was an ancient and renowned center of learning, attracting scholars from various parts of the world. (Nalanda was also a major center, but Takṣaśilā is the correct option here)."
    },
    {
      "question": "Which ancient Indian university was renowned for its teachings in various fields, including philosophy and Buddhism?",
      "options": ["Nalanda University", "Taxila University", "Vikramshila University", "Pushpagiri University"],
      "correct": 0,
      "explanation": "Nalanda University was a celebrated Mahavihara (large Buddhist monastery) and a renowned center of learning in ancient India."
    },
    {
      "question": "The ancient Indian education system primarily emphasized the study of __________.",
      "options": ["All of the above", "Mathematics", "Philosophy", "Medicine"],
      "correct": 0,
      "explanation": "The ancient system was holistic, covering religious texts (like Vedas), philosophy (Darshanas), mathematics (Jyotisha), medicine (Ayurveda), and more."
    },
    {
      "question": "The transition from hunting and gathering to agriculture in ancient India led to the development of __________.",
      "options": ["All of the above", "Social hierarchies", "Trade networks", "Permanent settlements"],
      "correct": 0,
      "explanation": "The Neolithic agricultural revolution allowed for permanent settlements, food surpluses, which in turn led to specialized labor, social hierarchies, and trade."
    },
    {
      "question": "The earliest known agricultural settlements in ancient India were located in the region of __________.",
      "options": ["Punjab", "Bihar", "Gujarat", "Rajasthan"],
      "correct": 0,
      "explanation": "Early agricultural sites like Mehrgarh (now in Pakistan) are in the greater Indus region, which includes the Punjab. Among the given options, Punjab is the most appropriate."
    },
    {
      "question": "The Vedas are a collection of ancient Indian __________.",
      "options": ["Religious texts", "Philosophical treatises", "Epic poems", "Legal codes"],
      "correct": 0,
      "explanation": "The Vedas are a large body of religious texts originating in ancient India, composed in Vedic Sanskrit. They form the oldest layer of Sanskrit literature and the core of Hindu scriptures."
    },
    {
      "question": "The oldest Veda is the __________.",
      "options": ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
      "correct": 0,
      "explanation": "The Rigveda is the oldest of the four Vedas, containing a collection of hymns and prayers."
    },
    {
      "question": "The Upanishads are a collection of texts that explore __________.",
      "options": ["Philosophical ideas", "Yoga and meditation", "Mythology and folklore", "Rituals and sacrifices"],
      "correct": 0,
      "explanation": "The Upanishads are late Vedic texts that form the basis of Hindu philosophical thought, discussing concepts like Brahman (ultimate reality) and Atman (soul)."
    },
    {
      "question": "The Bhagavad Gita is a part of which ancient Indian epic?",
      "options": ["Mahabharata", "Puranas", "Ramayana", "Upanishads"],
      "correct": 0,
      "explanation": "The Bhagavad Gita is a 700-verse scripture that is part of the Bhishma Parva of the epic Mahabharata."
    },
    {
      "question": "The Ramayana and the Mahabharata are considered two of the greatest Indian __________.",
      "options": ["Epics", "Temples", "Festivals", "Sculptures"],
      "correct": 0,
      "explanation": "These two foundational texts are the great epics (Itihasa) of ancient India, central to Hindu culture and thought."
    },
    {
      "question": "The Ramayana tells the story of the prince __________.",
      "options": ["Rama", "Krishna", "Arjuna", "Hanuman"],
      "correct": 0,
      "explanation": "The Ramayana narrates the life of Rama, the prince of Ayodhya, and his quest to rescue his wife Sita from the demon king Ravana."
    },
    {
      "question": "Which festival celebrates the victory of good over evil and is associated with the story of Lord Rama?",
      "options": ["Diwali", "Holi", "Durga Puja", "Navaratri"],
      "correct": 0,
      "explanation": "Diwali, the festival of lights, celebrates Lord Rama's return to Ayodhya after defeating Ravana, symbolizing the victory of light over darkness and good over evil."
    },
    {
      "question": "The festival of Holi is known for its vibrant colors and the celebration of __________.",
      "options": ["All of the above", "Harvest and fertility", "Victory of good over evil", "Love and friendship"],
      "correct": 0,
      "explanation": "Holi celebrates the victory of good over evil (Holika's demise), the arrival of spring (harvest/fertility), and is a joyous festival of love and friendship."
    },
    {
      "question": "The Kumbh Mela, a major Hindu pilgrimage, is held every __________ years.",
      "options": ["12", "4", "6", "2"],
      "correct": 0,
      "explanation": "The Purna (full) Kumbh Mela is celebrated every 12 years at one of four locations (Prayagraj, Haridwar, Nashik, Ujjain), with an Ardha (half) Mela every 6 years."
    },
    {
      "question": "The ancient Indian festival of Navaratri is dedicated to the worship of __________.",
      "options": ["Goddess Durga", "Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
      "correct": 0,
      "explanation": "Navaratri ('nine nights') is a major festival dedicated to the worship of the divine feminine, Devi, in her various forms, especially Goddess Durga."
    },
    {
      "question": "The concept of 'Ahimsa' (non-violence) was most strongly advocated by which historical figure?",
      "options": ["Mahavira", "Gautama Buddha", "Ashoka the Great", "Emperor Akbar"],
      "correct": 0,
      "explanation": "Ahimsa is a central tenet of Jainism, and its most prominent exponent was Mahavira, the 24th Tirthankara."
    },
    {
      "question": "The Maurya Empire reached its greatest extent under the rule of which emperor?",
      "options": ["Ashoka the Great", "Bindusara", "Chandragupta Maurya", "Chandragupta II"],
      "correct": 0,
      "explanation": "Ashoka the Great, the grandson of the founder Chandragupta Maurya, expanded the empire to its largest territorial extent, covering almost the entire Indian subcontinent."
    },
    {
      "question": "The Arthashastra, an ancient Indian treatise on statecraft, was written by __________.",
      "options": ["Chanakya", "Kalidasa", "Panini", "Vishnu Sharma"],
      "correct": 0,
      "explanation": "The Arthashastra is attributed to Chanakya (also known as Kautilya), who was the chief advisor to Emperor Chandragupta Maurya."
    },
    {
      "question": "The Gupta Empire is known for its contributions to which field?",
      "options": ["All of the above", "Art and literature", "Architecture", "Science and mathematics"],
      "correct": 0,
      "explanation": "The Gupta period is considered the 'Golden Age' of India, marked by significant achievements in science, mathematics (like the concept of zero), art, literature (like Kalidasa), and architecture."
    },
    {
      "question": "Which ancient Indian astronomer is known for his accurate calculation of the value of pi?",
      "options": ["Aryabhata", "Brahmagupta", "Brahmagupta", "Bhaskara II"],
      "correct": 0,
      "explanation": "Aryabhata, in his work *Aryabhatiya*, calculated the value of Pi (π) as approximately 3.1416, which is remarkably close to the modern value."
    },
    {
      "question": "The Chola dynasty of ancient India was known for its advancements in __________.",
      "options": ["All of the above", "Temple architecture", "Administration", "Maritime trade"],
      "correct": 0,
      "explanation": "The Cholas excelled in all these areas, building magnificent temples (like Brihadeeswarar), maintaining a powerful navy for maritime trade, and having a sophisticated administrative system."
    },
    {
      "question": "The Sultanate of Delhi was established by which Islamic ruler in the 13th century?",
      "options": ["Qutb-ud-din Aibak", "Muhammad bin Tughlaq", "Babur", "Alauddin Khilji"],
      "correct": 0,
      "explanation": "Qutb-ud-din Aibak, a former slave of Muhammad Ghori, established the Mamluk (Slave) Dynasty, the first dynasty of the Delhi Sultanate, in 1206."
    },
    {
      "question": "The Mughal Empire in India was founded by __________.",
      "options": ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
      "correct": 0,
      "explanation": "Babur, a descendant of Timur and Genghis Khan, founded the Mughal Empire in 1526 after defeating Ibrahim Lodi at the First Battle of Panipat."
    },
    {
      "question": "The Taj Mahal, a UNESCO World Heritage Site, was built during the reign of which Mughal emperor?",
      "options": ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
      "correct": 0,
      "explanation": "Emperor Shah Jahan commissioned the Taj Mahal in Agra as a mausoleum for his beloved wife, Mumtaz Mahal."
    },
    {
      "question": "The Battle of Plassey in 1757 marked the beginning of British colonial rule in which region of India?",
      "options": ["Bengal", "Punjab", "Maharashtra", "Tamil Nadu"],
      "correct": 0,
      "explanation": "The victory of the British East India Company over the Nawab of Bengal at Plassey effectively gave them control of the rich province of Bengal, marking the start of British rule."
    },
    {
      "question": "The Indian Rebellion of 1857, also known as the Sepoy Mutiny, was triggered by the use of which ammunition?",
      "options": ["Cartridges greased with cow and pig fat", "Cartridges greased with coconut oil", "Cartridges greased with ghee", "Cartridges greased with vegetable oil"],
      "correct": 0,
      "explanation": "The immediate trigger was the introduction of the new Enfield rifle cartridges, which sepoys had to bite open. Rumors they were greased with fat offensive to both Hindus and Muslims sparked the mutiny."
    },
    {
      "question": "The Indian National Congress was formed in which year?",
      "options": ["1885", "1857", "1905", "1947"],
      "correct": 0,
      "explanation": "The Indian National Congress was founded on December 28, 1885, by British civil servant Allan Octavian Hume."
    },
    {
      "question": "The partition of India and Pakistan occurred in which year?",
      "options": ["1947", "1945", "1950", "1962"],
      "correct": 0,
      "explanation": "British India was partitioned into the two independent dominions of India and Pakistan on August 15, 1947."
    },
    {
      "question": "The Indian independence movement was led by prominent leaders such as __________.",
      "options": ["All of the above", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
      "correct": 0,
      "explanation": "The movement was vast and included many leaders with different ideologies, including Gandhi (non-violence), Nehru (first Prime Minister), and Bose (INA)."
    },
    {
      "question": "The first Prime Minister of India was __________.",
      "options": ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Rajiv Gandhi"],
      "correct": 0,
      "explanation": "Jawaharlal Nehru became the first Prime Minister of independent India, serving from 1947 until his death in 1964."
    },
    {
      "question": "The ancient Indian game of chess, known as 'Chaturanga,' originated during which time period?",
      "options": ["Gupta period", "Mauryan period", "Vedic period", "Mughal period"],
      "correct": 0,
      "explanation": "Chaturanga, the precursor to modern chess, is believed to have originated in India during the Gupta Empire (c. 6th century CE)."
    },
    {
      "question": "The traditional Indian system of medicine, which emphasizes a holistic approach to health, is known as __________.",
      "options": ["All of the above", "Ayurveda", "Siddha", "Unani"],
      "correct": 0,
      "explanation": "Ayurveda, Siddha, and Unani are all traditional systems of medicine practiced in India. 'All of the above' is the correct choice as they all fit the description."
    },
    {
      "question": "The Indian state of Kerala is known for its traditional martial art form called __________.",
      "options": ["Kalaripayattu", "Kathakali", "Bharatanatyam", "Odissi"],
      "correct": 0,
      "explanation": "Kalaripayattu is an ancient martial art form that originated in Kerala. Kathakali, Bharatanatyam, and Odissi are classical dance forms."
    },
    {
      "question": "The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
      "options": ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
      "correct": 0,
      "explanation": "The magnificent Kailasa Temple and other key caves at Ellora were primarily built under the patronage of the Rashtrakuta dynasty."
    },
    {
      "question": "The Konark Sun Temple, a UNESCO World Heritage Site, is located in which Indian state?",
      "options": ["Odisha", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
      "correct": 0,
      "explanation": "The Konark Sun Temple, a 13th-century CE temple dedicated to the Sun God Surya, is located in Konark, Odisha."
    },
    {
      "question": "The famous poet and playwright Kalidasa lived during the reign of which ancient Indian dynasty?",
      "options": ["Gupta dynasty", "Maurya dynasty", "Chola dynasty", "Vijayanagara dynasty"],
      "correct": 0,
      "explanation": "Kalidasa, one of India's greatest classical Sanskrit poets, is believed to have flourished during the Gupta Empire, likely in the court of Chandragupta II."
    },
    {
      "question": "The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
      "options": ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
      "correct": 0,
      "explanation": "This is a duplicate question. The Ellora caves were built under the Rashtrakuta dynasty."
    },
    {
      "question": "The official language of the Maurya Empire was __________.",
      "options": ["Prakrit", "Sanskrit", "Pali", "Tamil"],
      "correct": 0,
      "explanation": "Prakrit, specifically Magadhi Prakrit, was the primary language of administration and public inscriptions (like Ashoka's edicts) during the Maurya Empire."
    },
    {
      "question": "The Golden Age of ancient Indian culture and arts flourished under the patronage of which dynasty?",
      "options": ["Gupta dynasty", "Mughal dynasty", "Maurya dynasty", "Chola dynasty"],
      "correct": 0,
      "explanation": "The Gupta period (c. 320-550 CE) is renowned as the 'Golden Age' due to its remarkable achievements in art, literature, science, and mathematics."
    },
    {
      "question": "The city of Agra, known for the Taj Mahal, served as the capital of which Mughal emperor?",
      "options": ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
      "correct": 0,
      "explanation": "Agra was a capital of the Mughal Empire. Shah Jahan built the Taj Mahal there, and later moved the capital to Shahjahanabad (Delhi)."
    },
    {
      "question": "The Battle of Plassey in 1757 was fought between the forces of the British East India Company and __________.",
      "options": ["Bengal Sultanate", "Mughal Empire", "Maratha Empire", "Sikh Empire"],
      "correct": 0,
      "explanation": "The battle was fought against Siraj-ud-Daulah, the Nawab of Bengal (which was effectively independent, though nominally part of the Mughal Empire)."
    },
    {
      "question": "The Swadeshi movement, which aimed at promoting Indian-made products, was a part of the __________.",
      "options": ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
      "correct": 0,
      "explanation": "The Swadeshi movement (boycotting British goods, promoting Indian goods) was a key component of the Non-Cooperation Movement (1920-1922)."
    },
    {
      "question": "The Dandi March, a significant event in the Indian independence movement, was led by __________.",
      "options": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
      "correct": 0,
      "explanation": "The Dandi March (or Salt March) in 1930 was an act of non-violent civil disobedience led by Mahatma Gandhi to protest the British salt monopoly."
    },
    {
      "question": "The Indian state of Tamil Nadu is known for its classical dance form called __________.",
      "options": ["Bharatanatyam", "Kathak", "Manipuri", "Kuchipudi"],
      "correct": 0,
      "explanation": "Bharatanatyam is a major classical dance form that originated in the temples of Tamil Nadu."
    },
    {
      "question": "The city of Varanasi is considered a holy site in which two major religions?",
      "options": ["Hinduism and Jainism", "Hinduism and Buddhism", "Buddhism and Sikhism", "Jainism and Sikhism"],
      "correct": 0,
      "explanation": "Varanasi is one of the holiest cities for Hindus. It is also a holy site for Jains, as it is believed to be the birthplace of four Jain Tirthankaras."
    },
    {
      "question": "The Red Fort, a historic fort complex in Delhi, was constructed by which Mughal emperor?",
      "options": ["Shah Jahan", "Aurangzeb", "Akbar", "Jahangir"],
      "correct": 0,
      "explanation": "Emperor Shah Jahan built the Red Fort (Lal Qila) when he moved his capital from Agra to Delhi (Shahjahanabad)."
    },
    {
      "question": "The ancient city of Hampi, a UNESCO World Heritage Site, was the capital of which empire?",
      "options": ["Vijayanagara Empire", "Chola Empire", "Pallava Empire", "Hoysala Empire"],
      "correct": 0,
      "explanation": "Hampi was the capital of the powerful Vijayanagara Empire in the 14th-16th centuries."
    },
    {
      "question": "The Sanchi Stupa, an important Buddhist monument, is located in which Indian state?",
      "options": ["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Maharashtra"],
      "correct": 0,
      "explanation": "The Great Stupa at Sanchi is located in the Raisen district of Madhya Pradesh."
    },
    {
      "question": "The Jallianwala Bagh massacre, a tragic incident during the British colonial rule, took place in which Indian city?",
      "options": ["Amritsar", "Mumbai", "Kolkata", "Lahore"],
      "correct": 0,
      "explanation": "The Jallianwala Bagh massacre occurred on April 13, 1919, in Amritsar, Punjab, when British troops fired on a crowd of unarmed Indian protestors."
    },
    {
      "question": "The Indian National Army (INA), also known as the Azad Hind Fauj, was formed by __________.",
      "options": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
      "correct": 0,
      "explanation": "While originally formed by Rash Behari Bose, the INA was revived and led by Subhas Chandra Bose (Netaji) to fight for Indian independence during WWII."
    },
    {
      "question": "The first President of India was __________.",
      "options": ["Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Dr. B.R. Ambedkar"],
      "correct": 0,
      "explanation": "Dr. Rajendra Prasad was the first President of India, serving from 1950 to 1962."
    },
    {
      "question": "The state of Punjab was divided during the partition of India, with a portion going to __________.",
      "options": ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
      "correct": 0,
      "explanation": "The 1947 partition divided the British province of Punjab into West Punjab (which became part of Pakistan) and East Punjab (which became part of India)."
    },
    {
      "question": "The Quit India Movement was launched in which year?",
      "options": ["1942", "1945", "1947", "1950"],
      "correct": 0,
      "explanation": "The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942, demanding an end to British rule in India."
    },
    {
      "question": "The Constituent Assembly of India adopted the Constitution of India in which year?",
      "options": ["1949", "1947", "1950", "1952"],
      "correct": 0,
      "explanation": "The Constitution of India was adopted by the Constituent Assembly on November 26, 1949, and it came into effect on January 26, 1950."
    },
    {
      "question": "The city of Mumbai was previously known by which name during the British colonial rule?",
      "options": ["Bombay", "Madras", "Calcutta", "Chennai"],
      "correct": 0,
      "explanation": "Mumbai was known as Bombay, a name derived from the Portuguese, until it was officially changed in 1995."
    },
    {
      "question": "The Indian state of Rajasthan is known for its vibrant folk dance form called __________.",
      "options": ["Ghoomar", "Bhangra", "Garba", "Kathakali"],
      "correct": 0,
      "explanation": "Ghoomar is a traditional folk dance of Rajasthan, performed by women on auspicious occasions. Bhangra is from Punjab, Garba from Gujarat, and Kathakali from Kerala."
    },
    {
      "question": "The famous Ajanta and Ellora Caves are located in which Indian state?",
      "options": ["Maharashtra", "Karnataka", "Uttar Pradesh", "Tamil Nadu"],
      "correct": 0,
      "explanation": "The Ajanta and Ellora cave complexes are located in the Aurangabad district of Maharashtra."
    },
    {
      "question": "The Rigveda, the oldest of the Vedas, is composed in which ancient Indian language?",
      "options": ["Sanskrit", "Prakrit", "Pali", "Tamil"],
      "correct": 0,
      "explanation": "The Rigveda is composed in Vedic Sanskrit, an early form of the Sanskrit language."
    },
    {
      "question": "The Mahabharata is an ancient Indian epic that tells the story of a great __________.",
      "options": ["War", "Journey", "Love story", "Spiritual quest"],
      "correct": 0,
      "explanation": "At the heart of the Mahabharata is the Kurukshetra War, a great dynastic battle between the Pandavas and the Kauravas."
    },
    {
      "question": "The festival of Raksha Bandhan celebrates the bond between __________.",
      "options": ["Brothers and sisters", "Parents and children", "Husband and wife", "Friends and relatives"],
      "correct": 0,
      "explanation": "Raksha Bandhan ('the bond of protection') is a festival celebrating the love and duty between brothers and sisters."
    },
    {
      "question": "The famous Sun Temple at Konark is dedicated to which Hindu deity?",
      "options": ["Sun God (Surya)", "Lord Shiva", "Lord Vishnu", "Lord Brahma"],
      "correct": 0,
      "explanation": "The temple is a monumental representation of the Sun God Surya's chariot, with 24 wheels and drawn by seven horses."
    },
    {
      "question": "Takshashila, an ancient center of learning, is located in present-day:",
      "options": ["Pakistan", "India", "Afghanistan", "Nepal"],
      "correct": 0,
      "explanation": "The archaeological site of Takshashila (Taxila) is located in the Punjab province of modern-day Pakistan."
    },
    {
      "question": "Takshashila University is associated with the famous ancient Indian scholar:",
      "options": ["Chanakya", "Aryabhata", "Nagarjuna", "Kalidasa"],
      "correct": 0,
      "explanation": "Chanakya (Kautilya), the advisor to Chandragupta Maurya, is traditionally believed to have been a teacher at Takshashila."
    },
    {
      "question": "Which ancient Indian philosopher is credited with establishing the philosophical school of Nyaya?",
      "options": ["Gotama Maharishi", "Adi Shankaracharya", "Charaka", "Gautama Buddha"],
      "correct": 0,
      "explanation": "Gotama Maharishi (also known as Akshapada Gotama) is credited with founding the Nyaya school of logic and epistemology."
    },
    {
      "question": "The ancient Indian text 'Nalanda Mahavira' provides insights into:",
      "options": ["The history of Nalanda University", "The principles of non-violence", "The art of warfare and strategy", "Vedic mathematics and astronomy"],
      "correct": 0,
      "explanation": "The term 'Nalanda Mahavihara' refers to the great monastic university itself. Texts and accounts *about* it describe its history, curriculum, and life."
    },
    {
      "question": "The transition from hunting-gathering to agriculture in ancient India led to the development of:",
      "options": ["Urban civilizations", "Advanced trade routes", "Metalworking techniques", "The caste system"],
      "correct": 0,
      "explanation": "Agriculture led to surplus food and permanent settlements, which were the necessary foundations for the development of complex urban civilizations like Harappa."
    },
    {
      "question": "The concept of 'Yajna' in ancient Vedic society was associated with:",
      "options": ["Fire sacrifices and rituals", "Hunting rituals", "Agricultural festivals", "Temple construction"],
      "correct": 0,
      "explanation": "Yajna refers to the ritual of making offerings (like ghee, grains) into a consecrated fire (Agni) as a form of worship and sacrifice."
    },
    {
      "question": "The agricultural treatise 'Kautilya's Arthashastra' provides insights into:",
      "options": ["Techniques for irrigation and water management", "Architecture and temple construction", "Military strategies and warfare", "Medicine and healing practices"],
      "correct": 0,
      "explanation": "While the Arthashastra covers many topics (including military strategy), it has detailed sections on agriculture, state-managed farms, and vital water management/irrigation techniques."
    },
    {
      "question": "The Upanishads are a collection of texts that primarily explore:",
      "options": ["Mystical and philosophical concepts", "Social and political issues in ancient India", "The life of Lord Krishna", "Agricultural practices and techniques"],
      "correct": 0,
      "explanation": "The Upanishads (part of the Vedas) delve into metaphysics, philosophy, and the nature of ultimate reality (Brahman) and the self (Atman)."
    },
    {
      "question": "The term 'Jataka' in ancient Indian literature refers to:",
      "options": ["Fables and folktales", "Treatises on agriculture", "Sacred rituals and hymns", "Ancient medical texts"],
      "correct": 0,
      "explanation": "The Jataka tales are a voluminous body of literature in Buddhism that recount the previous births of Gautama Buddha, often in the form of fables."
    },
    {
      "question": "The Rigveda primarily consists of:",
      "options": ["Philosophical hymns and prayers", "Rituals and ceremonies", "Historical accounts of ancient India", "Love poetry and epics"],
      "correct": 0,
      "explanation": "The Rigveda Samhita is a collection of 1,028 hymns (sūktas) and 10,600 verses, organized into ten books (maṇḍalas), primarily praising various deities."
    },
    {
      "question": "The concept of 'Atman' in the Upanishads refers to:",
      "options": ["The eternal soul or self", "The ruler of a kingdom", "A sacred dance form", "A type of Vedic sacrifice"],
      "correct": 0,
      "explanation": "Atman is a central concept in Hindu philosophy, representing the true, eternal self or soul of an individual, which is ultimately one with Brahman."
    },
    {
      "question": "The character of Draupadi in the Mahabharata is known for her exceptional skills in:",
      "options": ["Diplomacy and statecraft", "Archery", "Singing and dancing", "Healing and medicine"],
      "correct": 0,
      "explanation": "While known for her beauty and resilience, Draupadi is often portrayed as intelligent, sharp-witted, and deeply involved in the political and diplomatic matters of the Pandavas."
    },
    {
      "question": "The Iron Pillar of Delhi, known for its rust-resistant composition, dates back to the time of __________.",
      "options": ["Gupta dynasty", "Chandragupta Maurya", "Ashoka the Great", "Harsha Vardhana"],
      "correct": 0,
      "explanation": "The inscription on the pillar identifies a king named Chandra, who is generally identified with the Gupta Emperor Chandragupta II."
    },
    {
      "question": "The term 'Dharma' in ancient Indian context refers to __________.",
      "options": ["Religious duty and righteousness", "Social status and caste", "Political power and authority", "Material wealth and prosperity"],
      "correct": 0,
      "explanation": "Dharma is a complex concept signifying righteousness, moral law, duty, and the cosmic order that one must uphold."
    },
    {
      "question": "Which ancient Indian civilization is known for its well-planned cities and advanced drainage systems?",
      "options": ["Harappa", "Mohenjo-Daro", "Vedic civilization", "Mauryan Empire"],
      "correct": 0,
      "explanation": "Harappa (and Mohenjo-Daro) are the type-sites for the Indus Valley Civilization, which is famous for its sophisticated urban planning and drainage."
    },
    {
      "question": "The ancient Indian text 'Arthashastra' primarily focuses on:",
      "options": ["Statecraft and political governance", "Religious rituals and ceremonies", "Astrological predictions", "Trade and commerce in ancient India"],
      "correct": 0,
      "explanation": "The Arthashastra, attributed to Chanakya, is a comprehensive treatise on statecraft, economic policy, military strategy, and political governance."
    },
    {
      "question": "The ancient Indian term 'Janapada' refers to:",
      "options": ["A republic or territorial state", "A class of Vedic priests", "An advanced form of agricultural tools", "A sacred dance form in ancient India"],
      "correct": 0,
      "explanation": "Janapadas were the major republics or kingdoms of the Vedic period, which later evolved into the 16 Mahajanapadas."
    },
    {
      "question": "The 'Aranyakas' in ancient Vedic literature are associated with:",
      "options": ["Forest dwellers and hermits", "Rituals and sacrifices", "Rules of warfare", "Art and architecture"],
      "correct": 0,
      "explanation": "The Aranyakas ('forest texts') are part of the Vedas, containing philosophical interpretations of rituals, typically studied by hermits in the forest."
    },
    {
      "question": "The ancient Indian system of education, where students lived with their teachers in an ashram, was known as:",
      "options": ["Gurukula", "University", "Madrasa", "Monastery"],
      "correct": 0,
      "explanation": "The Gurukula system involved students living with or near their Guru (teacher) to receive education in various subjects."
    },
    {
      "question": "Nalanda University was a renowned center for the study of:",
      "options": ["Buddhism and other subjects", "Medicine and surgery", "Astronomy and astrology", "Vedic literature and rituals"],
      "correct": 0,
      "explanation": "While Nalanda was a Mahavihara (Buddhist monastery), its curriculum was vast, including philosophy, logic, grammar, medicine, and astronomy, not just Buddhism."
    },
    {
      "question": "The decline of Nalanda University was primarily due to:",
      "options": ["Invasion and destruction by foreign armies", "Lack of funding and support from rulers", "Emergence of other competing universities", "Internal conflicts and disputes among scholars"],
      "correct": 0,
      "explanation": "Nalanda was severely damaged and its library burned by invaders, most notably by the forces of Bakhtiyar Khalji around 1200 CE, leading to its eventual decline."
    },
    {
      "question": "Makar Sankranti is celebrated to mark the transition of the Sun into which zodiac sign?",
      "options": ["Capricorn", "Aries", "Cancer", "Libra"],
      "correct": 0,
      "explanation": "Makar Sankranti marks the Sun's entry (Sankranti) into the zodiac sign of Makara (Capricorn), signaling the end of winter and the start of longer days."
    },
    {
      "question": "The Great Bath, an important structure in the ancient city of Mohenjo-daro, was used for __________.",
      "options": ["Ritual bathing", "Drinking water", "Animal sacrifices", "Community gatherings"],
      "correct": 0,
      "explanation": "The Great Bath is widely believed to have been used for special religious functions or ceremonial bathing, highlighting the importance of ritual purity."
    }
  ],
  2: [ // Unit 2: Engineering, Technology, and Architecture
    {
      "question": "____ is considered the precursor to the Harappan civilization and exhibits early evidence of engineering practices.",
      "options": ["Mehrgarh", "Mesopotamian Civilization", "Vedic Age", "Egyptian civilization"],
      "correct": 0,
      "explanation": "Mehrgarh is one of the earliest sites with evidence of farming and herding in South Asia, and is seen as a precursor to the Indus Valley Civilization. (Note: The source file's options were incorrect; this reflects the user's example)."
    },
    {
      "question": "___ is the scientific techniques and methods used to analyze substances like juices, dyes, paints, and cements?",
      "options": ["Laboratory Technology", "Metallurgy", "Glass Technology", "Marine Technology"],
      "correct": 0,
      "explanation": "Laboratory technology encompasses the scientific techniques and methods used for the analysis of various substances in a controlled environment."
    },
    {
      "question": "The process of creating objects from glass and pottery is known as ___",
      "options": ["Ceramics", "Metallurgy", "Painting", "Engineering Science and Technology"],
      "correct": 0,
      "explanation": "Ceramics is the broad art and science of making objects from inorganic, non-metallic materials (like clay) by the action of heat. This includes pottery and glass."
    },
    {
      "question": "___ is credited with the development of advanced metallurgical techniques",
      "options": ["Sindhu Valley Civilization", "Vedic Age", "Mesopotamian Civilization", "Post-Vedic Record"],
      "correct": 0,
      "explanation": "The Sindhu Valley (Indus Valley) Civilization had advanced metallurgical skills, including bronze casting (like the 'Dancing Girl') and working with copper, lead, and tin."
    },
    {
      "question": "The famous engineering marvel found in Delhi that showcases the metallurgical expertise of ancient India",
      "options": ["Iron Pillar of Delhi", "Rakhigarhi", "Mehrgarh", "Taj Mahal"],
      "correct": 0,
      "explanation": "The Iron Pillar of Delhi, located in the Qutub complex, is famous for its rust-resistant composition, showcasing advanced ancient Indian metallurgy."
    },
    {
      "question": "The archaeological site known as 'The Cradle of Indian Civilization' is:",
      "options": ["Mehrgarh", "Sindhu Valley Civilization", "Rakhigarhi", "Iron Pillar of Delhi"],
      "correct": 0,
      "explanation": "Mehrgarh is often called the 'Cradle of Indian Civilization' as it is one of the earliest Neolithic sites in South Asia, showing the transition to agriculture."
    },
    {
      "question": "____is known for its advanced urban planning and sophisticated drainage systems.",
      "options": ["Indus Valley Civilization", "Egyptian Civilization", "Roman Civilization", "Mesopotamian Civilization"],
      "correct": 0,
      "explanation": "The Indus Valley Civilization (Harappan Civilization) is renowned for its well-planned cities, grid-like street patterns, and sophisticated drainage and sewage systems."
    },
    {
      "question": "The early urban center of the Indus Valley Civilization is represented by which archaeological site?",
      "options": ["Harappa", "Mehrgarh", "Mohenjo-daro", "Lothal"],
      "correct": 0,
      "explanation": "Harappa was one of the two largest urban centers (along with Mohenjo-daro) and was the first site to be excavated, giving the civilization its name."
    },
    {
      "question": "____ civilization is famous for its mastery of dyeing techniques",
      "options": ["Indus Valley", "Mayan", "Egyptian", "Roman"],
      "correct": 0,
      "explanation": "The Indus Valley Civilization had mastered dyeing techniques, with evidence of dyed cotton found at archaeological sites."
    },
    {
      "question": "In ancient civilizations _____ is used to bind bricks together in their construction.",
      "options": ["Lime", "Cement", "Mud", "Sand"],
      "correct": 0,
      "explanation": "Lime (in the form of mortar or plaster) was widely used in ancient construction, including by the Indus Valley and Roman civilizations, to bind bricks and stones."
    },
    {
      "question": "The ancient art of glassmaking was highly developed in _____ civilization.",
      "options": ["Roman", "Indus Valley", "Mayan", "Egyptian"],
      "correct": 0,
      "explanation": "While glass was made in Egypt and Mesopotamia, the Roman civilization is renowned for developing and spreading advanced glassmaking techniques, like glass blowing, across its empire."
    },
    {
      "question": "_____ is the process of baking clay to create pottery.",
      "options": ["Firing", "Ceramics", "Sculpting", "Glazing"],
      "correct": 0,
      "explanation": "Firing is the high-temperature process in a kiln that sinters the clay body, making it permanent, hard, and durable."
    },
    {
      "question": "____ element contributes to resistance in metallurgical composition.",
      "options": ["Phosphorus", "Copper", "Gold", "Silver"],
      "correct": 0,
      "explanation": "In the specific context of the Delhi Iron Pillar, the high phosphorus content (along with low sulfur/manganese) is a key factor in creating a protective passive film, contributing to its rust resistance."
    },
    {
      "question": "The earliest known example of the extraction of zinc from its ore was found in ____civilization.",
      "options": ["Indus Valley", "Mayan", "Egyptian", "Roman"],
      "correct": 0,
      "explanation": "Ancient India (part of the greater Indus Valley region) was a pioneer in zinc metallurgy. The Zawar mines in Rajasthan show evidence of zinc extraction dating back centuries BCE."
    },
    {
      "question": "The Vedic texts provide insights into ancient Indian knowledge on _____ .",
      "options": ["Astronomy and Mathematics", "Textile Manufacturing", "Shipbuilding", "Glassmaking"],
      "correct": 0,
      "explanation": "The Vedas and their appendices (Vedangas) contain significant knowledge on astronomy (Jyotisha) and mathematics (Shulbasutras for geometry)."
    },
    {
      "question": "The Arthashastra, an ancient Indian treatise, discusses topics related to _____.",
      "options": ["Statecraft and Economics", "Yoga and Meditation", "Architecture and Engineering", "Sculpture and Artistry"],
      "correct": 0,
      "explanation": "The Arthashastra, attributed to Chanakya, is a comprehensive treatise on statecraft, political science, economic policy, and military strategy."
    },
    {
      "question": "The Iron Pillar of Delhi is associated with which historical period?",
      "options": ["Gupta Empire", "Mughal Empire", "Mauryan Empire", "Chola Dynasty"],
      "correct": 0,
      "explanation": "The pillar's inscription mentions a king named 'Chandra,' who is widely identified by scholars as the Gupta Emperor Chandragupta II."
    },
    {
      "question": "What makes the Iron Pillar of Delhi unique in terms of its metallurgy?",
      "options": ["It is remarkably resistant to rust due to its composition", "It is a pure iron structure", "It was cast using advanced forging techniques", "It is made entirely of gold"],
      "correct": 0,
      "explanation": "Its fame rests on its incredible resistance to corrosion, attributed to its high phosphorus content, low sulfur/manganese, and environmental factors creating a protective layer."
    },
    {
      "question": "Rakhigarhi and Mehrgarh are associated with ____ civilization.",
      "options": ["Indus Valley", "Mayan", "Egyptian", "Sumerian"],
      "correct": 0,
      "explanation": "Mehrgarh is a Neolithic precursor, and Rakhigarhi is one of the largest cities of the mature Indus Valley (Harappan) Civilization."
    },
    {
      "question": "What does the archaeological site of Rakhigarhi reveal about the Indus Valley Civilization?",
      "options": ["Evidence of urban planning and settlement", "Maritime trade routes", "Hieroglyphic writing system", "Advanced pottery techniques"],
      "correct": 0,
      "explanation": "Rakhigarhi, as a major city, provides extensive evidence of a well-planned urban settlement with streets, drainage systems, and distinct residential areas."
    },
    {
      "question": "The ancient Harappans have engaged in maritime trade with _____region.",
      "options": ["Mesopotamia", "Africa", "South America", "Scandinavia"],
      "correct": 0,
      "explanation": "There is significant archaeological evidence, including Harappan seals found in Mesopotamian sites, that proves a robust maritime trade network existed between the two civilizations."
    },
    {
      "question": "________ advanced engineering technique allowed ancient civilizations to construct seaworthy boats and ships.",
      "options": ["Sewn Plank Technique", "Stone Carving", "Adobe Construction", "Thatch Roofing"],
      "correct": 0,
      "explanation": "The sewn-plank technique, where planks are 'sewn' or tied together with cords, was a common shipbuilding method in ancient India and other regions, creating flexible and durable hulls."
    },
    {
      "question": "The cities of the Indus Valley Civilization were known for their _____",
      "options": ["Rectangular street patterns", "Spiral street patterns", "Circular streets", "Random street patterns"],
      "correct": 0,
      "explanation": "IVC cities like Mohenjo-daro and Harappa are famous for their grid-like or rectangular street patterns, indicating a high degree of urban planning."
    },
    {
      "question": "_______ language is believed to be associated with Harappan scripts.",
      "options": ["Dravidian", "Indo-European", "Sino-Tibetan", "Semitic"],
      "correct": 0,
      "explanation": "While the script remains undeciphered, a leading hypothesis (the Dravidian hypothesis) suggests that the language underlying the script belongs to the Dravidian family."
    },
    {
      "question": "What type of laboratory apparatus was commonly used in ancient civilizations for distillation and extraction?",
      "options": ["Alembic", "Microscope", "Telescope", "Thermometer"],
      "correct": 0,
      "explanation": "The alembic is an early distillation apparatus, consisting of two vessels connected by a tube, used by alchemists and chemists for centuries."
    },
    {
      "question": "______ was commonly used to create the color red during civilization.",
      "options": ["Iron Oxide", "Copper Sulfate", "Zinc Oxide", "Lead Carbonate"],
      "correct": 0,
      "explanation": "Iron oxide (in the form of red ochre) is one of the oldest pigments used by humanity, providing a stable and abundant source for the color red."
    },
    {
      "question": "Ancient glassmakers often used _____ material to create glass.",
      "options": ["Silica", "Gold", "Platinum", "Uranium"],
      "correct": 0,
      "explanation": "The primary component of almost all glass is silica, which is most commonly obtained from sand."
    },
    {
      "question": "What is the primary difference between earthenware and stoneware pottery?",
      "options": ["Firing temperature", "Decorative patterns", "Clay composition", "Glazing techniques"],
      "correct": 0,
      "explanation": "Earthenware is fired at lower temperatures (making it porous), while stoneware is fired at higher temperatures until it becomes vitrified (non-porous)."
    },
    {
      "question": "______is the process of adding a thin layer of zinc to iron or steel to prevent corrosion",
      "options": ["Galvanizing", "Forging", "Alloying", "Tempering"],
      "correct": 0,
      "explanation": "This process is called galvanizing. Zinc corrodes preferentially to the iron, acting as a sacrificial layer to protect the steel."
    },
    {
      "question": "The ancient technique of lost-wax casting was used for creating ________",
      "options": ["Metal Sculptures", "Textiles", "Glassware", "Pottery"],
      "correct": 0,
      "explanation": "The lost-wax (cire-perdue) technique is a method for casting complex metal sculptures. The 'Dancing Girl' from Mohenjo-daro is a famous example."
    },
    {
      "question": "The concept of 'Vimana' mentioned in ancient texts is associated with _____.",
      "options": ["Aircraft-like vehicles", "Boats", "Temples", "Forts"],
      "correct": 0,
      "explanation": "In Sanskrit epics, Vimanas are described as mythical flying palaces or chariots, often interpreted as aircraft-like vehicles."
    },
    {
      "question": "The Vedas, ancient Indian scriptures, contains ______.",
      "options": ["Mathematics and Astronomy", "Computer programming", "Modern physics", "Microbiology"],
      "correct": 0,
      "explanation": "The appendices to the Vedas, known as Vedangas, include Jyotisha (astronomy) and Kalpa (which includes the Shulbasutras for geometry/mathematics)."
    },
    {
      "question": "The Iron Pillar of Delhi is inscribed with a Sanskrit inscription dedicated to______ deity",
      "options": ["Vishnupad", "Shiva", "Rama", "Krishna"],
      "correct": 0,
      "explanation": "The inscription states that the pillar was set up as a 'dhvaja' (standard) of the god Vishnu on a hill known as Vishnupada."
    },
    {
      "question": "The Iron Pillar is currently located at ________historical site in Delhi",
      "options": ["Qutub Complex", "Red Fort", "Humayun's Tomb", "India Gate"],
      "correct": 0,
      "explanation": "The pillar stands in the courtyard of the Quwwat-ul-Islam Mosque, which is part of the Qutub Complex in Mehrauli, Delhi."
    },
    {
      "question": "________ is the ancient Indus Valley Civilization site which is considered one of the largest Harappan cities",
      "options": ["Rakhigarhi", "Harappa", "Mohenjo-daro", "Lothal"],
      "correct": 0,
      "explanation": "Rakhigarhi, located in modern-day Haryana, has been identified as one of the largest, if not the largest, city of the Indus Valley Civilization."
    },
    {
      "question": "The archaeological site of Mehrgarh is situated in _______.",
      "options": ["Pakistan", "India", "Afghanistan", "Nepal"],
      "correct": 0,
      "explanation": "Mehrgarh is located in the Kacchi Plain of Balochistan, Pakistan."
    },
    {
      "question": "Ancient mariners often used _______ celestial navigation used to determine their position at sea. What celestial body was commonly used for this purpose",
      "options": ["Stars", "Mars", "Moon", "Venus"],
      "correct": 0,
      "explanation": "Stars, particularly Polaris (the North Star) in the Northern Hemisphere, were crucial for celestial navigation to determine latitude and direction."
    },
    {
      "question": "_____ wind pattern is known for bringing heavy rains to the Indian subcontinent",
      "options": ["Monsoons", "Polar easterlies", "Westerlies", "Trade winds"],
      "correct": 0,
      "explanation": "The seasonal reversal of winds known as the Monsoons (especially the Southwest Monsoon) brings essential heavy rainfall to the Indian subcontinent."
    },
    {
      "question": "_______river played a significant role in the development of the Indus Valley Civilization",
      "options": ["Indus", "Nile", "Tigris", "Ganges"],
      "correct": 0,
      "explanation": "The civilization is named after the Indus River, along whose plains and tributaries it flourished."
    },
    {
      "question": "________is the purpose of the Great Bath found at Mohenjo-Daro",
      "options": ["Public bathing and ceremonial use", "Ritual sacrifice", "Drinking water storage", "Agricultural irrigation"],
      "correct": 0,
      "explanation": "Most scholars agree the Great Bath was likely used for ritual or ceremonial purposes, emphasizing public bathing and purity."
    },
    {
      "question": "_____ civilization is known for its use of a sophisticated drainage system in urban planning",
      "options": ["Indus Valley", "Mayan", "Egyptian", "Sumerian"],
      "correct": 0,
      "explanation": "The Indus Valley Civilization is famous for its advanced sanitation, with covered drains running along the streets of its cities."
    },
    {
      "question": "The use of 'lime plaster' in construction was prevalent in ______civilization",
      "options": ["Indus Valley", "Mayan", "Egyptian", "Sumerian"],
      "correct": 0,
      "explanation": "The Harappans (Indus Valley) used lime plaster and gypsum mortar in their construction, including for lining drains and the Great Bath."
    },
    {
      "question": "______ is the name for the process of firing pottery at a high temperature to strengthen it",
      "options": ["Baking", "Glazing", "Sculpting", "Tempering"],
      "correct": 0,
      "explanation": "This is a slightly ambiguous question. 'Firing' is the correct technical term, but 'Baking' is a common synonym and the likely intended answer."
    },
    {
      "question": "The technique of adding metallic oxides to pottery glazes to achieve specific colors is known as ________",
      "options": ["Stoneware", "Porcelain", "Earthenware", "Majolica"],
      "correct": 0,
      "explanation": "This question is poorly formed; the options are types of pottery, not techniques. However, 'Majolica' is a type of tin-glazed earthenware where colors (from oxides) are painted on the glaze."
    },
    {
      "question": "The Chola dynasty of ancient India is known for their expertise in ______ metal",
      "options": ["Bronze", "Iron", "Gold", "Silver"],
      "correct": 0,
      "explanation": "The Chola period is renowned for its exquisite lost-wax bronze sculptures, particularly the iconic Nataraja (dancing Shiva) statues."
    },
    {
      "question": "________is the process of separating metal from its ore by heating it",
      "options": ["Smelting", "Alloying", "Forging", "Quenching"],
      "correct": 0,
      "explanation": "Smelting is the process of extracting a metal from its ore by heating it, often with a reducing agent like carbon."
    },
    {
      "question": "The concept of 'Yantra' in ancient texts refers to ________.",
      "options": ["Mechanical devices", "Healing herbs", "Meditation techniques", "Astronomical predictions"],
      "correct": 0,
      "explanation": "In a technical context (like the *Samarangana Sutradhara*), 'Yantra' refers to machines, contraptions, or mechanical devices."
    },
    {
      "question": "The 'Sushruta Samhita' is an ancient text known for its detailed information on _______.",
      "options": ["Surgery and Medicine", "Mathematics", "Agriculture", "Architecture"],
      "correct": 0,
      "explanation": "The *Sushruta Samhita* is a foundational text of Ayurveda, particularly famous for its detailed descriptions of surgical procedures, including plastic surgery."
    },
    {
      "question": "______ is the approximate height of the Iron Pillar of Delhi",
      "options": ["7 meters", "5 meters", "3 meters", "15 meters"],
      "correct": 0,
      "explanation": "The total height of the pillar is 7.21 meters (or 23 feet 8 inches) from the ground to the top."
    },
    {
      "question": "The site of Rakhigarhi is located in _______ modern-day state of India",
      "options": ["Haryana", "Punjab", "Rajasthan", "Gujarat"],
      "correct": 0,
      "explanation": "Rakhigarhi is located in the Hisar district of the state of Haryana."
    },
    {
      "question": "What is the significance of the site of Mehrgarh in the context of the Indus Valley Civilization?",
      "options": ["It is one of the earliest agricultural settlements leading to urbanization", "It is home to the most advanced architecture", "It was the capital city", "It is the largest city of the civilization"],
      "correct": 0,
      "explanation": "Mehrgarh is a crucial Neolithic site that shows the early stages of agricultural development and settlement that eventually led to the urban Harappan Civilization."
    },
    {
      "question": "The Iron Pillar of Delhi is made primarily of ______metal",
      "options": ["Iron", "Pure Steel", "Silver", "Gold"],
      "correct": 0,
      "explanation": "The pillar is made of 98% wrought iron, though its unique composition (high phosphorus) makes it different from modern iron."
    },
    {
      "question": "The 'Konark Sun Temple' in India is known for its architectural representation of _______celestial navigation tool",
      "options": ["Chariot wheels", "Altitudes", "Compass", "Astrolabe"],
      "correct": 0,
      "explanation": "The temple is designed as a giant chariot for the Sun God. Its 24 large wheels (chariot wheels) are intricately carved and can be used as sundials to tell time."
    },
    {
      "question": "Ancient maritime trade routes connected the Indus Valley Civilization with ____civilization",
      "options": ["Mesopotamia", "Roman", "Egyptian", "Sumerian"],
      "correct": 0,
      "explanation": "Archaeological evidence, such as Harappan seals found in Mesopotamia (and Mesopotamian texts mentioning 'Meluhha', believed to be the IVC), confirms this trade."
    },
    {
      "question": "_______is the purpose of the citadel mound in Indus Valley Civilization cities",
      "options": ["Administrative and religious center", "Residential area", "Marketplace", "Agricultural fields"],
      "correct": 0,
      "explanation": "The 'citadel' or acropolis was a raised, fortified area in IVC cities, believed to house important public, administrative, and religious buildings (like the Great Bath)."
    },
    {
      "question": "The discovery of _______type of artifact at Harappan sites suggests a highly organized trade network",
      "options": ["Seal", "Pottery shard", "Weapon", "Musical instrument"],
      "correct": 0,
      "explanation": "The standardized steatite seals, with animal motifs and script, were likely used to stamp goods for trade, indicating an organized system of commerce."
    },
    {
      "question": "The Indus Valley Civilization is known for its use of _________",
      "options": ["Brick-lined drains", "Gutter pipes", "Wooden channels", "Stone channels"],
      "correct": 0,
      "explanation": "A key feature of IVC urban planning was the sophisticated system of covered drains, often lined with baked bricks, running alongside the streets."
    },
    {
      "question": "The use of lime-based cement in construction was a characteristic of ______ civilization",
      "options": ["Roman", "Mesopotamia", "Egyptian", "Sumerian"],
      "correct": 0,
      "explanation": "The Romans were masters of cement and concrete (opus caementicium), using lime and volcanic ash (pozzolana) to build durable structures like the Pantheon."
    },
    {
      "question": "Ancient glass beads found at Indus Valley Civilization sites were used for______",
      "options": ["Trade and ornamentation", "Cooking", "Medicine", "Religious rituals"],
      "correct": 0,
      "explanation": "Glass beads, along with those made of faience, steatite, and semi-precious stones, were used for personal ornamentation (jewelry) and were valuable trade items."
    },
    {
      "question": "The potter's wheel revolutionized pottery-making in ancient times. Evidence of its early use found in _________",
      "options": ["Mesopotamia Civilization", "Indus Valley Civilization", "Roman Civilization", "Egyptian Civilization"],
      "correct": 0,
      "explanation": "The potter's wheel is believed to have been invented in Mesopotamia (Sumer) around the 4th millennium BCE, before spreading to other civilizations."
    },
    {
      "question": "______ was the primary source of copper for the Indus Valley Civilization's metallurgical activities",
      "options": ["Ores from Rajasthan and Baluchistan", "Imported ores from Egypt", "Local riverbed deposits", "Copper-rich soil"],
      "correct": 0,
      "explanation": "The Harappans sourced copper primarily from the Khetri mines in Rajasthan and from Baluchistan (in modern-day Pakistan)."
    },
    {
      "question": "The alloy of copper and tin that played a crucial role in ancient metallurgy is known as ___",
      "options": ["Bronze", "Brass", "Steel", "Iron"],
      "correct": 0,
      "explanation": "Bronze, an alloy of copper and tin, is harder and more durable than pure copper, giving its name to the 'Bronze Age'."
    },
    {
      "question": "The 'Arthashastra' discusses various aspects of governance, including ________",
      "options": ["Economic policies and administration", "Music and dance", "Religious rituals", "Poetry and literature"],
      "correct": 0,
      "explanation": "The Arthashastra is a treatise on statecraft, which extensively covers economic policy, taxation, and public administration."
    },
    {
      "question": "The 'Sulaba Sutras' are ancient texts that provide knowledge about ________",
      "options": ["Geometry and mathematics for constructing altars", "Medical treatments", "Astrological predictions", "Musical instruments"],
      "correct": 0,
      "explanation": "The Shulbasutras (or Sulabasutras) are appendices to the Vedas that contain geometrical rules for the precise construction of fire altars (Yajna vedis)."
    },
    {
      "question": "The Iron Pillar of Delhi was originally erected in _______ historical site",
      "options": ["Udayagiri", "Mohenjo-Daro", "Harappa", "Sarnath"],
      "correct": 0,
      "explanation": "The pillar was originally erected at a site identified as Vishnupada, which is believed to be modern Udayagiri, Madhya Pradesh, before being moved to Delhi."
    },
    {
      "question": "The inscription on the Iron Pillar mentions a king who belonged to _____ dynasty",
      "options": ["Gupta", "Chandra", "Mughal", "Maurya"],
      "correct": 0,
      "explanation": "The inscription mentions 'Chandra', who is identified as a Gupta dynasty king (Chandragupta II). (Note: 'Chandra' is the name, 'Gupta' is the dynasty)."
    },
    {
      "question": "The ancient city of Lothal was a prominent center for ______",
      "options": ["Trade and maritime activities", "Bead-making", "Textile manufacturing", "Iron smelting"],
      "correct": 0,
      "explanation": "Lothal, in modern-day Gujarat, was a vital port city of the IVC, known for its large dockyard and as a center for maritime trade."
    },
    {
      "question": "The people of the Indus Valley Civilization are believed to have used a standardized system of weights and measures made of _______",
      "options": ["Steatite", "Gold", "Copper", "Silver"],
      "correct": 0,
      "explanation": "The IVC had a highly standardized system of weights, often made of chert or steatite, based on a binary and decimal system."
    },
    {
      "question": "Ancient seafaring merchants relied on _______ natural phenomenon to navigate across long distances",
      "options": ["Stars and constellations", "Magnetic compasses", "Sextants", "Clocks"],
      "correct": 0,
      "explanation": "Long before compasses or sextants, ancient mariners used the positions of the stars (like Polaris) and constellations to determine latitude and direction."
    },
    {
      "question": "The construction of the ancient port city of Lothal showcases the Indus Valley Civilization's expertise in ______",
      "options": ["Maritime trade and shipbuilding", "Monumental architecture", "Irrigation techniques", "Astronomy and observatories"],
      "correct": 0,
      "explanation": "Lothal's most famous feature is its large, engineered dockyard, which demonstrates advanced knowledge of hydraulics and maritime engineering for trade."
    },
    {
      "question": "_____advanced technique was used in the construction of the Great Bath of Mohenjo-Daro",
      "options": ["Waterproofing using bitumen", "Marble carving", "Gold leaf application", "Timber framing"],
      "correct": 0,
      "explanation": "The floor and walls of the Great Bath were made watertight using finely fitted bricks, gypsum plaster, and a thick layer of natural bitumen (tar)."
    },
    {
      "question": "The Indus Valley Civilization had a standardized system of weights and measures, with units based on ______body part",
      "options": ["Cubit", "Foot", "Finger", "Palm"],
      "correct": 0,
      "explanation": "The 'Indus cubit' (or 'Hath') was a unit of length (around 13.2 inches) based on the forearm, evidenced by a measuring rod found at Lothal."
    },
    {
      "question": "The Indus Valley Civilization had an extensive trade network. _____evidence suggests their participation in long-distance trade",
      "options": ["Exotic materials and artifacts", "Fossils", "Ancient coins", "Written contracts"],
      "correct": 0,
      "explanation": "The discovery of IVC seals in Mesopotamia and materials not local to the Indus region (like lapis lazuli from Afghanistan) proves long-distance trade."
    },
    {
      "question": "_______ laboratory apparatus was used for distillation and other chemical processes",
      "options": ["Alembic", "Retort", "Test tube", "Pipette"],
      "correct": 0,
      "explanation": "Both the alembic and the retort are early forms of distillation apparatus. The alembic is a common answer for this context."
    },
    {
      "question": "The Indus Valley Civilization was known for producing intricate pottery with designs using________",
      "options": ["Stamping and incising", "Sculpting", "Casting", "Weaving"],
      "correct": 0,
      "explanation": "IVC pottery includes various decorative techniques, such as painting, but also incising (cutting) and stamping regular patterns into the clay."
    },
    {
      "question": "The pottery of the Indus Valley Civilization often featured _________animal motifs",
      "options": ["Unicorn", "Horse", "Elephant", "Lion"],
      "correct": 0,
      "explanation": "The 'unicorn' (a one-horned bull-like creature) is the most common animal motif found on Harappan seals, and also appears on pottery."
    },
    {
      "question": "The 'Harappan tanged spearhead' is an example of sophisticated metallurgy used for _____",
      "options": ["Weapons", "Coins", "Jewelry", "Religious artifacts"],
      "correct": 0,
      "explanation": "A spearhead is a type of weapon, and the Harappan examples show skilled copper-bronze work."
    },
    {
      "question": "The Indus Valley Civilization's knowledge of metallurgy is evidenced by their ability to create _______",
      "options": ["Copper-bronze alloys", "Solid gold objects", "Iron structures", "Platinum ornaments"],
      "correct": 0,
      "explanation": "The IVC was a Bronze Age civilization, and their ability to alloy copper with tin to create bronze for tools, weapons, and statues is a key technological feature."
    },
    {
      "question": "The 'Aitareya Brahmana' discusses various rituals, including those related to __________",
      "options": ["Fire and sacrifices", "Farming techniques", "Medicine and healing", "Marriage ceremonies"],
      "correct": 0,
      "explanation": "The Brahmanas are texts that explain the hymns of the Vedas and provide detailed instructions for fire sacrifices (Yajna) and other rituals."
    },
    {
      "question": "The ancient Indian system of water harvesting and storage, known as 'tanka,' was primarily used in __________region",
      "options": ["Rajasthan", "Deccan Plateau", "Himalayas", "Gangetic Plain"],
      "correct": 0,
      "explanation": "Tankas (underground cisterns) are a traditional rainwater harvesting technique, particularly well-suited for and used in the arid regions of Rajasthan."
    },
    {
      "question": "The inscription on the Iron Pillar of Delhi mentions the accomplishments of _____Gupta king",
      "options": ["Chandragupta II", "Ashoka the Great", "Samudragupta", "Harsha"],
      "correct": 0,
      "explanation": "The king 'Chandra' mentioned in the inscription is identified by most scholars as the powerful Gupta emperor Chandragupta II."
    },
    {
      "question": " ______advanced technique was used to made the Iron Pillar from a single piece of iron",
      "options": ["Forging", "Welding", "Casting", "Electroplating"],
      "correct": 0,
      "explanation": "The pillar was constructed by hammer-welding (forging) multiple pieces of hot wrought iron together, a testament to the skill of ancient Indian blacksmiths."
    },
    {
      "question": "The archaeological site of Dholavira, features _____unique hydraulic structure",
      "options": ["Sophisticated water reservoirs", "Amphitheater", "Ziggurat", "Observatory"],
      "correct": 0,
      "explanation": "Dholavira, located in an arid region (Rann of Kutch), is famous for its exceptionally sophisticated water management system, including large stone-cut reservoirs."
    },
    {
      "question": "________type of seals was commonly used by the people of the Indus Valley Civilization",
      "options": ["Stamp", "Coin", "Amulet", "Cylinder"],
      "correct": 0,
      "explanation": "The Harappans used square or rectangular stamp seals (with a boss on the back) to impress their insignia onto clay, unlike the cylinder seals of Mesopotamia."
    },
    {
      "question": "The ancient port of Lothal had a unique dockyard with a structure known as _______",
      "options": ["Double-walled dock", "Floating pontoon", "Lighthouse", "Drawbridge"],
      "correct": 0,
      "explanation": "Lothal's dock was a massive brick-lined basin. (Note: This question is weak, but 'double-walled dock' may refer to its sturdy brick construction)."
    },
    {
      "question": "__________ship is believed to have been used by ancient sailors for maritime trade in the Indian Ocean",
      "options": ["Sambuk", "Caravel", "Galleon", "Longship"],
      "correct": 0,
      "explanation": "The Sambuk is a type of Dhow, a traditional sailing vessel with lateen sails, commonly used by Arab and Indian sailors for trade in the Indian Ocean."
    }
  ],
  3: [ // Unit 3: Science, Astronomy & Mathematics
    {
      "question": "Which is not the element of 'Panchamahabhutas'?",
      "options": ["Energy", "Earth & Water", "Fire & Air", "Ether"],
      "correct": 0,
      "explanation": "The Panchamahabhutas (five great elements) are Earth (Prithvi), Water (Jala), Fire (Agni), Air (Vayu), and Ether/Space (Akasha). Energy (Urja) is a concept, but not one of these five elemental categories."
    },
    {
      "question": "Which ancient Indian sage proposed the concept of the atom?",
      "options": ["Kanada", "Aryabhata", "Brahmagupta", "Charaka"],
      "correct": 0,
      "explanation": "Acharya Kanada, in his Vaisheshika philosophy, proposed that all matter is composed of indivisible particles called 'Parmanu' (atoms)."
    },
    {
      "question": "According to Indian knowledge system, what is the source of all life?",
      "options": ["Prana", "Karma", "Maya", "Dharma"],
      "correct": 0,
      "explanation": "Prana is the vital life force or energy that permeates the universe and all living things. It is considered the fundamental source of all life and activity."
    },
    {
      "question": "Which ancient Indian text contains detailed descriptions of the universe?",
      "options": ["Vedas", "Upanishads", "Mahabharata", "Ramayana"],
      "correct": 0,
      "explanation": "The Vedas, particularly the Rigveda (e.g., the Nasadiya Sukta), contain the earliest hymns and speculations about the creation and structure of the universe (cosmology)."
    },
    {
      "question": "What is the force that holds the universe together, according to Indian knowledge system?",
      "options": ["Dharma", "Gravity", "Electromagnetism", "Karma"],
      "correct": 0,
      "explanation": "In a philosophical sense, Dharma is the cosmic law or order that upholds the universe and maintains its harmony and structure."
    },
    {
      "question": "Sage Agastya's model of battery was based on which natural phenomenon?",
      "options": ["Electricity", "Magnetism", "Gravity", "Sound waves"],
      "correct": 0,
      "explanation": "The text attributed to Sage Agastya (Agastya Samhita) describes a method to generate electricity using an earthen pot, copper plates, zinc, and other materials, an early form of a galvanic cell."
    },
    {
      "question": "In the Indian knowledge system, which sage is associated with Vimāna, the concept of aeronautics?",
      "options": ["Maharishi Bharadwaja", "Maharishi Bhrigu", "Maharishi Vasistha", "Maharishi Kanva"],
      "correct": 0,
      "explanation": "Maharishi Bharadwaja is often credited as the author of the *Vaimanika Shastra*, a text (disputed as modern) that details the construction and principles of Vimānas (flying machines)."
    },
    {
      "question": "What is the Indian term for the ancient Vedic concept of cosmology?",
      "options": ["Vedanga", "Samhita", "Upanishad", "Brahmana"],
      "correct": 0,
      "explanation": "This is a poor question. None of the options mean 'cosmology'. 'Vedanga' refers to the six auxiliary limbs of the Vedas, one of which (Jyotisha) deals with astronomy, a part of cosmology."
    },
    {
      "question": "According to Indian knowledge system, what is the approximate velocity of light?",
      "options": ["3 lakh yojanas per blink of an eye", "300,000 meters per second", "186,000 miles per second", "1 parsec per hour"],
      "correct": 0,
      "explanation": "This is based on a 14th-century commentary by Sayana on the Rigveda, which gives a value often interpreted as 186,000 miles/sec. The other options are modern values, not IKS."
    },
    {
      "question": "The concept of zero was first introduced by which ancient Indian mathematician?",
      "options": ["Brahmagupta", "Bhaskara II", "Aryabhata", "Ramanujan"],
      "correct": 0,
      "explanation": "While Aryabhata used zero (Shunya) as a placeholder, Brahmagupta (7th century CE) was the first to formalize its mathematical properties and rules for arithmetic operations."
    },
    {
      "question": "Which ancient Indian mathematician is credited with the discovery of the mathematical constant π (pi)?",
      "options": ["Aryabhata", "Bhaskara II", "Brahmagupta", "Ramanujan"],
      "correct": 1,
      "explanation": "Aryabhata, in his *Aryabhatiya* (499 CE), gave a remarkably accurate approximation of π (pi) as 3.1416 and stated it was 'approximate' (āsanna)."
    },
    {
      "question": "What is the base of the number system used in ancient Indian mathematics?",
      "options": ["Base 10", "Base 2", "Base 8", "Base 16"],
      "correct": 0,
      "explanation": "The Hindu-Arabic numeral system, which originated in India, is a decimal (Base 10) positional system."
    },
    {
      "question": "Which theorem, attributed to Pythagoras, was known in ancient Indian mathematics?",
      "options": ["Pythagorean theorem", "Brahmagupta's theorem", "Fermat's Last Theorem", "Euclidean theorem"],
      "correct": 1,
      "explanation": "The principle of the Pythagorean theorem was described much earlier in Indian texts like the *Baudhayana Shulbasutra* for the construction of altars."
    },
    {
      "question": "Which ancient Indian mathematician is known for developing Vedic Mathematics?",
      "options": ["Śrī Bharati Kṛṣhṇa Tīrtha", "Aryabhata", "Brahmagupta", "Bhaskara II"],
      "correct": 0,
      "explanation": "Vedic Mathematics is a system of mental calculation rediscovered (or compiled) by Swami Bharati Krishna Tirtha in the early 20th century, based on 16 'sutras'."
    },
    {
      "question": "The Indian mathematician Aryabhata is known for his work on which branch of mathematics?",
      "options": ["Trigonometry", "Algebra", "Geometry", "Calculus"],
      "correct": 0,
      "explanation": "Aryabhata made foundational contributions to trigonometry, introducing the concepts of sine (jya) and cosine (kojya), and compiling tables of sines."
    },
    {
      "question": "What is the approximate circumference of the Earth, as calculated by ancient Indian astronomers?",
      "options": ["39,968 kilometers", "30,000 kilometers", "50,000 kilometers", "60,000 kilometers"],
      "correct": 0,
      "explanation": "Aryabhata calculated the Earth's circumference as 4,967 yojanas, which translates to approximately 39,968 km—very close to the modern value of 40,075 km."
    },
    {
      "question": "What is the name of the ancient Indian text that describes the history and culture of astronomy?",
      "options": ["Surya Siddhanta", "Siddhnatha siromani", "Aryabhatiya", "Brahma Sphuta Siddhanta"],
      "correct": 0,
      "explanation": "The Surya Siddhanta is a foundational treatise on Indian astronomy, covering topics like planetary motions, eclipses, and astronomical calculations."
    },
    {
      "question": "Which celestial body is considered the source of light and energy in the Indian knowledge system?",
      "options": ["Sun", "Moon", "Earth", "Jupiter"],
      "correct": 0,
      "explanation": "The Sun (Surya) is worshipped as the source of all light, heat, and energy, sustaining life on Earth."
    },
    {
      "question": "Which celestial body is believed to influence human emotions and behavior according to Indian astrology?",
      "options": ["Moon", "Mercury", "Venus", "Mars"],
      "correct": 0,
      "explanation": "In Jyotisha (Indian astrology), the Moon (Chandra) is the 'karaka' (significator) for the mind (Manas) and emotions."
    },
    {
      "question": "What causes a solar eclipse, according to the Indian knowledge system?",
      "options": ["Moon passing between the Sun and the Earth", "Earth passing between the Sun and the Moon", "Alignment of the planets in the solar system", "Random cosmic events"],
      "correct": 0,
      "explanation": "Ancient Indian astronomers like Aryabhata correctly identified the cause of solar eclipses as the Moon's shadow falling on the Earth (Moon blocking the Sun)."
    },
    {
      "question": "What is the scientific term for the spinning of the Earth on its axis?",
      "options": ["Rotation", "Revolution", "Orbit", "Precession"],
      "correct": 0,
      "explanation": "Rotation refers to the spinning of an object on its own axis. Revolution refers to its movement around another object (orbit)."
    },
    {
      "question": "What is the value of zero in the ancient Indian numeral system?",
      "options": ["Shunya", "Ek", "Dash", "Gyarah"],
      "correct": 0,
      "explanation": "The Sanskrit word for zero is 'Shunya,' which means 'void' or 'emptiness'. 'Ek' is one, 'Dash' is ten, 'Gyarah' is eleven."
    },
    {
      "question": "What is the value of pi (π) in the Indian mathematical system?",
      "options": ["3.1416", "3", "3 1/7", "Infinite"],
      "correct": 0,
      "explanation": "Aryabhata gave the value of π (pi) as 3.1416 in his *Aryabhatiya*."
    },
    {
      "question": "Which Indian mathematician is known for his contributions to the concept of infinity?",
      "options": ["Bhaskara II", "Ramanujan", "Aryabhata", "Brahmagupta"],
      "correct": 3,
      "explanation": "Bhaskara II (12th century) was one of the first to explore the concept of infinity, stating that a number divided by zero results in infinity (khahara)."
    },
    {
      "question": "What is the square of the hypotenuse in a right-angled triangle, according to the Pythagorean theorem?",
      "options": ["Sum of the squares of the other two sides", "Difference of the squares of the other two sides", "Product of the other two sides", "Division of the other two sides"],
      "correct": 0,
      "explanation": "The theorem states that a² + b² = c², where 'c' is the hypotenuse (the longest side) and 'a' and 'b' are the other two sides (legs)."
    },
    {
      "question": "The concept of Vedic mathematics is based on which ancient Indian texts?",
      "options": ["Vedas", "Upanishads", "Mahabharata", "Ramayana"],
      "correct": 0,
      "explanation": "The system of 'Vedic Mathematics' compiled by Bharati Krishna Tirtha is claimed to be based on 16 sutras (aphorisms) found in the appendices of the Atharvaveda."
    },
    {
      "question": "Which ancient Indian mathematician is known for his contributions to the concept of zero?",
      "options": ["Brahmagupta", "Aryabhata", "Bhaskara II", "Ramanujan"],
      "correct": 0,
      "explanation": "Brahmagupta (7th century) is renowned for being the first to establish the rules for arithmetic operations (addition, subtraction, multiplication) using zero."
    },
    {
      "question": "What is the value of e (the base of the natural logarithm) in the Indian mathematical system?",
      "options": ["2.718", "2", "3", "3.1416"],
      "correct": 0,
      "explanation": "This is a general mathematical constant, not specific to the IKS, but its value is approximately 2.718. The question is likely testing general knowledge."
    },
    {
      "question": "Which Indian mathematician is known for his discovery of the Fibonacci sequence?",
      "options": ["Virahanka", "Bhaskara II", "Brahmagupta", "Hemachandra"],
      "correct": 0,
      "explanation": "While often attributed to Fibonacci, this sequence was described earlier by Indian mathematicians studying prosody (poetic meters). Virahanka (6th-8th c.) provided rules for it."
    },
    {
      "question": "What is the sum of all angles in a triangle, according to Euclidean geometry?",
      "options": ["180 degrees", "90 degrees", "270 degrees", "360 degrees"],
      "correct": 0,
      "explanation": "A fundamental property of a triangle in Euclidean (flat) geometry is that the sum of its three internal angles is always 180 degrees."
    },
    {
      "question": "What is the sum of all angles in a quadrilateral, according to Euclidean geometry?",
      "options": ["360 degrees", "90 degrees", "180 degrees", "270 degrees"],
      "correct": 0,
      "explanation": "Any convex quadrilateral can be divided into two triangles, and since each triangle has 180 degrees, the total sum is 180 + 180 = 360 degrees."
    },
    {
      "question": "Which ancient Indian mathematician is known for his work on algebraic equations?",
      "options": ["Brahmagupta", "Aryabhata", "Bhaskara II", "Ramanujan"],
      "correct": 0,
      "explanation": "Brahmagupta made significant strides in algebra, providing solutions for systems of simultaneous indeterminate equations and for quadratic equations."
    },
    {
      "question": "Which Indian mathematician is known for his work on the concept of logarithms?",
      "options": ["Srinivasa Ramanujan", "Bhaskara II", "Aryabhata", "Brahmagupta"],
      "correct": 3,
      "explanation": "This is a tricky question as logarithms were formalized by Napier. However, Srinivasa Ramanujan worked extensively with related functions and series, showing a deep understanding of logarithmic properties."
    },
    {
      "question": "Who is best known for his stupendous work in quantum mechanics?",
      "options": ["Satyendra Nath Bose", "Hemachandra", "Ramanujan", "Bhaskara II"],
      "correct": 0,
      "explanation": "Satyendra Nath Bose was a 20th-century physicist whose work on quantum mechanics, in collaboration with Einstein, led to the 'Bose-Einstein statistics' and the concept of the 'boson'."
    },
    {
      "question": "What is the concept of the zeroth law of thermodynamics?",
      "options": ["Heat flow and temperature equilibrium", "Conservation of energy", "Entropy and disorder", "Quantum mechanics"],
      "correct": 0,
      "explanation": "The Zeroth Law states that if two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This defines temperature."
    },
    {
      "question": "Which Indian mathematician is known for his contributions to the concept of complex numbers?",
      "options": ["Srinivasa Ramanujan", "Aryabhata", "Brahmagupta", "Bhaskara II"],
      "correct": 0,
      "explanation": "While complex numbers were studied earlier (e.g., Mahavira noted a negative number has no square root), Ramanujan's work on mock theta functions and modular forms operates deeply within the complex plane."
    },
    {
      "question": "According to Indian knowledge system, what is the ultimate reality?",
      "options": ["Brahman", "Atman", "Maya", "Karma"],
      "correct": 0,
      "explanation": "In Advaita Vedanta philosophy, Brahman is the ultimate, unchanging, and absolute reality that underlies all phenomena in the universe."
    },
    {
      "question": "According to Indian knowledge system, which of these is not the cause of all suffering?",
      "options": ["Jealousy", "Ignorance", "Fear", "Ego"],
      "correct": 0,
      "explanation": "This is subjective, but in many schools (like Buddhism), Ignorance (Avidya) is the *root* cause, from which ego, fear, and jealousy arise. Thus, 'Jealousy' is a *symptom* of suffering, not the root cause itself."
    },
    {
      "question": "What is the ancient Indian term for the study of time and its measurement?",
      "options": ["Kala Vidya", "Moksha", "Samsara", "Karma"],
      "correct": 0,
      "explanation": "Kāla (काल) is the Sanskrit word for 'time'. Vidya (विद्या) means 'knowledge' or 'study'. Moksha is liberation, Samsara is the cycle of rebirth, and Karma is action."
    },
    {
      "question": "Who proposed the concept of Sankhya philosophy in the Indian knowledge system?",
      "options": ["Kapila", "Kanada", "Charaka", "Sushruta"],
      "correct": 0,
      "explanation": "The sage Kapila is traditionally credited as the founder of the Sankhya school of philosophy, which posits a dualism between Purusha (consciousness) and Prakriti (matter)."
    },
    {
      "question": "According to Indian knowledge system, what is the purpose of human life?",
      "options": ["Self-realization and liberation", "Material success", "Pleasure and enjoyment", "Serving society"],
      "correct": 0,
      "explanation": "The ultimate goal (Purushartha) in many Indian philosophies is Moksha, which means liberation from the cycle of rebirth (Samsara) through self-realization."
    },
    {
      "question": "Who proposed the concept of Ayurveda in the Indian knowledge system?",
      "options": ["Charaka", "Kanada", "Sushruta", "Patanjali"],
      "correct": 0,
      "explanation": "Charaka is one of the principal contributors to Ayurveda, with his treatise, the *Charaka Samhita*, being a foundational text on medicine."
    },
    {
      "question": "According to Indian knowledge system, what is the ultimate goal of yoga?",
      "options": ["Self-realization and union with the divine", "Physical fitness", "Mental peace", "Physical fitness"],
      "correct": 0,
      "explanation": "The word 'Yoga' means 'to yoke' or 'unite'. The ultimate goal is the union (Yoga) of the individual self (Atman) with the ultimate reality (Brahman), leading to self-realization."
    },
    {
      "question": "Who is considered the father of Indian mathematics?",
      "options": ["Aryabhata", "Brahmagupta", "Bhaskara II", "Pingala"],
      "correct": 0,
      "explanation": "Aryabhata (5th century CE) is often called the 'father of Indian mathematics' for his foundational contributions to algebra, trigonometry, and astronomy."
    },
    {
      "question": "What is the Indian term for the concept of 'cosmic order' or 'universal harmony'?",
      "options": ["Dharma", "Karma", "Moksha", "Maya"],
      "correct": 0,
      "explanation": "Dharma (related to the root 'dhr', meaning 'to hold' or 'to sustain') refers to the cosmic law and order that upholds the entire universe."
    },
    {
      "question": "Vedic Maths primarily deals with which of the following?",
      "options": ["Arithmetic and Algebra", "Algebra and Geometry", "Trigonometry and Calculus", "Calculus and Probability"],
      "correct": 0,
      "explanation": "The 16 sutras of Vedic Mathematics are primarily techniques for rapid calculation in arithmetic (multiplication, division) and algebra (solving equations)."
    },
    {
      "question": "How many main Vedic Sutras (aphorisms) are there in Vedic Mathematics?",
      "options": ["16", "12", "24", "8"],
      "correct": 0,
      "explanation": "The system of Vedic Mathematics compiled by Swami Bharati Krishna Tirtha is based on 16 main sutras and 13 sub-sutras."
    },
    {
      "question": "Which Vedic Sutra is used for multiplication?",
      "options": ["Urdhva-Tiryagbhyam Sutra", "Nikhilam Sutra", "Anurupyena Sutra", "Paravartya Yojayet Sutra"],
      "correct": 2,
      "explanation": "While 'Nikhilam' and 'Anurupyena' are also for multiplication, 'Urdhva-Tiryagbhyam' ('Vertically and Crosswise') is the main, general-purpose sutra for multiplication."
    },
    {
      "question": "Vedic Maths includes techniques for quick calculations using which number system?",
      "options": ["Decimal Number System", "Binary Number System", "Octal Number System", "Base 10 Number System"],
      "correct": 0,
      "explanation": "Vedic Mathematics techniques are applied to the standard Decimal (Base 10) number system used in everyday calculations. (Note: A and D are identical)."
    },
    {
      "question": "Vedic Maths is known for promoting mental calculations and:",
      "options": ["Speed and accuracy in calculations", "Abacus usage", "Paper and pencil methods", "Use of slide rule"],
      "correct": 0,
      "explanation": "The primary benefit of Vedic Mathematics is that its techniques simplify calculations, allowing them to be performed mentally with greater speed and accuracy."
    },
    {
      "question": "What does the term 'Vimāna' refer to in Indian texts?",
      "options": ["Aerial vehicles or flying machines", "Water vessels used for trading", "Ancient weapons of war", "Sacred temples"],
      "correct": 0,
      "explanation": "In Sanskrit epics and literature, Vimānas are mythical flying vehicles, palaces, or chariots used by the gods."
    },
    {
      "question": "According to ancient Indian texts, Vimānas were used for:",
      "options": ["Aerial travel and transportation", "Underwater exploration", "Agricultural purposes", "Religious ceremonies"],
      "correct": 0,
      "explanation": "The descriptions in texts like the Ramayana show Vimānas (like the Pushpaka Vimāna) being used for aerial travel over long distances."
    },
    {
      "question": "Which ancient Indian epic mentions Vimānas and their usage in battles?",
      "options": ["Ramayana", "Mahabharata", "Bhagavad Gita", "Rigveda"],
      "correct": 1,
      "explanation": "While the Ramayana features the Pushpaka Vimana, the Mahabharata describes various Vimānas being used in divine and terrestrial warfare."
    },
    {
      "question": "Who is often credited with building and using Vimānas in ancient Indian mythology?",
      "options": ["Devas (Gods) and Rishis (Sages)", "Demons (Asuras) and Nagas (Serpents)", "Kings and Warriors", "Brahmins (Priests) and Scholars"],
      "correct": 0,
      "explanation": "In mythology, Vimānas are primarily vehicles of the Devas (gods), but are also built by great architects (like Maya for the Asuras) and used by rishis."
    },
    {
      "question": "The concept of Vimānas is most prominently found in which ancient Indian scriptures?",
      "options": ["Vedas and Puranas", "Upanishads", "Manusmriti", "Aranyakas"],
      "correct": 0,
      "explanation": "While mentioned in the Vedas, detailed descriptions of Vimānas are more prominent in the Epics (Ramayana, Mahabharata) and the Puranas."
    },
    {
      "question": "The term 'Vimāna' is derived from which Sanskrit word?",
      "options": ["Vimaan", "Vayu", "Vriksha", "Vahana"],
      "correct": 0,
      "explanation": "This is a tautological question. 'Vimāna' (विमान) is the Sanskrit word itself. It is often broken down as 'vi-' (apart) and 'māna' (measure), meaning 'measured out' or 'traversing'."
    },
    {
      "question": "The descriptions of Vimānas are also found in texts from which other ancient civilization?",
      "options": ["Sumerian", "Egyptian", "Chinese", "Greek"],
      "correct": 0,
      "explanation": "This is highly speculative, but some proponents of ancient astronaut theories draw parallels between Indian Vimānas and Sumerian depictions of 'flying gods' or 'sky chariots'."
    },
    {
      "question": "Which archaeological discovery supported the possibility of ancient batteries like the one described by Sage Agastya?",
      "options": ["The Mohenjo-Daro excavations", "The Harappa excavations", "The Ajanta Caves inscriptions", "The Baghdad Battery"],
      "correct": 0,
      "explanation": "This question is flawed. The 'Baghdad Battery' (a Mesopotamian artifact) is what's usually cited, but it's not an option. Of the options, Mohenjo-Daro has yielded artifacts (like electroplated items) that *suggest* knowledge of electricity, but this is a weak link."
    },
    {
      "question": "The concept of Sage Agastya's battery is also associated with ancient Indian knowledge in the field of:",
      "options": ["Alchemy", "Architecture", "Medicine", "Astronomy"],
      "correct": 3,
      "explanation": "The *Agastya Samhita* (where the battery is mentioned) is a text associated with alchemy (Rasayana) and esoteric knowledge."
    },
    {
      "question": "According to Agastya Samhita, what applications were envisioned for the battery's electricity?",
      "options": ["Illumination and electroplating", "Transportation and communication", "Weather prediction and rainmaking", "Healing and curing diseases"],
      "correct": 0,
      "explanation": "The text describes using the power for 'jal-bhang' (splitting water), suggesting electrolysis, and for 'mitra' and 'varuna' (light/energy), and for electroplating."
    },
    {
      "question": "What is the historical significance of Sage Agastya's battery?",
      "options": ["It is considered an early example of battery technology", "It was used to power ancient temples", "It was used in warfare", "It was used for medical purposes"],
      "correct": 3,
      "explanation": "If the text is accepted as ancient, its significance is that it describes the principles of a galvanic cell (battery technology) long before Volta."
    },
    {
      "question": "What is the approximate time period for which the battery can produce electricity, as mentioned in the Agastya Samhita?",
      "options": ["A few minutes", "A few days", "A few weeks", "A few weeks"],
      "correct": 1,
      "explanation": "A simple galvanic cell of this type would only produce a small voltage for a limited time, likely minutes or hours, not days or weeks."
    },
    {
      "question": "For generating electricity, Sage Agastya has not used the following material:",
      "options": ["Magnesium", "Copper plate", "Copper sulphate", "One earthen pot"],
      "correct": 0,
      "explanation": "The *Agastya Samhita* recipe typically mentions an earthen pot, copper plate (tamra-pattika), zinc sheet (shikhigriva - zinc), and copper sulphate (tutiya)."
    },
    {
      "question": "According to Sage Agastya's model, what is the primary material used to construct the battery?",
      "options": ["Copper", "Gold", "Iron", "Silver"],
      "correct": 0,
      "explanation": "The battery (galvanic cell) requires two dissimilar metals. Copper (tamra) is explicitly mentioned as one of the key electrodes."
    },
    {
      "question": "Vedic cosmology divides the universe into how many main realms or lokas?",
      "options": ["7", "5", "6", "11"],
      "correct": 0,
      "explanation": "Vedic and Puranic cosmology often describes seven upper realms (lokas) (Bhu, Bhuva, Svar, Mahar, Jana, Tapa, Satya) and seven lower realms (patalas)."
    },
    {
      "question": "Which of the following is a concept in Vedic cosmology that correlates with the modern idea of the Big Bang theory?",
      "options": ["Hiranyagarbha", "Samsara", "Purusha", "Brahma"],
      "correct": 0,
      "explanation": "Hiranyagarbha ('golden womb' or 'golden egg') is a Vedic concept describing the 'cosmic egg' from which the universe emerged, a single point of origin similar to the Big Bang singularity."
    },
    {
      "question": "The Vedic concept of 'Yugas' corresponds to which modern scientific concept?",
      "options": ["Geological ages", "Solar eclipses", "Seasons", "Lunar phases"],
      "correct": 0,
      "explanation": "The Yugas (Satya, Treta, Dvapara, Kali) are vast cycles of time, analogous to the large-scale 'Ages' used in geology to divide Earth's history."
    },
    {
      "question": "According to Vedic cosmology, the Earth is considered to be:",
      "options": ["A sphere", "Flat", "Hollow", "Pyramid-shaped"],
      "correct": 0,
      "explanation": "Astronomical texts like the *Surya Siddhanta* and Aryabhata's *Aryabhatiya* clearly describe the Earth (Bhugola) as a sphere (gola)."
    },
    {
      "question": "According to Vedic cosmology, the universe is believed to be:",
      "options": ["Infinite and cyclical", "Finite and linear", "Expanding exponentially", "Static and unchanging"],
      "correct": 0,
      "explanation": "Hindu cosmology describes the universe as cyclical, undergoing endless cycles of creation (srishti) and dissolution (pralaya). It is also considered infinitely vast."
    },
    {
      "question": "In ancient Indian astronomy, what term is used for the study of astronomical positions, movements, and timekeeping?",
      "options": ["Jyotish", "Ayurveda", "Tantra", "Vedanta"],
      "correct": 0,
      "explanation": "Jyotisha (or Jyotish) is the Vedanga (limb of the Vedas) dedicated to astronomy and timekeeping, which later also included astrology."
    },
    {
      "question": "The ancient Indian text 'Surya Siddhanta' deals with the study of:",
      "options": ["Astronomy and Sun", "Earthquakes and Volcanoes", "Lunar cycles and Tides", "Solar energy and Sustainable development"],
      "correct": 0,
      "explanation": "The Surya Siddhanta is a foundational treatise on astronomy. While it covers all planets, its name ('Sun Treatise') highlights its astronomical focus."
    },
    {
      "question": "In Indian astronomy, what term is used for the equinox, when the length of day and night is approximately equal?",
      "options": ["Vishuva", "Diwali", "Pongal", "Makar Sankranti"],
      "correct": 0,
      "explanation": "Vishuva (or Vishuvat Sankranti) is the term for the equinox, marking the day when the Sun crosses the celestial equator."
    },
    {
      "question": "The 'Jantar Mantar' observatories in Jaipur, Delhi, and other cities were built during the reign of which Indian king?",
      "options": ["Maharaja Sawai Jai Singh II", "Ashoka the Great", "Akbar the Great", "Chandragupta Maurya"],
      "correct": 0,
      "explanation": "The Jantar Mantar observatories were built in the 18th century by Maharaja Sawai Jai Singh II of Jaipur, a keen astronomer."
    },
    {
      "question": "In Indian astronomical tradition, what term is used for the 'lunar mansion,' which is one of the 27 divisions of the zodiac?",
      "options": ["Nakshatra", "Mahalaya", "Samvatsara", "Veda"],
      "correct": 0,
      "explanation": "The Nakshatras are the 27 (or 28) divisions of the sky along the ecliptic, used to map the position of the Moon."
    },
    {
      "question": "What ancient Indian mathematician and astronomer is known for his groundbreaking work 'Aryabhatiya'?",
      "options": ["Aryabhata", "Brahmagupta", "Bhaskara II", "Varahamihira"],
      "correct": 0,
      "explanation": "The *Aryabhatiya* is the magnum opus of Aryabhata, completed in 499 CE, covering mathematics and astronomy."
    },
    {
      "question": "The 'Kerala school of astronomy and mathematics' made significant contributions to trigonometry and developed what concept in calculus?",
      "options": ["Infinite series", "Quadratic equations", "Pythagorean theorem", "Exponential growth"],
      "correct": 0,
      "explanation": "The Kerala school (e.g., Madhava) developed infinite series expansions for trigonometric functions (like sine, cosine) which are foundational to calculus."
    },
    {
      "question": "The 'Chandra Grahan' and 'Surya Grahan' are the Indian terms for:",
      "options": ["Lunar Eclipse and Solar Eclipse, respectively", "Comet and Meteor, respectively", "Planets and Stars, respectively", "Equinox and Solstice, respectively"],
      "correct": 0,
      "explanation": "Chandra = Moon, Surya = Sun. Grahan = Eclipse. Thus, Chandra Grahan is a Lunar Eclipse and Surya Grahan is a Solar Eclipse."
    },
    {
      "question": "In Indian astronomy, the 'Zodiac' is divided into how many equal parts, each known as a 'Rashi'?",
      "options": ["12", "27", "9", "36"],
      "correct": 0,
      "explanation": "The zodiac (the belt of sky the planets move through) is divided into 12 equal segments of 30 degrees, known as Rashis (e.g., Mesha/Aries, Vrishabha/Taurus)."
    },
    {
      "question": "Which number system uses only two symbols, 0 and 1, to represent all values?",
      "options": ["Binary Number System", "Decimal Number System", "Octal Number System", "Roman Numeral System"],
      "correct": 0,
      "explanation": "The Binary (Base 2) system, fundamental to modern computing, uses only the digits 0 and 1."
    },
    {
      "question": "Pythagoras Theorem is used to find the relationship between the sides of which type of triangle?",
      "options": ["Right-angled Triangle", "Equilateral Triangle", "Isosceles Triangle", "Scalene Triangle"],
      "correct": 0,
      "explanation": "The theorem (a² + b² = c²) applies specifically to right-angled triangles, where 'c' is the hypotenuse (opposite the right angle)."
    },
    {
      "question": "Which number system has a base of 16 and uses the symbols 0-9 and A-F to represent values?",
      "options": ["Hexadecimal Number System", "Decimal Number System", "Binary Number System", "Octal Number System"],
      "correct": 0,
      "explanation": "The Hexadecimal (Base 16) system uses 16 symbols: 0-9 to represent values zero to nine, and A-F to represent values ten to fifteen."
    },
    {
      "question": "The hypotenuse of a right-angled triangle can be found using Pythagoras Theorem, which states:",
      "options": ["c² = a² + b²", "a² + b² = c²", "a² = b² * c²", "b² - c² = a²"],
      "correct": 0,
      "explanation": "Both a and b are mathematically identical statements of the theorem, where 'c' is the hypotenuse. c² = a² + b² is the standard expression."
    },
    {
      "question": "Which ancient Indian sage is credited with formulating the concept of 'Sankhya,' a philosophical system that discusses the nature of the universe and matter?",
      "options": ["Kapila", "Vyasa", "Patanjali", "Gautama"],
      "correct": 0,
      "explanation": "The sage Kapila is traditionally credited as the founder of the Sankhya school of philosophy, which details the concepts of Purusha (consciousness) and Prakriti (matter)."
    },
    {
      "question": "The theory of 'Akasha' in Indian thought refers to:",
      "options": ["The cosmic space or ether", "The physical body (Deha)", "The realm of the gods (Devaloka)", "The process of self-realization (Atma Jnana)"],
      "correct": 0,
      "explanation": "Akasha is the fifth of the Panchamahabhutas (five great elements), representing ether, space, or the non-physical medium that pervades the universe."
    },
    {
      "question": "According to Indian cosmology, the present age is known as:",
      "options": ["Kali Yuga", "Satya Yuga", "Treta Yuga", "Dvapara Yuga"],
      "correct": 0,
      "explanation": "In the Hindu cycle of Yugas (ages), the current era is the Kali Yuga, which is associated with decline in righteousness and is the last of the four ages."
    }
  ]
};