// Extensive medicine database with 1000+ medicines
const medicineDatabase = [
    { id: 1, name: "باراسيتامول", scientificName: "Paracetamol", dosage: "500mg", price: 15.50, category: "مسكنات", available: true, stock: 150, minStock: 20 },
    { id: 2, name: "أموكسيسيلين", scientificName: "Amoxicillin", dosage: "250mg", price: 32.75, category: "مضادات حيوية", available: true, stock: 80, minStock: 15 },
    { id: 3, name: "أدفيل", scientificName: "Ibuprofen", dosage: "400mg", price: 28.00, category: "مسكنات", available: false, stock: 0, minStock: 10 },
    { id: 4, name: "فيتامين د", scientificName: "Vitamin D", dosage: "1000IU", price: 45.00, category: "فيتامينات", available: true, stock: 60, minStock: 10 },
    { id: 5, name: "أوميغا 3", scientificName: "Omega-3", dosage: "1000mg", price: 67.50, category: "مكملات غذائية", available: true, stock: 40, minStock: 5 },
    { id: 6, name: "لوسيك", scientificName: "Losec", dosage: "20mg", price: 120.00, category: "معدة", available: true, stock: 30, minStock: 10 },
    { id: 7, name: "كونكور", scientificName: "Concor", dosage: "5mg", price: 85.00, category: "قلب", available: true, stock: 45, minStock: 10 },
    { id: 8, name: "فنتولين", scientificName: "Ventolin", dosage: "100mcg", price: 55.00, category: "صدر", available: true, stock: 25, minStock: 5 },
    { id: 9, name: "ديكلوفين", scientificName: "Diclofenac", dosage: "50mg", price: 22.00, category: "مسكنات", available: true, stock: 70, minStock: 15 },
    { id: 10, name: "فاستودين", scientificName: "Famotidine", dosage: "40mg", price: 38.00, category: "معدة", available: true, stock: 35, minStock: 10 },
    // Adding more medicines to reach 1000+ (in a real app, this would be from a database)
    // For demonstration, we'll generate the rest programmatically
];

// Generate additional medicines to reach 1000
const categories = ["مسكنات", "مضادات حيوية", "فيتامينات", "مكملات غذائية", "معدة", "قلب", "صدر", "أعصاب", "جلدية", "هرمونات", "عيون", "أنف وأذن"];
const commonMedicines = [
    "أسبيرين", "فولتارين", "كاتافلام", "بروفين", "بنادول", "نيوروفيت", "فيتامين سي", "كالسيوم", "حديد", "ماغنسيوم",
    "زنك", "سيلينيوم", "بيتا كاروتين", "جلوكوزامين", "كولاجين", "ميلاتونين", "جينكو بيلوبا", "أشواغاندا", "كركم",
    "زنجبيل", "ثوم", "أوميبرازول", "بانتوبرازول", "رابيبرازول", "دومبيريدون", "ميتوكلوبراميد", "سيميثيكون", "لاكتولوز",
    "بيزاكوديل", "سينا", "أتينولول", "ميتوبرولول", "نيفيديبين", "أملوديبين", "لوزارتان", "فالسارتان", "هيدروكلوروثيازيد",
    "فوروسيميد", "سبيرونولاكتون", "ديجوكسين", "وارفارين", "كلوبيدوجريل", "أسبرين", "ستاتين", "أتورفاستاتين", "سيمفاستاتين",
    "ميتفورمين", "جلibenclamide", "أنسولين", "ليفوثيروكسين", "بريدنيزولون", "هيدروكورتيزون", "ديكساميثازون", "تستوستيرون",
    "استراديول", "بروجستيرون", "سيبروتيرون", "فينيتوين", "كاربامازيبين", "فالبروات", "جالوبنتين", "بريجابالين", "سيرترالين",
    "فلوكستين", "باروكستين", "سيتالوبرام", "دولوكستين", "فينلافاكسين", "بوسبيرون", "ألبرازولام", "ديازيبام", "لورازيبام",
    "كلونازيبام", "زولبيديم", "إيسوميبرازول", "ديكلوفيناك", "كيتوبروفين", "نابروكسين", "سيلكوكسيب", "ايتوريكوكسيب",
    "ترامادول", "كودايين", "مورفين", "أوكسيكودون", "هيدرومورفون", "فنتانيل", "ميثادون", "بوبرينورفين", "نالوكسون",
    "نالتريكسون", "ديسلوراتادين", "لوراتادين", "سيتريزين", "ليفوسيتريزين", "فيكسوفينادين", "مونتيلوكاست", "زافيرلوكاست",
    "بوديزونيد", "فلوتيكازون", "موميتازون", "بيكلوميثازون", "تريامسينولون", "سالميتيرول", "فورموتيرول", "إبراتروبيوم",
    "تايوتروبيوم", "أسيتبولول", "تيمولول", "دورزولاميد", "بروبيكل", "لاتانوبروست", "ترافوبروست", "بيماتوبروست", "سيكلوسبورين",
    "تاكروليموس", "سيروليموس", "ميثوتريكسات", "أزاثيوبرين", "ميكوفينولات", "ليفلونوميد", "هيدروكسي كلوروكوين", "سلفاسالازين",
    "ميسالازين", "أداليموماب", "إنفليكسيماب", "ريتوكسيماب", "تراستوزوماب", "بيفاسيزوماب", "سيتوكسيماب", "نيفولوماب",
    "بيمبروليزوماب", "أتيزوليزوماب", "دورفالوماب", "أفاستين", "هيرسيبتين", "جليفيك", "تارسيفا", "ايريسا", "تاريفا",
    "نيكسافار", "سوتينت", "افينيتور", "توريسل", "لينفيما", "ريفليميد", "هيوميرا", "إنبريل", "ريميكاد", "سينفونكس"
];

// Generate 1000+ medicines
for (let i = 11; i <= 1000; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomMedicine = commonMedicines[Math.floor(Math.random() * commonMedicines.length)];
    const randomPrice = (Math.random() * 200 + 5).toFixed(2);
    const randomStock = Math.floor(Math.random() * 100);
    const randomAvailable = randomStock > 0;
    
    medicineDatabase.push({
        id: i,
        name: randomMedicine,
        scientificName: `${randomMedicine} Scientific`,
        dosage: `${Math.floor(Math.random() * 500 + 50)}mg`,
        price: parseFloat(randomPrice),
        category: randomCategory,
        available: randomAvailable,
        stock: randomStock,
        minStock: Math.floor(Math.random() * 10 + 5)
    });
}

// Mock patient data with national ID as key
const patients = {
    "29805170101234": {
        name: "أحمد محمد",
        age: 45,
        gender: "ذكر",
        lastVisit: "2023-10-15",
        prescriptions: [
            { id: 1, name: "باراسيتامول", dosage: "500mg", frequency: "3 مرات يومياً", duration: "5 أيام", price: 15.50, available: true },
            { id: 2, name: "أموكسيسيلين", dosage: "250mg", frequency: "مرتين يومياً", duration: "7 أيام", price: 32.75, available: true },
            { id: 3, name: "أدفيل", dosage: "400mg", frequency: "حسب الحاجة", duration: "5 أيام", price: 28.00, available: false }
        ]
    },
    "29907150102345": {
        name: "فاطمة علي",
        age: 38,
        gender: "أنثى",
        lastVisit: "2023-11-02",
        prescriptions: [
            { id: 4, name: "فيتامين د", dosage: "1000IU", frequency: "مرة يومياً", duration: "30 يوم", price: 45.00, available: true },
            { id: 5, name: "أوميغا 3", dosage: "1000mg", frequency: "مرة يومياً", duration: "60 يوم", price: 67.50, available: true }
        ]
    },
    "30108230203456": {
        name: "محمد السيد",
        age: 62,
        gender: "ذكر",
        lastVisit: "2023-10-28",
        prescriptions: [
            { id: 6, name: "لوسيك", dosage: "20mg", frequency: "مرة يومياً", duration: "30 يوم", price: 120.00, available: true },
            { id: 7, name: "كونكور", dosage: "5mg", frequency: "مرة يومياً", duration: "30 يوم", price: 85.00, available: true }
        ]
    }
};

// Mock medicine availability in branches
const medicineAvailability = {
    "باراسيتامول": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 50 },
        { branch: "فرع الجيزة", quantity: 25 },
        { branch: "فرع الإسكندرية", quantity: 15 },
        { branch: "فرع المنصورة", quantity: 30 },
        { branch: "فرع أسيوط", quantity: 20 }
    ],
    "أموكسيسيلين": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 30 },
        { branch: "فرع الجيزة", quantity: 10 },
        { branch: "فرع الإسكندرية", quantity: 5 }
    ],
    "أدفيل": [
        { branch: "فرع الإسكندرية", quantity: 0 }
    ],
    "فيتامين د": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 20 },
        { branch: "فرع الجيزة", quantity: 15 },
        { branch: "فرع الإسكندرية", quantity: 8 },
        { branch: "فرع المنصورة", quantity: 12 }
    ],
    "أوميغا 3": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 12 },
        { branch: "فرع الجيزة", quantity: 5 },
        { branch: "فرع أسيوط", quantity: 3 }
    ],
    "لوسيك": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 25 },
        { branch: "فرع الجيزة", quantity: 15 },
        { branch: "فرع الإسكندرية", quantity: 10 }
    ],
    "كونكور": [
        { branch: "الفرع الرئيسي - القاهرة", quantity: 40 },
        { branch: "فرع الجيزة", quantity: 20 },
        { branch: "فرع المنصورة", quantity: 15 }
    ]
};

// Generate availability for other medicines
medicineDatabase.forEach(medicine => {
    if (!medicineAvailability[medicine.name]) {
        const branches = ["الفرع الرئيسي - القاهرة", "فرع الجيزة", "فرع الإسكندرية", "فرع المنصورة", "فرع أسيوط"];
        const availableBranches = [];
        
        // Randomly assign availability to some branches
        branches.forEach(branch => {
            if (Math.random() > 0.3) { // 70% chance to be available in a branch
                availableBranches.push({
                    branch: branch,
                    quantity: Math.floor(Math.random() * 50)
                });
            }
        });
        
        if (availableBranches.length > 0) {
            medicineAvailability[medicine.name] = availableBranches;
        }
    }
});

// Store reserved medicines
let reservedMedicines = [];

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeRealTimeSearch();
    updateInventoryStats();
    displayInventory();
});

// Initialize tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to current button and pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Update inventory stats when switching to inventory tab
            if (tabId === 'inventory') {
                updateInventoryStats();
                displayInventory();
            }
        });
    });
}

// Initialize real-time search functionality
function initializeRealTimeSearch() {
    // Medicine search
    const medicineSearchInput = document.getElementById('medicine-search-input');
    medicineSearchInput.addEventListener('keyup', debounce(function() {
        searchMedicine();
    }, 300));
    
    // Patient search
    const nationalIdInput = document.getElementById('national-id-input');
    nationalIdInput.addEventListener('keyup', debounce(function() {
        searchPatient();
    }, 300));
    
    // Inventory search
    const inventorySearchInput = document.getElementById('inventory-search');
    inventorySearchInput.addEventListener('keyup', debounce(function() {
        searchInventory();
    }, 300));
    
    // Medicine reservation
    document.getElementById('reserve-btn').addEventListener('click', reserveMedicine);
}

// Function to search for medicine in real-time
function searchMedicine() {
    const searchTerm = document.getElementById('medicine-search-input').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('medicine-search-results');
    const detailsContainer = document.getElementById('medicine-details');
    
    if (!searchTerm) {
        detailsContainer.innerHTML = '<p class="placeholder-text">اكتب اسم الدواء لرؤية نتائج البحث</p>';
        return;
    }
    
    const results = medicineDatabase.filter(medicine => 
        medicine.name.toLowerCase().includes(searchTerm) || 
        medicine.scientificName.toLowerCase().includes(searchTerm) ||
        medicine.category.toLowerCase().includes(searchTerm)
    ).slice(0, 10); // Limit to 10 results for performance
    
    if (results.length > 0) {
        let html = '<div class="medicine-results-grid">';
        
        results.forEach(medicine => {
            const availability = medicineAvailability[medicine.name] || [];
            let availabilityHTML = '';
            
            if (availability.length > 0) {
                availabilityHTML = '<ul class="availability-list">';
                availability.forEach(branch => {
                    availabilityHTML += `<li>${branch.branch}: ${branch.quantity > 0 ? `متوفر (${branch.quantity})` : 'غير متوفر'}</li>`;
                });
                availabilityHTML += '</ul>';
            } else {
                availabilityHTML = '<p>غير متوفر في أي فرع</p>';
            }
            
            // Highlight search term in medicine name
            const highlightedName = highlightText(medicine.name, searchTerm);
            const highlightedScientific = highlightText(medicine.scientificName, searchTerm);
            
            html += `
                <div class="medicine-card">
                    <h4>${highlightedName} (${highlightedScientific})</h4>
                    <p><strong>الجرعة:</strong> ${medicine.dosage}</p>
                    <p><strong>الفئة:</strong> ${medicine.category}</p>
                    <p><strong>السعر:</strong> ${medicine.price} جنيه</p>
                    <p><strong>الحالة:</strong> <span class="${medicine.available ? 'status-available' : 'status-unavailable'}">${medicine.available ? 'متوفر' : 'غير متوفر'}</span></p>
                    <div class="availability-info">
                        <h5>التوفر في الفروع:</h5>
                        ${availabilityHTML}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        detailsContainer.innerHTML = html;
    } else {
        detailsContainer.innerHTML = '<p class="placeholder-text">لا توجد نتائج للبحث</p>';
    }
}

// Function to search for patient by national ID in real-time
function searchPatient() {
    const nationalId = document.getElementById('national-id-input').value.trim();
    const resultsContainer = document.getElementById('patient-search-results');
    
    if (!nationalId) {
        resultsContainer.innerHTML = '<div class="placeholder-text"><p>أدخل الرقم القومي لرؤية بيانات المريض والأدوية الموصوفة</p></div>';
        return;
    }
    
    // Validate national ID format (14 digits for Egypt)
    if (!/^\d{14}$/.test(nationalId)) {
        resultsContainer.innerHTML = '<div class="placeholder-text"><p>الرقم القومي يجب أن يتكون من 14 رقمًا</p></div>';
        return;
    }
    
    if (patients[nationalId]) {
        const patient = patients[nationalId];
        
        let html = `
            <div id="patient-info">
                <h4>معلومات المريض</h4>
                <div class="patient-details">
                    <p><strong>الاسم:</strong> ${patient.name}</p>
                    <p><strong>العمر:</strong> ${patient.age}</p>
                    <p><strong>النوع:</strong> ${patient.gender}</p>
                    <p><strong>آخر زيارة:</strong> ${patient.lastVisit}</p>
                </div>
            </div>
            <div id="patient-prescriptions">
                <h4>الأدوية الموصوفة</h4>
        `;
        
        if (patient.prescriptions.length > 0) {
            html += `
                <table id="prescriptions-table">
                    <thead>
                        <tr>
                            <th>اسم الدواء</th>
                            <th>الجرعة</th>
                            <th>التكرار</th>
                            <th>المدة</th>
                            <th>السعر</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            patient.prescriptions.forEach(prescription => {
                const statusClass = prescription.available ? 'status-available' : 'status-unavailable';
                const statusText = prescription.available ? 'متوفر' : 'غير متوفر';
                
                html += `
                    <tr>
                        <td>${prescription.name}</td>
                        <td>${prescription.dosage}</td>
                        <td>${prescription.frequency}</td>
                        <td>${prescription.duration}</td>
                        <td>${prescription.price} جنيه</td>
                        <td class="${statusClass}">${statusText}</td>
                    </tr>
                `;
            });
            
            html += `
                    </tbody>
                </table>
            `;
        } else {
            html += '<p>لا توجد أدوية موصوفة لهذا المريض</p>';
        }
        
        html += '</div>';
        resultsContainer.innerHTML = html;
    } else {
        // For demonstration, generate a random patient if not found
        generateRandomPatient(nationalId);
        // Search again with the generated patient
        searchPatient();
    }
}

// Function to generate a random patient for demonstration
function generateRandomPatient(nationalId) {
    const firstNames = ["أحمد", "محمد", "محمود", "علي", "خالد", "مصطفى", "ياسر", "هشام", "أيمن", "عمرو"];
    const lastNames = ["عبدالله", "السيد", "فاروق", "حسن", "رضا", "شعبان", "ناصر", "عثمان", "مرسي", "عادل"];
    const genders = ["ذكر", "أنثى"];
    
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomAge = Math.floor(Math.random() * 50) + 18;
    
    // Generate a random recent date for last visit
    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30));
    const formattedDate = randomDate.toISOString().split('T')[0];
    
    // Generate 1-3 random prescriptions
    const randomPrescriptions = [];
    const numPrescriptions = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numPrescriptions; i++) {
        const randomMedicine = medicineDatabase[Math.floor(Math.random() * medicineDatabase.length)];
        const frequencies = ["مرة يومياً", "مرتين يومياً", "3 مرات يومياً", "حسب الحاجة"];
        const durations = ["5 أيام", "7 أيام", "10 أيام", "14 يوم", "30 يوم"];
        
        randomPrescriptions.push({
            id: randomMedicine.id,
            name: randomMedicine.name,
            dosage: randomMedicine.dosage,
            frequency: frequencies[Math.floor(Math.random() * frequencies.length)],
            duration: durations[Math.floor(Math.random() * durations.length)],
            price: randomMedicine.price,
            available: randomMedicine.available
        });
    }
    
    // Add the generated patient to the patients object
    patients[nationalId] = {
        name: `${randomFirstName} ${randomLastName}`,
        age: randomAge,
        gender: randomGender,
        lastVisit: formattedDate,
        prescriptions: randomPrescriptions
    };
}

// Function to reserve a medicine
function reserveMedicine() {
    const nationalId = document.getElementById('reserve-national-id').value.trim();
    const medicineName = document.getElementById('reserve-medicine').value.trim();
    const branch = document.getElementById('reserve-branch').value;
    const resultContainer = document.getElementById('reservation-result');
    
    if (!nationalId || !medicineName || !branch) {
        resultContainer.innerHTML = '<div class="error-message">الرجاء ملء جميع الحقول</div>';
        resultContainer.classList.remove('hidden');
        return;
    }
    
    // Check if patient exists
    if (!patients[nationalId]) {
        resultContainer.innerHTML = '<div class="error-message">لا توجد بيانات للمريض بهذا الرقم القومي</div>';
        resultContainer.classList.remove('hidden');
        return;
    }
    
    // Check if medicine exists and is available in the selected branch
    const medicine = medicineDatabase.find(m => m.name === medicineName);
    if (!medicine) {
        resultContainer.innerHTML = '<div class="error-message">الدواء غير مسجل في النظام</div>';
        resultContainer.classList.remove('hidden');
        return;
    }
    
    const branchAvailability = medicineAvailability[medicineName]?.find(b => b.branch === branch);
    if (!branchAvailability || branchAvailability.quantity === 0) {
        resultContainer.innerHTML = `<div class="error-message">الدواء غير متوفر في ${branch}</div>`;
        resultContainer.classList.remove('hidden');
        return;
    }
    
    // Check if medicine is already reserved for this patient
    const existingReservation = reservedMedicines.find(r => 
        r.patientNationalId === nationalId && r.name === medicineName && r.branch === branch
    );
    
    if (existingReservation) {
        resultContainer.innerHTML = '<div class="error-message">هذا الدواء محجوز مسبقاً لهذا المريض في نفس الفرع</div>';
        resultContainer.classList.remove('hidden');
        return;
    }
    
    // Add to reserved medicines
    reservedMedicines.push({
        id: medicine.id,
        name: medicineName,
        patientNationalId: nationalId,
        branch: branch,
        price: medicine.price,
        reservationDate: new Date().toISOString().split('T')[0]
    });
    
    // Update availability
    branchAvailability.quantity -= 1;
    
    // Update medicine stock in database
    medicine.stock -= 1;
    
    // Show success message
    resultContainer.innerHTML = `
        <div class="success-message">
            <p>تم حجز دواء <strong>${medicineName}</strong> بنجاح للمريض ${patients[nationalId].name}</p>
            <p>الفرع: <strong>${branch}</strong></p>
            <p>سعر الدواء: <strong>${medicine.price} جنيه</strong></p>
            <p>رقم الحجز: <strong>${Date.now()}</strong></p>
        </div>
    `;
    
    // Update inventory display
    updateInventoryStats();
    displayInventory();
    
    // Clear form
    document.getElementById('reserve-medicine').value = '';
}

// Function to update inventory statistics
function updateInventoryStats() {
    const totalMedicines = medicineDatabase.length;
    const availableMedicines = medicineDatabase.filter(m => m.available).length;
    const lowStockMedicines = medicineDatabase.filter(m => m.stock > 0 && m.stock <= m.minStock).length;
    const outOfStockMedicines = medicineDatabase.filter(m => !m.available).length;
    
    document.getElementById('total-medicines').textContent = totalMedicines;
    document.getElementById('available-medicines').textContent = availableMedicines;
    document.getElementById('low-stock').textContent = lowStockMedicines;
    document.getElementById('out-of-stock').textContent = outOfStockMedicines;
}

// Function to display inventory
function displayInventory() {
    const inventoryList = document.getElementById('inventory-list');
    const searchTerm = document.getElementById('inventory-search').value.trim().toLowerCase();
    
    let displayMedicines;
    
    if (searchTerm) {
        // Filter medicines based on search term
        displayMedicines = medicineDatabase.filter(medicine => 
            medicine.name.toLowerCase().includes(searchTerm) || 
            medicine.scientificName.toLowerCase().includes(searchTerm) ||
            medicine.category.toLowerCase().includes(searchTerm)
        ).slice(0, 20); // Limit to 20 results for performance
    } else {
        // Display first 20 medicines (for performance)
        displayMedicines = medicineDatabase.slice(0, 20);
    }
    
    inventoryList.innerHTML = '';
    
    if (displayMedicines.length > 0) {
        displayMedicines.forEach(medicine => {
            const row = document.createElement('tr');
            
            let statusClass, statusText;
            if (medicine.available) {
                if (medicine.stock <= medicine.minStock) {
                    statusClass = 'status-low';
                    statusText = 'منخفض';
                } else {
                    statusClass = 'status-available';
                    statusText = 'متوفر';
                }
            } else {
                statusClass = 'status-unavailable';
                statusText = 'غير متوفر';
            }
            
            // Highlight search term in medicine name if searching
            const highlightedName = searchTerm ? highlightText(medicine.name, searchTerm) : medicine.name;
            
            row.innerHTML = `
                <td>${highlightedName}</td>
                <td>${medicine.stock}</td>
                <td>${medicine.minStock}</td>
                <td class="${statusClass}">${statusText}</td>
                <td>${new Date().toISOString().split('T')[0]}</td>
            `;
            
            inventoryList.appendChild(row);
        });
    } else {
        inventoryList.innerHTML = '<tr><td colspan="5" class="text-center">لا توجد نتائج للبحث</td></tr>';
    }
}

// Function to search inventory in real-time
function searchInventory() {
    displayInventory();
}

// Function to highlight search terms in text
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add some CSS for the new elements
const additionalStyles = `
    .medicine-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }
    
    .medicine-card {
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }
    
    .medicine-card h4 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .medicine-card p {
        margin-bottom: 0.5rem;
    }
    
    .availability-info {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .availability-info h5 {
        margin-bottom: 0.5rem;
        color: var(--gray-color);
    }
    
    .availability-list {
        list-style: none;
        padding: 0;
    }
    
    .availability-list li {
        padding: 0.25rem 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .success-message {
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid #c3e6cb;
    }
    
    .error-message {
        background-color: #f8d7da;
        color: #721c24;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid #f5c6cb;
    }
    
    .highlight {
        background-color: var(--accent-color);
        padding: 2px 4px;
        border-radius: 2px;
    }
    
    @media (max-width: 768px) {
        .medicine-results-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);