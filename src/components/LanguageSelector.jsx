function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  const languages = ["English", "हिन्दी", "मराठी"];

  return (
    <div className="language-bar">
      <span>Select Language:</span>

      {languages.map((language) => (
        <button
          key={language}
          type="button"
          className={
            selectedLanguage === language
              ? "language-active"
              : ""
          }
          onClick={() => onLanguageChange(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;