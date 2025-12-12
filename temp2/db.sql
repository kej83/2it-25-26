DROP TABLE datautstyr;

CREATE TABLE datautstyr(
    id SERIAL PRIMARY KEY,
    navn TEXT,
    kategori TEXT,
    serienummer TEXT,
    innkjopsdato DATE,
    -- status er ('på lager', 'utlånt', 'kassert', 'til reparasjon')
    status TEXT,
    verdi FLOAT,
    kommentar TEXT
);

-- Steg 3: Sett inn 30 rader med data fordelt på 6 kategorier
INSERT INTO datautstyr (navn, kategori, serienummer, innkjopsdato, status, verdi, kommentar) VALUES
-- Kategori 1: Bærbare datamaskiner (Laptops)
('Dell Latitude 5420', 'Bærbar PC', 'DLT5420998877665', '2023-01-15', 'på lager', 14500.00, 'Standard arbeidsmaskin'),
('MacBook Pro 14"', 'Bærbar PC', 'MBP1420101100123', '2023-03-01', 'utlånt', 29990.50, 'Utlånt til avdeling Design'),
('HP EliteBook G8', 'Bærbar PC', 'HPETBK87654321098', '2022-11-20', 'til reparasjon', 12150.00, 'Mangler skjermkalibrering'),
('Lenovo ThinkPad X1', 'Bærbar PC', 'LNX1TP87889900112', '2023-02-10', 'på lager', 18999.00, 'For ledergruppen'),
('Asus ROG Zephyrus', 'Bærbar PC', 'AZRZ20000000001', '2023-05-05', 'utlånt', 22500.00, 'Utlånt til utviklerteam 2'),

-- Kategori 2: Skjermer (Monitors)
('Dell Ultrasharp 27"', 'Skjerm', 'DLU2780000000001', '2023-04-01', 'på lager', 4500.00, 'Standard kontorskjerm'),
('LG Ultrafine 34"', 'Skjerm', 'LGUF349876543210', '2023-04-01', 'på lager', 7890.00, 'Til avdeling Markedsføring'),
('Samsung Odyssey G7', 'Skjerm', 'SMOG7001122334455', '2022-12-12', 'kassert', 6200.00, 'Påkjørt av renholdsmaskin'),
('BenQ PD2700U', 'Skjerm', 'BQPU700100010001', '2023-06-15', 'utlånt', 5500.00, 'Utlånt, trenger kvittering'),
('Philips Brilliance 32"', 'Skjerm', 'PHBR329988776655', '2023-07-01', 'på lager', 8100.00, 'Høy oppløsning'),

-- Kategori 3: Serverutstyr (Server Hardware)
('HP ProLiant DL380', 'Server', 'HPPDL38012345678', '2021-10-01', 'på lager', 45000.00, 'Hoveddatabase server #3'),
('Cisco Nexus Switch', 'Nettverk', 'CNSW900000001', '2020-05-15', 'på lager', 75000.00, 'Kjerneswitch datasenter'),
('NetApp NAS Storage', 'Lagring', 'NANS010101010101', '2021-12-01', 'til reparasjon', 32000.00, 'Feil i strømforsyning'),
('APC Smart-UPS', 'Strøm', 'APSU123456789012', '2022-01-20', 'på lager', 15000.00, 'UPS for rack A'),
('Dell PowerEdge R640', 'Server', 'DPER640001234567', '2023-08-01', 'på lager', 38000.00, 'Virtuell maskin-vert'),

-- Kategori 4: Periferiutstyr (Peripherals)
('Logitech MX Master 3S', 'Mus', 'LGMXM3S2233445566', '2023-01-05', 'utlånt', 1090.00, 'Ergonomisk mus'),
('Keychron K8 Mekanisk', 'Tastatur', 'KCK8M10101010101', '2023-02-05', 'på lager', 1599.00, 'For utviklingsteam'),
('Logitech C920 Webcam', 'Webkamera', 'LGC92099988877766', '2023-03-05', 'kassert', 750.00, 'Ødelagt linse'),
('Jabra Evolve 75 Headset', 'Headset', 'JEH7555544433322', '2023-04-05', 'utlånt', 3200.00, 'Støyreduserende'),
('Samsung T7 SSD 1TB', 'Ekstern Disk', 'SMT71TB112233445', '2023-05-05', 'på lager', 1800.00, 'For backup av prosjekt'),

-- Kategori 5: Mobil & Nettbrett (Mobile & Tablet)
('iPhone 15 Pro Max', 'Mobiltelefon', 'IP15PM776655443322', '2023-09-01', 'utlånt', 18990.00, 'Utlånt til Salgssjef'),
('Samsung Galaxy S23', 'Mobiltelefon', 'SMGS230000000011', '2023-10-01', 'på lager', 12500.00, 'Til nye ansatte'),
('iPad Pro 11"', 'Nettbrett', 'IPP1109876543210', '2022-11-01', 'utlånt', 9900.00, 'Til styremøter'),
('Microsoft Surface Pro', 'Nettbrett', 'MSPRO765432109876', '2023-11-01', 'på lager', 13500.00, 'På lager, venter på utdeling'),
('Google Pixel 8', 'Mobiltelefon', 'GP88887776665554', '2023-12-01', 'på lager', 9990.00, 'Backup-telefon'),

-- Kategori 6: Nettverksutstyr & Printere (Network & Printers)
('Ubiquiti UniFi AP 6', 'Nettverk', 'UUIAP612345678901', '2023-01-25', 'på lager', 2800.00, 'Ny WiFi til 3. etasje'),
('HP LaserJet M404', 'Printer', 'HPLJM40498765432', '2022-07-01', 'til reparasjon', 4500.00, 'Feil på toner-sensor'),
('Netgear Nighthawk', 'Nettverk', 'NGNHWK112233445566', '2022-03-10', 'kassert', 1900.00, 'Gammel modell, erstattet'),
('Canon Pixma Pro', 'Printer', 'CPXMPR102030405060', '2023-04-20', 'utlånt', 5900.00, 'Utlånt til grafisk avdeling'),
('Fortinet Firewall', 'Nettverk', 'FFWLL00000000001', '2021-09-01', 'på lager', 25000.00, 'Hovedbrannmur #2')
;

-- Eksempel: Finn alt utstyr som er "til reparasjon"
SELECT 
    navn, 
    kategori, 
    status, 
    verdi 
FROM 
    datautstyr 
WHERE 
    status = 'til reparasjon';

    