export default function Footer() {
  return (
    <footer id="om-oss" className="border-t border-neutralLine mt-16 bg-site/40">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-lg text-neutralDark">Construere Bygg</h4>
          <p className="text-neutralText mt-2">
            Lösningar från små renoveringar till totalentreprenader – i tid och med kvalitet.
          </p>
        </div>
        <div className="sm:text-right text-neutralText">
          <p>Org.nr 5590XXXX-XXXX</p>
          <p>Telefon: 08-123 456 78</p>
          <p>Adress: Byggvägen 1, 123 45 Stockholm</p>
          <p>info@construerebygg.se</p>
        </div>
      </div>
    </footer>
  );
}
