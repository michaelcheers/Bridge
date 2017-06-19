using Bridge;

namespace System
{
    /// <summary>
    /// Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
    /// </summary>
    [FileName("Uri.js")]
    [Reflectable]
    public class Uri
    {
        public Uri(string uriString)
        {
            AbsoluteUri = uriString;
        }

        public string AbsoluteUri
        {
            get;
        }

        public string GetAbsolutePath() => AbsoluteUri;

        [InlineConst]
        public const string PackUriScheme = "pack";

        public static void RegisterPackUriParser() { }

        public static System.Uri CreateRelativeOrAbsoluteUri(string relativeUriString)
        {
            return new System.Uri(relativeUriString);
        }

        public static System.Uri CreateAbsoluteUri(string absoluteUriString)
        {
            System.Uri uri;

            if (!TryCreateAbsoluteUri(absoluteUriString, out uri))
            {
                throw new Exception($"Can't create CreateAbsoluteUri from {absoluteUriString}");
            }

            return uri;
        }

        public static System.Uri CreateAbsoluteUri(System.Uri baseUri, string relativeUriString)
        {
            System.Uri uri;

            if (!TryCreateAbsoluteUri(baseUri, relativeUriString, out uri))
            {
                throw new Exception($"Can't create CreateAbsoluteUri from {baseUri.GetAbsolutePath()} and {relativeUriString}");
            }

            return uri;
        }

        public static System.Uri CreateRelativeUri(string relativeUriString)
        {
            return new System.Uri(relativeUriString);
        }

        public static bool TryCreateAbsoluteUri(string absoluteUriString, out System.Uri uri)
        {
            uri = new System.Uri(absoluteUriString);
            UriComponents uriComponents;

            if (!TryGetUriComponents(uri, out uriComponents))
            {
                uri = null;
                return false;
            }

            return true;
        }

        public static bool TryCreateAbsoluteUri(System.Uri baseUri, string relativeUriString, out System.Uri uri)
        {
            UriComponents baseUriComponents;

            if (!TryGetUriComponents(baseUri, out baseUriComponents))
            {
                uri = null;
                return false;
            }

            UriComponents uriComponents = baseUriComponents.Combine(relativeUriString);

            uri = new System.Uri(uriComponents.AbsoluteUri);
            uri["UriComponents"] = uriComponents;

            return true;
        }

        public static UriComponents GetUriComponents(System.Uri uri)
        {
            UriComponents uriComponents;
            if (!TryGetUriComponents(uri, out uriComponents))
            {
                throw new InvalidOperationException("This operation is not supported for a relative URI.");
            }

            return uriComponents;
        }

        public static bool TryGetUriComponents(System.Uri uri, out UriComponents uriComponents)
        {
            if (uri.HasOwnProperty("UriComponents"))
            {
                uriComponents = (UriComponents)uri["UriComponents"];
            }
            else
            {
                if (!UriComponents.TryParse(uri.AbsoluteUri, out uriComponents))
                {
                    uriComponents = null;
                }

                uri["UriComponents"] = uriComponents;
            }

            return uriComponents != null;
        }
    }
}